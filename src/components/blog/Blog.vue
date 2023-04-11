<template>
    <header class="site__header">
        <div class="container">
            <NavbarApp :router="router" />
        </div>
    </header>
    <main class="site__main">
        <section class="blog__section">
            <div class="container">
                <div class="blog">
                    <h2 class="blog__title">Content Sources</h2>
                    <p class="blog__text">Fill all field for create an account.</p>
                    <div class="blog__inner">
                        <ul class="blog__list">
                            <li class="blog__item">
                                <img :src="TwitterLogo" alt="Blog icon" width="50" height="50">
                                <h3 class="blog__list__title">Twitter</h3>
                                <p class="blog__list__text">
                                    Connect your Twitter feed to
                                    your Marico homepage.
                                </p>
                            </li>
                            <li class="blog__item">
                                <img :src="YouTubeLogo" alt="Blog icon" width="50" height="50">
                                <h3 class="blog__list__title">YouTube</h3>
                                <p class="blog__list__text">
                                    Connect your YouTube feed to
                                    your Marico homepage.
                                </p>
                            </li>
                            <li class="blog__item">
                                <img :src="WordpressLogo" alt="Blog icon" width="50" height="50">
                                <h3 class="blog__list__title">WordPress</h3>
                                <p class="blog__list__text">
                                    Connect your WordPress feed to
                                    your Marico homepage.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>

import NavbarApp from '../navbar/NavbarApp.vue';
import TwitterLogo from "../../assets/Images/twitter-logo.svg"
import YouTubeLogo from "../../assets/Images/youtube-logo.svg"
import WordpressLogo from "../../assets/Images/wordpress-logo.svg"
import { ref } from 'vue';

const router = ref(
    [
        { name: "About", path: "/about" },
        { name: "Pricing", path: "/" },
        { name: "Blog", path: "/blog" },
    ]
)

</script>

<style scoped>
.container {
    max-width: 1300px;
}

.blog__title {
    text-align: center;
    font-weight: 600;
    font-size: 120px;
    line-height: 180px;
    color: #FFFFFF;
}

.blog__text {
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #FFFFFF;
}

.blog__list {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
}

.blog__item {
    width: 350px;
    padding: 20px 15px;
    border: 1px solid #707070;
    border-radius: 10px;
}

.blog__list__title {
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    color: #FFFFFF;
}

.blog__list__text {
    font-weight: 400;
    font-size: 23px;
    line-height: 34px;
    color: #828282;
}
</style>