import axios from 'axios'
import Qs from 'qs'
import CryptoJS from 'crypto-js'

// key/密钥
const APPKEY = 'PmVOkj4Un6dfKCqQryMR'
const APPSECRET = 'e238bf64d77e5be7284686aaacd0232e7248254a'

let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://wxapi.lexivip.com/v1.0/'
} else if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://wxapi.lexivip.com/v1.0/'
} else {
    baseUrl = 'https://wxapi.lexivip.com/v1.0/'
}

// 生成验证请求签名
function buildSign (timestamp, nonceStr) {
    const params = {
      app_key: APPKEY,
      timestamp: timestamp,
      nonce_str: nonceStr
    }
    const keys = Object.keys(params)
    keys.sort()
  
    const paramAry = []
    for (let i = 0; i < keys.length; i++) {
      paramAry.push(keys[i] + '=' + params[keys[i]])
    }
  
    return CryptoJS.SHA1(paramAry.join('&') + APPSECRET).toString()
  }

// 生成随机字符串
function randomString(len) {
    len = len || 16
    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    let nonceStr = ''
    for (let i = 0; i < len; i++) {
        nonceStr += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return nonceStr
}

// 为每个请求自动添加系统级参数
function appendSystemParams() {
    const t = Date.parse(new Date()) / 1000
    const s = randomString(16)
    return {
        app_key: APPKEY,
        timestamp: t,
        nonce_str: s,
        sign: buildSign(t, s)
    }
}

// axios 配置
const axiosWrap = axios.create({
    timeout: 15000,
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic  ZXlKaGJHY2lPaUpJVXpJMU5pSXNJbWxoZENJNk1UVTBORFV4TWpneE1Td2laWGh3SWpveE5UUTNNVEEwT0RFeGZRLmV5SnBaQ0k2TVRFME9YMC5JTWRXVWJINDhVb1Q1TjVBSXgzSVQ4RDFIUnZVZlNhR2M2eW5SVHB5WFhFOmV5SmhiR2NpT2lKSVV6STFOaUlzSW1saGRDSTZNVFUwTkRVeE1qZ3hNU3dpWlhod0lqb3hOVFEzTVRBME9ERXhmUS5leUpwWkNJNk1URTBPWDAuSU1kV1ViSDQ4VW9UNU41QUl4M0lUOEQxSFJ2VWZTYUdjNnluUlRweVhYRQ=='
    },
    // 负责 `params` 序列化的函数
    paramsSerializer: (params) => {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    }
})

// http request 拦截器
axiosWrap.interceptors.request.use(
    (config) => {
        // 添加验证签名
        config.params = {
            ...config.params, ...appendSystemParams()
        }

        // 判断是否存在token，如果存在的话，则每个http header都加上token
        // if (store.state.token) {
        //     // 添加axios头部Authorized
        //     config.auth = {
        //         username: store.state.token,
        //         password: store.state.token
        //     }
        // }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// http response 拦截器, 401状态时跳转登录页并清除token
axiosWrap.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT)

                    if (error.response.data.status.code === 400) {
                        return error.response.data
                    } else {
                        router.replace({
                            path: '/auth/login',
                            query: { redirect: router.currentRoute.fullPath }
                        })
                    }
            }
        }

        return Promise.reject(error) // 返回接口返回的错误信息
    }
)

export default axiosWrap