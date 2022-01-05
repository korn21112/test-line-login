import { createRouter, createWebHistory } from 'vue-router';
import home from '../components/Home.vue';
import lineInfo from '../components/LineInfo.vue'
// import productdetails from '../components/ProductDetails.vue';
// import aboutus from '../components/Aboutus.vue';
// import login from '../components/Login.vue';
// import cart from '../components/Cart.vue'

// const routerHistory = createWebHistory()

//vue routes
const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'Home',
        component:home
    },
    {
        path: '/lineInfo',
        name: 'LineInfo',
        component:lineInfo
    }
    // {
    //     path: '/Productdetails',
    //     name: 'ProductDetails',
    //     component: productdetails
    // },
    // {
    //     path: '/cart',
    //     name: 'Cart',
    //     component: cart
    // },
    // {
    //     path: '/aboutus',
    //     name: 'aboutus',
    //     component: aboutus
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: login
    // }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router