<script setup lang="ts">
import icon from '@/assets/home/sketch.png'
import Card from './Card.vue';
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
</script>
<template>
    <div class="w-full h-[80vh] tutorials" id="tutorials">
        
        <div class="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
           
            <div class=" flex flex-col items-start gap-4 mb-10">
                <h2 class="text-4xl text-[#444] font-bold">課程教學</h2>
                <h2 class="absolute top-12 text-8xl text-main opacity-10 font-bold">TUTORIALS</h2>
                <span class="block w-12 rounded-sm bg-yellow h-2"></span>
                <p class="w-1/2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse?Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Perferendis, esse?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Perferendis, esse?</p>
            </div>

            <div class="grid grid-cols-4 w-full gap-4">
                <Card :title="i.title" :desc="i.description" class="w-full" v-for="i in cardList"/>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.tutorials {
    @apply relative overflow-hidden;
    // background-image: url('../assets/home/tutorials.jpg');
    // background-position: center;
    // background-size: cover;
    &::after {
        content:'';
        @apply absolute right-0 top-0 h-full w-2/3 z-0 bg-[#ccc] ;
        animation: longer 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
        animation-fill-mode: none;
    }
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