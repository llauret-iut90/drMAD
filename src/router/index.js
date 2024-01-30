// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import ShopView from '@/views/ShopView.vue'
// import ShopHome from '@/views/ShopHome.vue'
// import ShopBuy from '@/views/ShopBuy.vue'
// import ShopPay from '@/views/ShopPay.vue'
// import ShopLogin from "@/views/ShopLoginView.vue"
// import ShopOrders from "@/views/ShopOrders.vue"
//
// Vue.use(VueRouter)
//
// const routes = [
//     {
//         path: '/',
//         name: 'home',
//         redirect: '/shop'
//     },
//     {
//         path: '/shop',
//         component: ShopView,
//         children: [
//             {
//                 path: '',
//                 name: 'shop',
//                 component: ShopHome,
//                 alias: '/shop/home'
//             },
//             {
//                 path: 'buy',
//                 name: 'shopbuy',
//                 component: ShopBuy
//             },
//             {
//                 path: 'pay/:idcmd',
//                 name: 'shoppay',
//                 component: ShopPay,
//                 props: true
//             },
//             {
//                 path: 'login',
//                 name: 'shoplogin',
//                 component: ShopLogin
//             },
//             {
//                 path: 'orders',
//                 name: 'shoporders',
//                 component: ShopOrders
//             }
//         ]
//     }
// ]
//
// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })
//
// export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
// import VirusesView from '@/views/VirusesView.vue'
import ShopLoginView from "@/views/ShopLoginView.vue";
import BankAccountView from "@/views/BankAccountView.vue";
import ShopOrders from "@/views/ShopOrders.vue";
import ShopBuy from "@/views/ShopBuy.vue";
import ShopHome from "@/views/ShopHome.vue";
import ShopPay from "@/views/ShopPay.vue";
// import ItemsList from "@/components/ItemsList.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: ShopHome
    },
    {
        path: '/shop/buy',
        name: 'shopbuy',
        component: ShopBuy
    },
    {
        path: '/shop/pay/',
        name: 'shoppay',
        component: ShopPay,
    },
    {
        path: '/shop/login',
        name: 'shoplogin',
        component: ShopLoginView
    },
    {
        path: '/shop/orders',
        name: 'shoporders',
        component: ShopOrders
    },
    {
        path: '/bank/account',
        name: 'bankaccount',
        component: BankAccountView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router