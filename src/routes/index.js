import { createRouter,createWebHistory } from "vue-router";
import Main from "../pages/main.vue";
import Dump from "../pages/dump.vue";
import Login from "../pages/login.vue";
// import Items from "../pages/items.vue";
import Pants from "../pages/pants.vue";
import Mens from "../pages/mens.vue";
import Womens from "../pages/womens.vue";
import Beauty from "../pages/beauty.vue";
import Bag from "../pages/bag.vue";
import Wishlist from "../pages/wishlist.vue";


const routes=[
    {path:"/",component:Main},
    {path:"/dump",component:Dump},
    {path:"/login",component:Login},
    // {path:"/items", component:Items},
    // {path:"/pants", component:Pants},
    {path:"/mens", component:Mens},
    {path:"/womens",component:Womens},
    {path:"/beauty",component:Beauty},
    {path:"/bag", component:Bag},
    {path:"/wishlist", component:Wishlist}
]
const router = createRouter(
    {
        history:createWebHistory(),
        routes

    }
)
export default router;