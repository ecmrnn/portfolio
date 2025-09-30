<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import LucideIcon from '@/components/LucideIcon.vue';
import { House, FolderCode, Award, Smartphone } from 'lucide-vue-next';
const props = defineProps([
    'isOpen'
]);

const links = [
    { name: 'Home', href: '/', description: 'Welcome!', icon: House },
    { name: 'Works', href: '/works', description: 'Check out what I\'ve been up to', icon: FolderCode },
    { name: 'Certifications', href: '/certifications', description: 'see what i\'m good at, i think?', icon: Award },
    { name: 'Contact', href: '/contact', description: 'connect with me here', icon: Smartphone },
]
</script>

<template>
    <nav v-if="props.isOpen" class="p-5 lg:p-10 flex flex-col gap-5 lg:gap-10 justify-between">
        <div class="space-y-5 lg:space-y-10">
            <div>
                <h1 class="font-bold leading-none" style="font-size: 7vw;">NUGAGAWEN?</h1>
                <p class="uppercase">Wachu wanna do?</p>
            </div>

            <ul class="flex flex-col gap-5 lg:gap-10">
                <li v-for="link in links" :key="link.name" class="list-none">
                    <Link :href="link.href" class="flex items-center gap-5 group">
                        <LucideIcon :icon="link.icon" />

                        <div class="uppercase">
                            <p class="font-black text-lg">{{ link.name}}</p>
                            <p class="text-sm text-black/50 dark:text-white/50 dark:group-hover:text-white group-hover:text-black">{{ link.description }}</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
</template>