import Vue from 'vue'
import LoadingPage from './LoadingPage'
import Tabbar from './Tabbar.vue'
import TopNavbar from './Top.vue'
import BottomBar from './BottomBar.vue'

function allComponent(){
    Vue.component('Tabbar',Tabbar)
    Vue.component('LoadingPage',LoadingPage)
    Vue.component('TopNavbar',TopNavbar)
    Vue.component('BottomBar',BottomBar)
}

export default allComponent
