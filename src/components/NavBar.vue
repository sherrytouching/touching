<script setup lang="ts">
import { ref } from 'vue';

const navList = ref([
    {
        title: '關於踏取',
        link: '#feature',
    },
    {
        title: '課程講座',
        link: '#tutorials',
    },
    {
        title: '服務一覽',
        link: '#service',
    },
    {
        title: '聯絡我們',
        link: '#contact',
    },
])
</script>
<template>
    <div class="absolute top-0 z-50 w-full py-10">
        <div class="max-w-screen-2xl mx-auto flex items-center justify-end gap-10 text-white drop-shadow tracking-widest">
            <a v-for="i in navList" :href="i.link" class="cursor-pointer text-lg font-bold hover:font-bold">{{ i.title }}</a>
        </div>
    </div>
</template>