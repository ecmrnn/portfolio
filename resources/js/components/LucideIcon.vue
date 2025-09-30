<script setup lang="ts">
const icon = defineProps(['icon']);
</script>

<template>
    <div class="p-3 bg-black w-min dark:bg-white/10 rounded-md border border-black dark:border-white/20 text-white transition-all">
        <component :is="icon.icon" />
    </div>
</template>