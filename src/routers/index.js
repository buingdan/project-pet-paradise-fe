import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Product from "../pages/Product";
import Admin from "../pages/Admin";


const publicRouters =[
    { path : '/', component: Home },
    { path : '/cart', component: Cart },
    { path : '/login', component: Login , layout: null},
    { path : '/signup', component: SignUp, layout: null },
    { path : '/product', component: Product },
]

const privateRouters =[
    { path : '/admin', component: Admin, layout: null },
]

export {publicRouters, privateRouters}