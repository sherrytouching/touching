<script setup lang="ts">
import icon from '@/assets/home/sketch.png'
const featureList = [
    {
        title: 'OOXO',
        description: `L elit. Necessitatibus cupiditate voluptatem tempore nemo error ut perspiciatis earum impedit corporis eveniet.`,
        icon: icon,
    },
    {
        title: '都市更新教育課程',
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
    <div class="w-full h-[80vh] features" id="service">
        <div class="max-w-screen-xl mx-auto flex flex-col items-center py-20 justify-between">
            <div class="relative flex flex-col items-center gap-4">
                <h2 class="text-4xl text-[#444] font-bold">社區進駐顧問服務</h2>
                <h2 class="absolute -top-8 text-8xl text-main opacity-10 font-bold">COMMUNITY</h2>
                <span class="block w-12 rounded-sm bg-yellow h-2"></span>
                <p class="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse?Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Perferendis, esse?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Perferendis, esse?</p>
            </div>

            <div class="line flex flex-row mx-auto w-full items-center mt-20 justify-between">
                <!-- <div class="flex w-full items-center justify-between absolute left-1/2 -translate-x-1/2 -top-4">
                    <span v-for="i in 4" class="number">{{ i }}</span>
                </div> -->
                <div class="circle-container">
                    <div class="circles" v-for="(i, index) in featureList">
                        <span class="number">{{ index +1 }}</span>
                       <div class="bg-[#ffffff80] mt-4 backdrop-blur rounded-xl flex py-4 border-white border drop flex-col items-center">
                        <h4 class="font-bold text-lg tracking-wide">{{ i.title }}</h4>
                        <p class="w-2/3 opacity-80 tracking-wider text-left">{{ i.description }}</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.features {
    background-image: url('../assets/home/help.png');
    background-position: center;
    background-size: cover;
}

.number {
    @apply w-10 text-2xl h-10 block flex items-center justify-center font-bold bg-main text-white rounded-full;
}

.line {
    @apply relative;

    &:before {
        content: '';
        @apply w-full h-1 rounded-xl top-0 absolute bg-main;
    }
}



.circle-container {
    @apply px-8 w-full flex items-start gap-10 justify-between;

}

.circles {
    @apply flex flex-col items-center -mt-4 z-10;
}
</style>