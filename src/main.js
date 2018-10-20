/* 入口文件 */

import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.min.css'
import Mint from 'mint-ui'
Vue.use(Mint)
import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
    el:'#app',
    render:h => h(App),
    router
})
