<script setup lang="ts">
import { ref } from 'vue'


import logo from '@/assets/logo.png'

const count = ref(0)
</script>

<template>
  <div class="hero">
    <div class="bg"></div>
    <div class=" max-w-screen-xl mx-auto">
      <img class="h-20 mx-auto mb-4 relative" :src="logo" />
      <div class="flex items-center flex-col justify-center">
        <h1>踏取國際開發有限公司</h1>
      <p class="tracking-wider text-3xl text-[#fff] bg-[#cccfff30] px-4 py-2 rounded-lg border border-[#ffffff40] backdrop-blur-md drop-shadow-md ">- 踏足九州   |   取飲一瓢 -</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  @apply bg-cover bg-top overflow-hidden relative flex items-center;
  width: 100vw;
  height: 80vh;
  background-image: url('@/assets/home/hero.jpeg');
  background-attachment: fixed;
}

h1 {
  @apply text-5xl relative bg-main text-white font-bold py-4 px-8 mb-10 w-[480px];
  box-sizing: content-box;
  // background: linear-gradient(271.72deg, #000 7.09%, #64acff 96.61%);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   -webkit-text-fill-color: transparent;
}

.bg {
  @apply absolute h-full w-2/3 -left-[20%] bg-[#ffffff60] backdrop-blur-sm backdrop-brightness-125;
  transform: skew(-20deg);
}</style>
