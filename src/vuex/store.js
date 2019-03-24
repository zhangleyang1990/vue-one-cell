import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)

const state = { // 状态
    token: null
}

const mutations = {
    [types.LOGIN](state, data) { //登录
        console.log(123)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    strict: true,
    // plugins: [createPersistedState(persistedOptions)]
})

export default store