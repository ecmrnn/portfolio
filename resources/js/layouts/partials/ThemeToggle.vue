<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { ref } from 'vue'
const theme = ref(localStorage.theme);

const toggle = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        theme.value = 'light'

    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        theme.value = 'dark'
    }
}

</script>

<template>
    <div class="relative group">
        <button @click="toggle" class="px-10 h-full border-l-2 border-black dark:hover:text-black
            relative z-10 hover:text-white transition-all dark:border-white cursor-pointer">
            <div v-if="theme === 'dark'">
                <Sun />
            </div>
            <div v-else>
                <Moon />
            </div>
        </button>

        <div class="absolute bottom-0 left-0 z-0 w-full h-0 group-hover:h-full transition-all bg-black dark:bg-white"></div>
    </div>
</template>