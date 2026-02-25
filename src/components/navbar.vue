<template>
    <div class="navbar">
        <div class="nav-left">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/Myntra-Logo.png" alt=""></router-link>
            </div>
            <ul :class="{ mobile: mobileMenuOpen }">
                <div class="menu-wrapper" @mouseenter="hoveredMenu = 'men'" @mouseleave="hoveredMenu = null" :class="{ show: hoveredMenu === 'men' }" @click="mobileMenuOpen = false">
                    <router-link to="/mens" style="text-decoration: none;">
                        <li class="men-item">MEN</li>
                    </router-link>
                    <!-- DROPDOWN -->
                    <div class="men-container">
                        <router-link to="/mens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>T-Shirts</p>
                        </router-link>
                        <router-link to="/mens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Shirts</p>
                        </router-link>
                        <router-link to="/mens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Jeans</p>
                        </router-link>
                        <router-link to="/mens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Shoes</p>
                        </router-link>
                    </div>
                </div>

                <div class="menu-wrapper" @mouseenter="hoveredMenu = 'women'" @mouseleave="hoveredMenu = null" :class="{ show: hoveredMenu === 'women' }" @click="mobileMenuOpen = false">
                    <router-link to="/womens" style="text-decoration: none;">
                        <li class="men-item">WOMEN</li>
                    </router-link>
                    <!-- DROPDOWN -->
                    <div class="women-container">
                        <router-link to="/womens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Dresses</p>
                        </router-link>
                        <router-link to="/womens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Tops</p>
                        </router-link>
                        <router-link to="/womens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Jeans</p>
                        </router-link>
                        <router-link to="/womens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Shoes</p>
                        </router-link>
                    </div>
                </div>

                <div class="menu-wrapper" @mouseenter="hoveredMenu = 'kids'" @mouseleave="hoveredMenu = null" :class="{ show: hoveredMenu === 'kids' }" @click="mobileMenuOpen = false">
                    <router-link to="/mens" style="text-decoration: none;">
                        <li class="men-item">KIDS</li>
                    </router-link>
                    <!-- DROPDOWN -->
                    <div class="kids-container">
                        <router-link to="/mens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Boys Clothing</p>
                        </router-link>
                        <router-link to="/womens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Girls Clothing</p>
                        </router-link>
                        <router-link to="/mens" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Shoes</p>
                        </router-link>
                        <router-link to="/beauty" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Accessories</p>
                        </router-link>
                    </div>
                </div>

                <div class="menu-wrapper" @mouseenter="hoveredMenu = 'home'" @mouseleave="hoveredMenu = null" :class="{ show: hoveredMenu === 'home' }" @click="mobileMenuOpen = false">
                    <router-link to="/beauty" style="text-decoration: none;">
                        <li class="men-item">LIGHTING</li>
                    </router-link>
                    <!-- DROPDOWN -->
                    <div class="home-container">
                        <router-link to="/home-bedding" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Bedding</p>
                        </router-link>
                        <router-link to="/home-decor" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Decor</p>
                        </router-link>
                        <router-link to="/home-kitchenware" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Kitchenware</p>
                        </router-link>
                        <router-link to="/home-lighting" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Lighting</p>
                        </router-link>
                    </div>
                </div>

                <div class="menu-wrapper" @mouseenter="hoveredMenu = 'beauty'" @mouseleave="hoveredMenu = null" :class="{ show: hoveredMenu === 'beauty' }" @click="mobileMenuOpen = false">
                    <router-link to="/beauty" style="text-decoration: none;">
                        <li class="men-item">BEAUTY</li>
                    </router-link>
                    <!-- DROPDOWN -->
                    <div class="beauty-container">
                        <router-link to="/beauty" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Skincare</p>
                        </router-link>
                        <router-link to="/beauty" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Makeup</p>
                        </router-link>
                        <router-link to="/beauty" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Haircare</p>
                        </router-link>
                        <router-link to="/beauty" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Fragrances</p>
                        </router-link>
                    </div>
                </div>

                <div class="menu-wrapper" @mouseenter="hoveredMenu = 'genz'" @mouseleave="hoveredMenu = null" :class="{ show: hoveredMenu === 'genz' }" @click="mobileMenuOpen = false">
                    <router-link to="/womens" style="text-decoration: none;">
                        <li class="men-item">GENZ</li>
                    </router-link>
                    <!-- DROPDOWN -->
                    <div class="genz-container">
                        <router-link to="/genz-trending" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Trending</p>
                        </router-link>
                        <router-link to="/genz-fashion" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Fashion</p>
                        </router-link>
                        <router-link to="/genz-accessories" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Accessories</p>
                        </router-link>
                        <router-link to="/genz-lifestyle" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Lifestyle</p>
                        </router-link>
                    </div>
                </div>

                <div class="menu-wrapper" @mouseenter="hoveredMenu = 'studio'" @mouseleave="hoveredMenu = null" :class="{ show: hoveredMenu === 'studio' }" @click="mobileMenuOpen = false">
                    <li class="studio-item">STUDIO</li>
                    <!-- DROPDOWN -->
                    <div class="studio-container">
                        <router-link to="/studio-collections" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Collections</p>
                        </router-link>
                        <router-link to="/studio-brands" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Brands</p>
                        </router-link>
                        <router-link to="/studio-curated" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>Curated</p>
                        </router-link>
                        <router-link to="/studio-launches" @click="hoveredMenu = null; mobileMenuOpen = false">
                            <p>New Launches</p>
                        </router-link>
                    </div>
                </div>
            </ul>
        </div>
        <div class="nav-right">
            <div class="input-sec">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" v-model="query" @keydown.enter="onSearch"
                    placeholder="search for products, brands and more">
            </div>
            <ul>
                <div class="menu-wrapper" :class="{ show: profileOpen }">
                    <li class="profile-item" @click="profileOpen = !profileOpen"><i class="fa-regular fa-user"></i>Profile</li>
                    <!-- DROPDOWN -->
                    <div class="profile-container" @click="profileOpen = false">
                        <h3>Welecome</h3>
                        <p>To acess account and manage access</p>
                        <router-link to="/login" @click="profileOpen = false"><button>Login / Signup</button></router-link>
                        <hr>
                        <p>Orders</p>
                        <p>Wishlist</p>
                        <p>Gift Cards</p>
                        <p>Contact Us</p>
                        <p>Myntra Insider</p>
                        <hr>
                        <p>Myntra Credit</p>
                        <p>Coupons</p>
                        <p>Saved Cards</p>
                        <p>Saved Vpa</p>
                        <p>Saved Addresses</p>

                    </div>
                </div>
                <router-link to="/wishlist" style="text-decoration: none;">
                    <li>
                        <i class="fa-regular fa-heart"></i>
                        <span>Wishlist</span>
                        <span v-if="store.wishlist.length > 0" class="badge">{{ store.wishlist.length }}</span>
                    </li>
                </router-link>
                <router-link to="/bag" style="text-decoration: none;">
                    <li>
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>Bag</span>
                        <span v-if="store.getBagCount() > 0" class="badge">{{ store.getBagCount() }}</span>
                    </li>
                </router-link>
                <!-- moved hamburger next to Bag for mobile placement -->
                <button class="hamburger" @click="mobileMenuOpen = !mobileMenuOpen" :class="{ active: mobileMenuOpen }">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </ul>
        </div>
    </div>

