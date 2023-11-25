<script setup lang="ts">
defineProps({
    title: String,
    tag: String,
    desc: String,
})
</script>
<template>
    <div class="bg-white px-4 py-4 rounded-md box-shadow-sm">
        <div v-if="desc">
            <span>{{ tag ?? 'TAG' }}</span>
            <h5>{{ title }}</h5>
            <p>{{ desc }}</p>
        </div>
        <div v-else>
            <slot></slot>
        </div>

    </div>
</template>