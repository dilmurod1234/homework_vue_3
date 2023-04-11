<template>
    <header class="site__header">
        <div class="container">
            <div class="header__inner">
                <img :src=SiteLogo alt="Site logo" width="196" height="56">
                <ul class="header__list">
                    <li v-for="item in router">
                        <router-link  class="header__link" :to="item.path">{{ item.name }}</router-link>
                    </li>
                </ul>
                <div class="header__links">
                    <router-link class="header__login" to="/login">Login</router-link>
                    <router-link to="/login">
                        <button class="header__btn">Sign up</button>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>

import SiteLogo from "../../assets/Images/site-logo.svg"
const props = defineProps({
    router: {
        type: Array
    }
})

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.header__inner {
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__list {
    display: flex;
    gap: 30px;
}

.header__link {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
}

.header__link:hover{
    color: #306EF7;
}

.header__links {
    display: flex;
    align-items: center;
    gap: 24px;
}

.header__login {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #707070;
}

.header__login:hover{
    color: #306EF7;
}

.header__btn {
    padding: 15px 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    background-color: #306EF7;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #306EF7;
}
</style>