</template>
<style>
.menu-wrapper {
    position: relative;
}

.men-item {
    list-style: none;
    padding: 35px 0;
    font-weight: bold;
    cursor: pointer;
}

.profile-item {
    list-style: none;
    padding: 0;
    font-weight: bold;
    cursor: pointer;
}

/* Dropdown */
.men-container,
.women-container,
.kids-container,
.home-container,
.beauty-container,
.genz-container,
.studio-container {
    position: absolute;
    top: 80px;
    left: 0;
    width: 220px;
    background: white;
    padding: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-radius: 6px;

    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: 0.3s ease;
}

.profile-container {
    position: absolute;
    top: 50px;
    right: 0;
    width: 350px;
    background: white;
    padding: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-radius: 6px;

    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: 0.3s ease;
}

/* Show logic based on Vue state */
.menu-wrapper.show .men-container,
.menu-wrapper.show .women-container,
.menu-wrapper.show .kids-container,
.menu-wrapper.show .home-container,
.menu-wrapper.show .beauty-container,
.menu-wrapper.show .genz-container,
.menu-wrapper.show .studio-container,
.menu-wrapper.show .profile-container {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.men-container p,
.women-container p,
.kids-container p,
.home-container p,
.beauty-container p,
.genz-container p,
.studio-container p {
    margin: 10px 0;
    cursor: pointer;
    color: #A1A2A5;
}

.men-container p:hover,
.women-container p:hover,
.kids-container p:hover,
.home-container p:hover,
.beauty-container p:hover,
.genz-container p:hover,
.studio-container p:hover {
    color: #282C3F;
}

.profile-container p {
    margin: 8px 0;
    cursor: pointer;
    font-size: 14px;
}

.profile-container p:hover {
    color: red;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 50px;
    background-color: #ffffff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

}

.nav-left {
    display: flex;
    align-items: center;
    gap: 30px;
}

.logo img {
    width: 50px;
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 30px;
}

ul {
    display: flex;
    gap: 30px;
}

li {
    color: #282C3F;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    font-weight: bold;
    border: 3px solid white;
    font-size: 14px;
}

i {
    color: #6C6F7B;
}

.nav-left li {
    padding: 25px 0px 25px 0px;
}

.nav-left li:hover {
    cursor: pointer;
    border-bottom: 3px solid red;
}

.input-sec {
    background-color: #F5F5F6;
    background: 1px solid rgb(235, 230, 230);
    padding: 5px 10px;
    border-radius: 5px;
    color: grey;
}

input[type="text"] {
    padding: 10px 10px;
    border: none;
    outline: none;
    width: 300px;
    background-color: #F5F5F6;

}

input:focus {
    background-color: white;
}

.input-sec:focus-within {
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgb(235, 230, 230);
}

button {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid black;
    margin-bottom: 10px;
    color: #FF3F6C;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

/* button:hover {
    border: 1px solid red;
} */

a {
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
}

.badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #FF3F6C;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
}

.nav-right li {
    position: relative;
}

/* Hamburger Menu */
.hamburger {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    gap: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background-color: #282C3F;
    border-radius: 3px;
    transition: 0.3s ease;
    display: block;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(10px, 10px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

.nav-left ul.mobile {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: white;
    gap: 0;
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    z-index: 999;
}

.nav-left ul.mobile .menu-wrapper {
    width: 100%;
    padding: 0;
}

.nav-left ul.mobile .menu-wrapper > li,
.nav-left ul.mobile .menu-wrapper router-link > li {
    padding: 20px 30px;
    border: none;
}

.nav-left ul.mobile .menu-wrapper > li:hover {
    border: none;
    background-color: #F5F5F6;
}

.nav-left ul.mobile .men-container,
.nav-left ul.mobile .women-container,
.nav-left ul.mobile .kids-container,
.nav-left ul.mobile .home-container,
.nav-left ul.mobile .beauty-container,
.nav-left ul.mobile .genz-container,
.nav-left ul.mobile .studio-container {
    position: static;
    opacity: 0;
    visibility: hidden;
    display: none;
    width: 100%;
    box-shadow: none;
    border-radius: 0;
    transform: none;
    transition: none;
}

.nav-left ul.mobile .menu-wrapper.show .men-container,
.nav-left ul.mobile .menu-wrapper.show .women-container,
.nav-left ul.mobile .menu-wrapper.show .kids-container,
.nav-left ul.mobile .menu-wrapper.show .home-container,
.nav-left ul.mobile .menu-wrapper.show .beauty-container,
.nav-left ul.mobile .menu-wrapper.show .genz-container,
.nav-left ul.mobile .menu-wrapper.show .studio-container {
    display: block;
    opacity: 1;
    visibility: visible;
    background-color: #F5F5F6;
    padding-left: 30px;
}

@media (max-width:1290px) {
    .nav-left ul{
        display: none;
    }
}

@media (max-width:890px) {
    .hamburger {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-left ul {
        display: none;
    }

    .nav-left ul.mobile {
        display: flex;
    }

    .nav-right .input-sec{
        display: none;
    }
    /* Center profile container on small screens */
    .profile-container {
        position: fixed;
        top: 80px;
        left: 50%;
        right: auto;
        transform: translateX(-50%) translateY(10px);
        width: calc(100% - 40px);
        max-width: 420px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        z-index: 1100;
    }
    .menu-wrapper.show .profile-container {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
        visibility: visible;
    }
}
@media (max-width:500px) {
    .navbar{
        padding: 10px;
    }
    .nav-right ul{
        gap: 10px;
    }
    .nav-right ul li{
        font-size:small;
    }
  
}


</style>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store.js'

const router = useRouter()
const query = ref('')
const hoveredMenu = ref(null)
const mobileMenuOpen = ref(false)
const profileOpen = ref(false)

function onSearch() {
    const q = query.value && query.value.trim().toLowerCase()
    if (!q) return

    // Map common keywords to routes
    if (q.includes('pant')) {
        router.push('/mens')
        return
    }
    if (q.includes('shirt') || q.includes('t-shirt') || q.includes('tshirt')) {
        router.push('/mens')
        return
    }
    if (q.includes('bag') || q.includes('women')|| q.includes('skirt')) {
        // No dedicated bags page present — reuse items page
        router.push('/womens')
        return
    }

    // Fallback: navigate to items and pass the query as a URL param
    router.push({ path: '/mens', query: { q: query.value } })
}
</script>
