<script setup lang="ts">
import icon from '@/assets/home/sketch.png'
import Card from './Card.vue';
import { ref } from 'vue';
const cardList = [
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
]

const formData = ref({
    name: '',
    email: '',
    mobile: '',
    content: '',
})
</script>
<template>
    <div class="w-full tutorials" id="tutorials">
        
        <div class="relative z-10 max-w-screen-xl mx-auto flex flex-row items-center py-20 justify-between">
           
            <div class=" flex w-full flex-col items-start gap-4 mb-10">
                <h2 class="text-4xl text-[#444] font-bold">聯絡我們</h2>
                <p class="w-1/2 ">如有任何疑問請留下您的</p>
            </div>

                <Card  class="w-full">
                    <form class="flex w-full flex-col gap-4">
                        <div class="flex flex-col">
                            <label name="name">姓名</label>
                            <input name="name" v-model="formData.name"/>
                        </div>
                        <div class="flex flex-col">
                            <label name="name">Email</label>
                            <input name="name" v-model="formData.email"/>
                        </div>
                        <div class="flex flex-col">
                            <label name="name">聯絡電話</label>
                            <input name="name" v-model="formData.mobile"/>
                        </div>
                    </form>
                </Card>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.tutorials {
    @apply relative overflow-hidden;
    &::after {
        content:'';
        @apply absolute right-0 top-0 w-2/3 z-0 bg-[#ccc] ;
        animation: longer 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
        animation-fill-mode: none;
    }
}

label {
    @apply font-bold w-40 block mb-1;
}

input {
    @apply bg-[#e7e7e7] py-2 rounded-md px-2;
}

@keyframes longer {
    0% {
       @apply h-0;
    }
   100% {
       @apply h-full;
    }
}
</style>