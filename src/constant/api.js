
// 配置API接口文件
export default  {
    // AuthhandleCountryPickOpenhandleCountryPickOpenhandleCountryPickOpen
    auth_login: 'accounts/wxa_login', // POST 登录
    auth_logout: 'auth/logout', // POST 退出登录
    auth_register: 'auth/register', // POST 注册
    auth_check_mobile: 'auth/mobile', // GET 验证手机号是否存在
    auth_get_msm_code: 'users/wx_bind_mobile_verify_code', // POST 注册时候手机验证码---
    bind_mobile: 'accounts/wxa_bind_mobile', // 绑定手机号码---
    auth_weixin: 'accounts/wxa_get_authorize_info', // POST 微信授权获取用户信息、openid、unionid
    wxa_authorize_bind_mobile: 'accounts/wxa_authorize_bind_mobile', // 微信授权绑定手机号
    auth_refresh_session: 'accounts/refresh_wxa_session', // session 过期则刷新
    countries: 'countries', // 获取国家列表
    bind_friend: 'guess_image/add_friend', // 绑定好友关系
    shop_animation: 'store/store_headline',

    // User
    user: 'users', // GET 获取用户（当前登录用户）
    user_profile: 'users/:id/profile', // GET 获取用户资料（当前登录用户）
    users_profile: 'users/profile', // GET 获取用户资料（当前登录用户）
    user_authorize: 'accounts/wxa_authorize', //openid---
    user_avatar_upload: '', // POST 
    user_upload_token: 'assets/user_upload_token', // GET 获取上传Token
    user_withdraw: 'pay_account/life_cash_money', // 提现至微信
    orders_order_coupon_count: 'orders/order_coupon_count', // 订单的数量和未使用优惠券的额数量
    market_is_new_user_bonus: 'market/is_new_user_bonus',// 新人是否领取100元红包
    market_grant_new_user_bonus: 'market/grant_new_user_bonus', // 新人领取100元红包
    users_get_visitor_life_stores: 'users/get_visitor_life_stores', // 访问过的生活馆
    market_share_store_poster: 'market/share/store_poster', // 分享生活馆
    store_close_phases_description: 'store/close_phases_description', // 生活馆显示文案
    // Asset
    asset_upload: 'assets/upload', // POST 上传附件
    asset_detail: 'assets/show_asset', // GET 获取附件 

    // Category
    categories: 'official/categories', // GET 获取产品分类
    siblings_categories: 'categories/siblings', // GET 同级分类

    //share 
    market_share_store: 'market/share/store', // 分享品牌管换取图片
    market_share_life_store: 'market/share/life_store', // 分享生活馆卡片
    market_share_invite_poster: 'market/share/invite_poster', // 邀请好友生成海报
    market_share_invite_carde: 'market/share/invite_card', // 邀请好友开馆的卡片
    market_share_window_poster: 'market/share/shop_window_poster', // 分享橱窗海报
    market_share_product_card: 'market/share/product_card', // 分享商品的图片生成

    // Brand
    brand_list: 'brands', // GET 品牌列表
    brand_detail: 'brands/:rid', // GET 品牌详情
    shop_info: 'official_store/info', // 获取店铺信息--h
    official_store_info: 'official_store/info', // 获取店铺信息--h
    store_announcement: 'store/announcement', //获取店铺公告---已弃用
    official_store_announcement: 'official_store/announcement', //获取店铺公告---
    BrowseQuantityNumber: 'store/:rid/visitor', //浏览过的人数---
    brand_info: 'store/detail', // 品牌故事
    is_authentication: 'users/get_authenticate_status', //GET店铺是否经过官方认证
    official_store_detail: 'official_store/detail', // 品牌故事h

    // 生活馆
    life_store: 'store/life_store', // GET 生活馆信息
    life_store_edit: 'store/edit_store', // GET
    life_store_apply: 'store/apply_life_store', // POST 申请生活馆
    life_store_products: 'core_platforms/products/by_store', // POST 生活馆商品
    life_records_detail: 'life_records/detail', // get 生活志详情
    life_records_similar: 'life_records/similar', // 相关故事推荐
    life_records_comments: 'life_records/comments', //get 获取生活志评论
    life_records_child_comments: 'life_records/child_comments', // 获取子评论
    life_records_comments_praises: 'life_records/comments/praises', // 生活志评论的点赞
    life_records_praises: 'life_records/praises', // 对生活志点赞
    life_records_user_likes: 'life_records/user_likes', // 操作生活志
    life_store_delete_product: 'core_platforms/fx_distribute/remove', // DELETE 从生活馆删除某商品
    life_store_last_visit: 'users/last_store', // GET 用户最后访问的生活馆
    life_store_update_rid: 'users/update_last_store_rid', // POST 更新最后访问的生活馆ID
    life_store_headlines: 'store/store_headline', // GET 
    life_store_update_rid: 'users/update_last_store_rid', // POST 更新最后访问的生活馆ID
    life_store_update_logo: 'store/update_life_store_logo', // POST 
    life_records_guess_likes: 'life_records/guess_likes', //get 发现的猜你喜欢
    life_store_delete_product: 'core_platforms/fx_distribute/remove', // DELETE 从生活馆删除某商品
    life_records_wonderful_stories: 'life_records/wonderful_stories', //get精彩故事
    life_store_orders_collect: 'stats/life_orders_collect', // GET 生活馆订单汇总
    life_store_orders_list: 'orders/life_orders', // GET 生活馆订单列表
    life_store_income_collect: 'stats/life_orders_sale_collect', // GET 生活馆收益汇总
    life_store_cash_collect: 'stats/life_cash_collect', // GET 生活馆提现汇总
    life_store_last_withdraw: 'stats/life_cash_recent', // GET 最近一次提现记录
    cash_money_count: 'cash_money/count', // GET 最近一次提现记录
    life_store_transactions: 'stats/life_orders/transactions', // GET 生活馆订单交易记录
    life_store_orders: 'orders/life_orders', // GET 生活馆订单列表
    life_store_statements: 'stats/life_orders/statements', // GET 生活馆对账单
    life_store_statement_detail: 'stats/life_orders/statement_items', // GET 生活馆对账单详情
    life_store_income_detail: 'stats/life_orders/:rid', // GET 收益详情
    core_platforms_life_records: 'core_platforms/life_records', // 获取生活志文章列表
    life_records_recommend_products: 'life_records/recommend_products', // get 生活值详情 推荐
    life_records_creator_story: 'life_records/creator_story', // 创作人故事列表
    life_records_hand_teach: 'life_records/hand_teach', // 手做教学列表
    life_records_grass_note: 'life_records/grass_note', // 种草笔记频道列表
    life_records_life_remember: 'life_records/life_remember', // 生活记事频道列表
    official_store_master_info: 'official_store/master_info', // 店铺主人信息
    users_save_form_ids: 'users/save_form_ids',  // 发送消息

    life_invite_count: 'invite_life_count', // 获取我的邀请好友数量汇总
    life_invite_reward: 'invite_life_reward', // 获取我的邀请好友信息汇总
    life_invite_reward_list: 'invite_life/rewards', // 邀请好友-奖励列表
    life_invite_friends: 'invite_life/friends', // 邀请好友-我的朋友
    life_invite_cash: 'invite_life/cash_money', // 邀请好友开通生活馆现金提现
    users_cash_id_card: 'users/cash_id_card',

    // 分销

    // GET 分销池
    get_all_distribution: 'fx_distribute/index',
    // GET 获取-推荐--热门单品的分销
    get_hot_distribution: 'fx_distribute/hot',
    // GET 获取-推荐--官方单品的分销
    get_sticked_distribution: 'fx_distribute/sticked',
    // GET 获取-推荐--新品单品的分销
    get_new_distribution: 'fx_distribute/latest',
    // PUT 已经上架
    distribution_sell: 'core_platforms/fx_distribute/publish',
    // GET 最新分销商品
    distribute_newest: 'core_platforms/fx_distribute/latest',
    // GET 本周最受欢迎的分销商品
    distribution_week_popular: 'fx_distribute/week_popular',
    // GET 选品中心-全部商品
    distribute_products: 'fx_distribute/choose_center',
    // GET 选品中心-符合条件数量
    distribute_product_count: 'fx_distribute/choose_center/count',

    // Product
    products: 'products/by_store', // GET 产品列表---
    latest_products: 'products/latest', // GET 最新产品---
    sticked_products: 'fx_distribute/agency', // GET 推荐产品---
    brand_products: 'products/by_brand/:rid', // GET 品牌下产品列表
    product_info: 'products/:rid', // GET 产品信息
    product_content: 'products/:rid/detail', // GET 产品图文介绍
    product_detail: 'products/:rid/all_detail', // GET 产品详情---
    by_sku: 'products/by_sku', // GET 多个sku详情---
    by_store_sku: 'products/by_store_sku', // GET sku以及店铺的信息详情---
    product_skus: 'products/skus', // GET 产品SKU
    skus: 'products/by_sku', // GET 产品SKU信息
    wishlist: 'wishlist', // GET 心愿单---
    wishlist_addto: 'wishlist/addto', // POST 添加收藏
    wishlist_remove: 'wishlist/remove', // POST 移除收藏
    wxacode: 'market/wxacode', // POST 生成小程序码
    market_wxa_code: 'market/wxa_code', // 生成小程序编码
    wxa_poster: 'market/wxa_poster', // POST 生成分享海报
    theme_product: 'wx_app_design', //get 1,主打设计 2,优质精选---
    theme: 'wx_app_design/collections', //Get 主题---
    marketBanners: 'banners/:rid', //广告--
    products_index: 'products/index', // 首页作品的排序---
    logistics_core_freight_template: 'logistics/core_freight_template/:rid', // 商品对应的物流模板
    products_custom_made: 'products/custom_made', // 接单定制
    products_free_postage: 'products/free_postage', // 包邮专区
    products_basic: 'products/basic', // 产品详情的第一屏信息
    products_detail: 'products/detail', // 产品详情
    handpick_new_express: 'column/handpick_new_express', // 新品速递
    handpick_new_express_count: 'column/handpick_new_express/count', // 新品速递数量

    // 核心 product
    banners_rid: 'banners/:rid', // 特色品牌馆广告列表
    banners_explore: 'banners/explore', //探索的头部广告h
    banners_handpick: 'banners/handpick', // 精选区域的头部广告
    products_similar: 'products/similar', // 相似的产品
    category_products: 'category/products', // 分类商品列表
    category_products_count: 'category/products/count', // 分类商品列表数量
    column_collections: 'column/collections', // 集合
    column_collections_basic: 'column/collections/basic', // 首页集合列表
    column_explore_new: 'column/explore_new', // 优质新品
    column_explore_new_count: 'column/explore_new/count', // 优质新品
    core_platforms_search: 'core_platforms/search', // 搜索历史
    life_records_recommend: 'life_records/recommend', // 种草清单
    shop_windows_guess_like: 'shop_windows/guess_like', // 橱窗详情里的猜你喜欢
    column_daily_recommends: "column/daily_recommends", //今日推荐
    column_affordable_goods: 'column/affordable_goods', //百元好物
    column_affordable_goods_count: 'column/affordable_goods/count', //百元好物
    column_explore_recommend: 'column/explore_recommend', // 编辑推荐h
    column_explore_recommend_count: 'column/explore_recommend/count', // 编辑推荐h
    column_collections_detail: 'column/collections/detail', //集合详情
    banners_handpick_content: 'banners/handpick_content', // 精选的中间广告
    column_handpick_recommend: 'column/handpick_recommend', // 人气推荐
    column_preferential_design: 'column/preferential_design', // 特惠好设计
    column_preferential_design_count: 'column/preferential_design/count', // 特惠好设计
    core_platforms_search_users: 'core_platforms/search/users', // 搜索落地页用户列表
    core_platforms_search_stores: 'core_platforms/search/stores', // 获取搜索品牌馆
    column_handpick_optimization: 'column/handpick_optimization', // 乐喜优选
    column_handpick_optimization_count: 'column/handpick_optimization/count', // 乐喜优选
    core_platforms_search_products: 'core_platforms/search/products', // 搜索商品的结果
    core_platforms_search_week_hot: 'core_platforms/search/week_hot', // 热门搜索
    core_platforms_search_hot_recommend: 'core_platforms/search/hot_recommend', // 热门推荐
    shop_windows_comments: 'shop_windows/comments', // 橱窗的评论
    shop_windows_child_comments: 'shop_windows/child_comments', // 获取子评论
    shop_windows_comments_praises: 'shop_windows/comments/praises', // 对子评论点赞 // 以及删除
    shop_windows_handpick: 'shop_windows/handpick', // 发现生活美学

    // 核心 store
    users_user_dynamic: "users/user_dynamic", // 获取自己的动态
    column_feature_store: 'column/feature_store', // 特色品牌管h
    column_feature_store_all: 'column/feature_store_all', // 特色品牌管h
    column_handpick_store: 'column/handpick_store', // 特色品牌馆精选
    column_browse_records: 'column/browse_records', // 浏览过乐喜优选，优质新品……人数以及头像
    users_other_followed_stores: 'users/other_followed_stores', // 获取用户关注地店铺列表

    // people 核心
    users_other_followed_users: "users/other_followed_users", //获取别人的关注
    other_userlike: 'other_userlike', //其他人喜欢的商品
    other_wishlist: 'other_wishlist', // 其他人心愿单
    users_other_followed_life_stores: 'users/other_followed_stores', //别人收藏的设计管
    users_other_user_dynamic: "users/other_user_dynamic", // 其他人的动态
    users_other_user_center: 'users/get_other_user_center', // 获取别人个人中心
    users_other_user_fans: 'users/other_user_fans', // 获取别人的粉丝
    other_user_browses: 'other_user_browses', // 别人的浏览记录

    // Cart
    cart: 'cart', // GET 加入购物车---
    cart_addon: 'cart', // POST 添加产品至购物车
    cart_remove: 'cart/:rid/remove', // DELETE 移除产品
    cart_clear: 'cart/clear', // DELETE 清空购物车
    cart_item_count: 'cart/item_count', // GET 购物车产品数---
    clearCart: 'cart/remove', // 移除购物车

    // Order
    orders: 'orders', // GET 订单列表---
    order_detail: 'orders/:rid', // GET 订单详情
    order_quick_buy: 'orders/quick_buy', // POST 立即购买
    order_by_cart: 'orders/cart_buy', // POST 购物车下单
    order_create: 'orders/create', // POST 新增订单---
    order_delete: 'orders/:rid/delete', // DELETE 删除订单
    order_cancel: 'orders/cancel', // POST 取消订单
    order_signed: 'orders/signed', // POST 订单签收
    order_paid_status: 'orders/up_paid_status', // POST 更新订单支付状态
    order_prepay_sign: 'orders/wx_prepay_sign', // POST 获取prepay_id和支付签名验证paySign
    critique_product: 'orders/product/comment/create', //post 评论商品---
    orders_delete: 'orders/delete', // 删除订单---
    core_orders_rid: 'core_orders/:rid', // 订单详情h
    logistics_information: 'logistics/information', // 查询物流
    logistics_same_template_express: 'logistics/same_template_express', // 查询物流
    orders_after_payment_rid: 'orders/after_payment/:rid', // 订单详情
    // Market
    is_first_order: "market/coupons/new_user_discount", // 查看是否属于首单
    user_login_coupon: 'market/user_master_coupons', //用户登陆时候的优惠券
    coupons: 'market/coupons', // get 优惠券列表---
    checkout_authority_couponList: 'market/user_official_fill', // get 优惠券列表---
    noCouponsList: 'market/not_login_coupons', // get 优惠券列表---
    coupon_detail: 'market/coupons/:rid', // GET 单个优惠券
    user_coupons: 'market/user_coupons', // POST 用户优惠券列表---
    available_coupons: 'market/coupons/available', // POST 用户可用优惠券
    coupon_grant: 'market/coupons/grant', // POST 领取优惠券---
    red_bag: 'market/bonus', //GET红包列表---
    authority_coupon: 'market/user_official', //官方的优惠券
    market_official_coupons_grant: 'market/official_coupons/grant', // 领取官方优惠券
    market_official_coupons_recommend: 'market/official_coupons/recommend', // 官方优惠券
    market_coupon_center_shared: 'market/coupon_center_shared', // 精选品牌馆优惠券
    market_coupon_center_single: 'market/coupon_center_single', // 精选商品优惠券
    order_info_page_coupon: 'market/user_order_coupons', //订单页面优惠券
    full_reduction: 'market/user_order_full_reduction', //满减
    first_order_reduction: 'market/coupons/new_user_discount', //满减
    noLoginFullSubtraction: 'market/coupons', //没有登陆下的满减
    market_bonus_grant: 'market/bonus/grant', // 分享领红包
    market_bonus_lines: 'market/bonus_lines', // 分享领取红包的人
    market_official_coupons: 'market/official_coupons', // 领券中心
    market_core_user_coupons: 'market/core_user_coupons', // 核心小程序的获取优惠券
    market_coupon_lines: 'market/coupon_lines', // 领券中心的头部领券信息
    market_user_expired: 'market/user_expired', // 过期的优惠券
    market_read_time: 'market/read_time', // 处理优惠券小红点是否显示

    // Search  
    search: 'search/products', // POST 搜索商品
    search_history: 'search/history', // GET 搜索历史关键词

    // City
    cities: 'address/cities', // GET 城市列表
    city: 'address/cities', // GET 城市信息

    // Address
    addresses: 'address', // GET 地址列表---
    address_addto: 'address', // POST 添加收货地址---
    address_info: 'address/:rid', // GET 地址详情
    address_update: 'address/:rid', // get 获取用户设置的收获地址---
    address_delete: 'address/:rid', // DELETE 删除收货地址---
    address_default: 'address/is_default', // GET 获取默认地址
    address_set_default: 'address/:rid/set_default', // PUT 快捷更新默认收货地址
    place_provinces: 'places/provinces', // GET 获取所有省级列表---
    place_cities: 'places/:pid/cities', // GET 获取所有市级列表---
    place_towns: 'places/:pid/towns', // GET 获取所有区镇级列表---
    place_areas: 'places/:pid/areas', // GET 获取所有村或区域级列表
    all_places: 'places', // 获取所有的地址---
    provinces_cities: 'places/provinces_cities', // GET 省/市/区 列表
    get_country: 'auth/area_code', // 获取所有的国家---
    address_user_custom: 'address/custom', // 获取海关身份证信息

    // Pay
    pay_wechat: 'pay/wechat', // POST 微信支付

    // Slides
    slide_list: 'common/slides', // GET 幻灯片列表

    // 关于我们
    wxapp_info: 'store/wxapp', // GET

    // Test
    demo: 'demo',

    // post关注---
    add_watch: 'follow/store', // 添加
    delete_watch: 'unfollow/store', // 取消关注
    examine_watch: 'follow/get_status', // 查看是否关注
    add_browse: 'store/visitor', //添加访问者---
    userlike: 'userlike', //添加喜欢---
    usetIsLike: 'products_userlike', // 查看用户是否喜欢

    // 查询运费模板详情
    logisitcs: 'logistics/freight_template/:rid',
    logistics_product_express: 'logistics/product/express', //post获取每件商品的物流公司列表
    cheapLogisitcs: 'logistics/freight/available', // post合适的运费模板---
    calculate_logisitcs: 'logistics/freight/calculate', // post计算运费---

    //店铺的主人的
    store_owner_info: 'users/authenticate',
    masterInfo: 'store/master_info',
    users_user_center: 'users/user_center', // 获取用户的收藏 喜欢 设计管

    // user
    users_profile: 'users/profile', //get 获取用户的信息---
    user_browses: 'user_browses', // post添加浏览记录/get获取浏览记录---
    product_userlike: 'product/userlike', // 获取添加喜欢商品的用户
    users_fans_counts: 'users/user_fans', // 获取用户的粉丝
    users_followed_users: 'users/followed_users', // 获取关注
    follow_user: 'follow/user', // 添加关注 
    unfollow_user: 'unfollow/user', // 取消关注
    users_followed_stores: 'users/followed_stores', // 获取关注店铺的列表
    shop_windows: 'shop_windows', // 发布橱窗
    shop_windows_detail: 'shop_windows/detail', // 橱窗详情
    shop_windows_similar: 'shop_windows/similar', // 相似的橱窗
    shop_windows_follow: 'shop_windows/follow', // 关注人的橱窗
    shop_windows_keywords: 'shop_windows/keywords', // 增加橱窗标签
    shop_windows_user_likes: 'shop_windows/user_likes', // 获取user橱窗
    shop_windows_recommend: 'shop_windows/recommend', // 获取推荐的橱窗
    shop_windows_hot_keywords: 'shop_windows/hot_keywords',// 获取热门推荐标签
    shop_windows_search_keywords: 'shop_windows/search/keywords', // 搜索标签
    shop_windows_keyword: 'shop_windows/keyword', // 根据标签搜索橱窗

    // POST 获取验证码
    auth_sms_code: 'users/wx_bind_mobile_verify_code',

    // Question

    // GET 人数统计
    question_stats: 'guess_image/people_count',
    // GET 用户获取题目
    question: 'guess_image/question',
    // POST 判断答案是否正确
    question_check_answer: 'guess_image/answers',
    // POST 试题结算
    question_settlement: 'guess_image/test_settlement',
    // GET 可提现金额
    question_withdraw: 'guess_image/cash_price',
    // GET 优惠券数量
    question_coupons: 'guess_image/coupon_count',
    // GET 答案列表
    question_answer_list: 'guess_image/answer_list',
    // GET 获取用户所有奖励
    question_all_rewards: 'guess_image/all_rewards',
    // GET 排行榜
    question_ranking: 'guess_image/world_ranking',
    // GET 好友榜
    question_friend_ranking: 'guess_image/friend_ranking',
    // GET 邀请好友信息
    question_invite_info: 'guess_image/invite_friend',
    // POST 添加游戏好友
    question_add_friend: 'guess_image/add_friend',
    // GET 我的好友列表
    question_friend_list: 'guess_image/friend_list',
    // GET 可能认识的人列表
    question_guess_friend: 'guess_image/may_friend_list',
    // POST 偷红包
    question_steal_bonus: 'guess_image/steal_bouns',
    // GET 偷我钱包的人
    question_steal_list: 'guess_image/steal_my_money',
    // GET 偷我红包记录
    question_steal_record: 'guess_image/steal_bouns_record',
    // GET 一小时内玩的次数
    question_play_count: 'guess_image/play_count',
    // POST 获取猜图海报
    question_wxa_poster: 'guess_image/wxa_poster',
    // POST 现金提现
    question_withdraw_cash: 'guess_image/cash_money',
    // GET 奖励消息
    question_reward_message: 'guess_image/reward_message',
    // GET 新好友加入提醒
    question_friend_notice: 'guess_image/new_friend_info',
    // POST 更新分享记录
    question_share: 'guess_image/is_share',
    // POST 游戏首页海报
    question_index_poster: 'guess_image/wx_index_poster',
    // GET 是否需要邀请
    question_need_invite: 'guess_image/invite_friend_record',

    // GET 当前环境
    run_env: 'run_env/wxa',

    // 11.11  11.12活动
    market_master_activity_double: 'market/master_activity/double',  // 获取店铺
    market_master_activity_return: 'market/master_activity/return',  // 获取店铺返厂

    market_coupons_activity_double: 'market/coupons_activity/double', // 领券中心11
    market_coupons_activity_return: 'market/coupons_activity/return', // 领券中心12

    market_coupons_activity_grant: 'market/coupons_activity/grant' // 领取11.11优惠券

}