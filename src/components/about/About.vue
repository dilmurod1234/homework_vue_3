<template>
    <div class="container">
        <NavbarApp :router="router"/>
        <h2 class="text">About</h2>
    </div>
</template>
<script setup>
import NavbarApp from '../navbar/NavbarApp.vue';
import { ref } from 'vue';

const router = ref([
    {name: "About", path: "/about"},
    {name: "Pricing", path: "/"},
    {name: "Blog", path: "/blog"}
])
</script>
<style scoped>
.container {
    max-width: 1300px;
}

.text {
    color: white;
    text-align: center;
}
</style>