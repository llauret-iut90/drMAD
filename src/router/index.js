import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopLoginView from "@/views/ShopLoginView.vue";
import BankAccountView from "@/views/BankAccountView.vue";
import ShopOrders from "@/views/ShopOrders.vue";
import ShopBuy from "@/views/ShopBuy.vue";
import ShopPay from "@/views/ShopPay.vue";
import ShopView from "@/views/ShopView.vue";
// import BankAmount from "@/views/BankAmount.vue";
import BankHistory from "@/views/BankHistory.vue";
import BankOperation from "@/views/BankOperation.vue";
import BankView from "@/views/BankView.vue";
import BankAmount from "@/views/BankAmount.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        // redirect: '/shop'
    },
    {
        path: '/shop',
        component: ShopView,
        children: [
            {
                path: 'buy',
                name: 'shopbuy',
                component: ShopBuy
            },
            {
                path: 'pay',
                name: 'shoppay',
                component: ShopPay,
                props: true
            },
            {
                path: 'login',
                name: 'shoplogin',
                component: ShopLoginView
            },
            {
                path: 'orders',
                name: 'shoporders',
                component: ShopOrders
            }
        ]
    },
    {
        path: '/bank',
        name: 'bank',
        component: BankView,
        children: [
            {
                path: 'account',
                name: 'bankaccount',
                component: BankAccountView
            },
            {
                path: 'amount',
                name: 'bankamount',
                component: BankAmount
            },
            {
                path: 'history',
                name: 'bankhistory',
                component: BankHistory
            },
            {
                path: 'operation',
                name: 'bankoperation',
                component: BankOperation
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router