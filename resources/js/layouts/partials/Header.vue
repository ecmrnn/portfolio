<script setup lang="ts">
import Navigation from './Navigation.vue'
import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'

const isOpen = ref(false)
</script>

<template>
    <div class="flex flex-col" :class="{ 'h-screen fixed w-screen z-50 dark:bg-black bg-white': isOpen }">
        <header class="flex w-full justify-between gap-5 border-b-2 border-black dark:border-white">
            <div class="relative group">
                <Link href="/"
                    class="block p-5 relative z-10 lg:py-10 lg:px-20 border-r-2 border-black font-black
                        dark:hover:text-black
                        dark:border-white
                        hover:text-white
                        transition-all">
                    ECMRNN
                </Link>

                <div class="absolute bottom-0 left-0 z-0 w-full h-0 group-hover:h-full transition-all bg-black dark:bg-white"></div>
            </div>

            <div class="flex gap-5 lg:gap-10 items-center">
                <p class="font-black uppercase hidden lg:block">Kumusta!</p>

                <div class="h-full flex">
                    <ThemeToggle />

                    <div class="relative group">
                        <button @click="isOpen = ! isOpen" class="block px-10 h-full border-l-2 border-black dark:hover:text-black
                            relative z-10 hover:text-white transition-all cursor-pointer dark:border-white">
                            <Menu v-if="! isOpen" />
                            <X v-if="isOpen" />
                        </button>

                        <div class="absolute bottom-0 left-0 z-0 w-full h-0 group-hover:h-full transition-all bg-black dark:bg-white"></div>
                    </div>
                </div>
            </div>
        </header>

        <Navigation :isOpen="isOpen" class="w-full grow h-full" />
    </div>
</template>