import {createRouter, createWebHistory} from "vue-router";
import Home from "@/page/Home";
import Product from "@/page/Product";
import Contact from "@/page/Contact";
import Basket from "@/page/Basket";
import About from "@/page/About";
import Cgu from "@/page/Cgu";
import Cgv from "@/page/Cgv";

const router = createRouter({
    routes: [
        {path: '/home', name: 'home', component: Home},
        {path: '/product', name: 'product', component: Product},
        {path: '/contact',name: 'contact', component: Contact},
        {path: '/basket',name: 'basket', component: Basket},
        {path: '/about',name: 'about', component: About},
        {path: '/Cgu',name: 'cgu', component: Cgu},
        {path: '/Cgv',name: 'cgv', component: Cgv},
    ],
    history: createWebHistory(),
});

export default router;
