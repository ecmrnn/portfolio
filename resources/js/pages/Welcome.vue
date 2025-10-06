<script setup lang="ts">
import LucideIcon from '@/components/LucideIcon.vue';
import BaseLayout from '../layouts/BaseLayout.vue';
import { Bot, Medal, Layers2 } from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';
import Button from '@/components/ui/button/Button.vue';

const languages = [
    'PHP',
    'C# - ASP.NET',
    'JavaScript',
    'TailwindCSS',
    'MySQL',
    'SQL Server',
    'HTML5',
    'CSS3',
]

const cards = [
    {
        title: 'Hello there!',
        description: 'I’M EC, A PHP-JS DEVELOPER SPECIALIZING IN LARAVEL FRAMEWORK, I BUILD WEB BASED APPLICATIONS OR SYSTEMS TO HELP BRING YOUR IDEAS INTO LIFE!',
        link: '',
        linkText: 'Get my resume',
        icon: Bot
    },
    {
        title: 'My Certifications',
        description: 'A collection of certifications I’ve earned to sharpen my skills and validate what I’ve learned in web development. click the button below to view my certificates! ',
        link: '/certifications',
        linkText: 'View Certificates',
        icon: Medal
    },
    {
        title: 'Laravel Enthusiast',
        description: 'I USE THE FOLLOWING MODERN TECHNOLOGIES TO BUILD APPLICATIONS: TAILWINDCSS, ALPINEJS, LIVEWIRE/VUEJS, AND THE LARAVEL FRAMEWORK.',
        link: '/works',
        linkText: 'Check my Works',
        icon: Layers2
    },
];
</script>

<template>
    <BaseLayout>
        <div class="absolute inset-0 flex flex-col w-full min-h-full">
            <div class="py-5 lg:py-10 dark:bg-[url('/public/svg/pattern-dark.svg')] bg-[url('/public/svg/pattern.svg')] bg-repeat relative border-b-2 border-black z-20 dark:border-white">
                <h1 class="font-black text-center uppercase" style="font-size: 7vw; line-height: 7vw;">
                    <span id="name">Ec Maranan</span> <br />
                    Laravel Dev.
                </h1>
                <p class="text-center font-bold uppercase mt-5">
                    <span>{{ languages.join(' // ') }}</span>
                </p>
            </div>

            <ul class="grid lg:grid-cols-3 grow">
                <li v-for="card in cards" :key="card.title" class="space-y-5 uppercase border-b-2 lg:border-b-0 border-r-0 lg:border-r-2 border-black dark:border-white last:border-b-0 last:border-r-0 p-5 lg:p-10">
                    <LucideIcon :icon="card.icon" />
                    <h2 class="text-2xl font-black">{{ card.title }}</h2>
                    <p class="text-sm leading-6">{{ card.description }}</p>
                    <Link :href="card.link"><Button class="uppercase">{{ card.linkText }}</Button></Link>
                </li>
            </ul>
        </div>
    </BaseLayout>
</template>
