import Home from "../pages/Home";
import Cart from "../pages/Cart";
import CatAccessories from "../pages/CatAccessories";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProductPage from "../pages/ProductPage";

const publicRouters =[
    { path : '/', component: Home },
    { path : '/cart', component: Cart },
    { path : '/cataccessories', component: CatAccessories },
    { path : '/login', component: Login , layout: null},
    { path : '/signup', component: SignUp, layout: null },
    { path : '/productpage', component: ProductPage },
]

const privateRouters =[]

export {publicRouters, privateRouters}