<script setup lang="ts">
import icon from '@/assets/home/sketch.png'
const featureList = [
    {
        title: '社區進駐都更顧問',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: '都市更新課程講座',
        description: `我們開設專業的都市更新課程，面向公眾傳授都市規劃與更新知識，提升社會大眾對城市發展的認識和參與度。`,
        icon: icon,
    },
    {
        title: '整合型都市更新服務',
        description: `專業團隊運用創新策略，致力於都市更新項目，改善城市環境，提升居住品質，創造可持續發展的未來。`,
        icon: icon,
    },
    {
        title: '危老建築重建專家',
        description: ` 針對危老建築提供專業重建服務，結合最新技術，確保結構安全，同時注入現代設計元素，賦予新生命。`,
        icon: icon,
    },
]
</script>
<template>
<div class="w-full h-[80vh] features relative" id="feature">
    <div class="max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
        <div class="flex flex-col items-center gap-4">
        <h2 class="text-4xl text-[#444] font-bold">關於踏取</h2>
        <h2 class="absolute top-12 text-8xl text-main opacity-10 font-bold">ABOUT</h2>
        <span class="block w-12 rounded-sm bg-yellow h-2"></span>
        <p class="w-1/2 tracking-wider leading-7">我們的目標在於成為民眾和建商之間的溝通橋樑，消弭大眾對於都市更新的疑慮，化繁為簡，將都市更新需留意的的眉眉角角，教授與有意都更的鄰里。協助鄰里建立都市更新委員會，教授</p>
    </div>

   <div class="flex flex-row mx-auto w-full items-center justify-between">
    <div class="circles" v-for="i in featureList">
        <img :src="icon" class="w-10"/>
        <h4 class="font-bold text-lg tracking-wide">{{ i.title }}</h4>
        <p class="w-2/3 opacity-80 tracking-wider text-left">{{ i.description }}</p>
    </div>
   </div>
    </div>
   
</div>
</template>
<style lang="scss" scoped>
.features {
    background-image: url('../assets/home/features.jpg');
    background-position: center;
    background-size: cover;
}

.circles {
    @apply border text-main text-center w-[300px] bg-[#ffffff30] backdrop-blur-md flex items-center flex-col justify-center gap-2 h-[300px] border-main rounded-full;
    &:nth-child(odd) {
@apply mt-32;
    }
}
</style>