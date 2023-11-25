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

const contactList = [
    {
        icon: '',
        title: '聯絡電話',
        value: '(02) 6634-5178',
    },
    {
        icon: '',
        title: 'Email',
        value: 'teeechoice@gmail.com',
    },
    {
        icon: '',
        title: '地址',
        value: '104台北市中山區南京東路二段216號8樓',
    },
    {
        icon: '',
        title: '統一編號',
        value: '91083394',
    },
]
</script>
<template>
    <div class="bg-main w-full pt-10 relative">
        <span class="absolute right-0 bottom-6 font-bold text-8xl text-white opacity-[0.05]">TOUCHING DEVELOPMENT</span>
        <div class="max-w-screen-xl pb-10 mx-auto flex flex-row items-start gap-10 justify-between text-white drop-shadow tracking-widest">
            <div class="flex flex-col items-center gap-2">
                <a v-for="i in navList" :href="i.link" class=" text-sm px-2 cursor-pointer hover:font-bold">{{ i.title }}</a>
            </div>
            <div class="flex flex-col gap-2 text-sm items-start">
                <div v-for="i in contactList" class="flex items-center w-full justify-between">
                    <span class="w-28">{{ i.title }}：</span>
                    <span>{{ i.value }}</span>
                </div>
            </div>
        </div>
        <div class="bg-[#444] text-xs text-[#ffffff60] p-2 text-center">
            Copyright © {{ new Date().getFullYear() }} 踏取國際開發有限公司 Touching Development Ltd. All rights reserved.
        </div>
    </div>
</template>