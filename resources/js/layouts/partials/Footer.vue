<script setup lang="ts">
const socials = [
    {
        name: 'Facebook',
        link: 'https://facebook.com/ecmrnn',
    },
    {
        name: 'GitHub',
        link: 'https://github.com/ecmrnn',
    }
];
</script>

<template>
    <footer class="px-2 py-3 pl-5 lg:px-7 lg:py-8 lg:pl-10 gap-5 items-center uppercase border-t-2 flex justify-between border-black dark:border-white">
        <p class="font-black">Ec Maranan</p>

        <ul class="flex items-center font-black">
            <li v-for="social in socials" class="relative z-10 group" :key="social.name">
                <a :href="social.link" target="_blank"><span class="px-3 py-2 inline-block group-hover:text-white dark:group-hover:text-black transition-all">{{ social.name }}</span></a>

                <div class="absolute bottom-0 bg-black dark:bg-white transition-all -z-10 left-0 w-full h-0 group-hover:h-full"></div>
            </li>
        </ul>
    </footer>
</template>