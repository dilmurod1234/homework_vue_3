<template>
    <header class="site__header">
        <div class="container">
            <NavbarApp :router="router"/>
        </div>
    </header>
    <main class="site__main">
        <section class="login__section">
            <div class="container">
                <div class="login__inner">
                    <h2 class="login__title">Login in</h2>
                    <p class="login__text">Login into existing account.</p>
                    <form class="form__group">
                        <input type="text" class="form__field" placeholder="Username" required />
                        <input type="email" class="form__field" placeholder="Email Address" required />
                        <router-link to="/login">
                            <button class="form__btn">Sign up</button>
                        </router-link>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
import NavbarApp from '../navbar/NavbarApp.vue';
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

.site__main {
    padding-top: 40px;
}

.login__section {
    padding: 40px 0;
}

.login__inner {
    text-align: center;
    font-weight: 600;
    font-size: 75px;
    line-height: 112px;
    color: #FFFFFF;
}

.login__title {
    font-weight: 600;
    font-size: 75px;
    line-height: 112px;
    color: #FFFFFF;
}

.login__text {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
}

.form__group {
    padding: 40px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 80px;
}

.form__field {
    width: 400px;
    height: 80px;
    border: 0;
    border-bottom: 2px solid gray;
    outline: 0;
    font-size: 1.3rem;
    color: white;
    background: transparent;
}

.form__btn {
    width: 400px;
    padding: 10px 15px;
    font-weight: 400;
    font-size: 26px;
    line-height: 39px;
    background-color: #306EF7;
    color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #306EF7;
}
</style>