<script setup lang="ts">
import LucideIcon from '@/components/LucideIcon.vue';
import BaseLayout from '../layouts/BaseLayout.vue';
import Button from '@/components/ui/button/Button.vue';
import { Info, Database } from 'lucide-vue-next';
import { Modal } from '@/components/ui/modal';
import { ref } from 'vue';

const certificates = [
    {
        id: 1,
        title: 'Information Technology Specialists in JavaScript',
        description: 'This certificate helped me strengthen my understanding of JavaScript—especially things like functions, DOM manipulation, event handling, conditional logic, loops, and form validations.',
        achievedOn: '12/13/2023',
        examProvider: 'Certiport Pearson Vue',
        icon: Database,
        image: '/certificates/javascript.jpg'
    },
    {
        id: 2,
        title: 'Information Technology Specialists in HTML and CSS',
        description: 'This certificate helped me strengthen my understanding of HTML and CSS—especially concepts like HTML5 semantic tags, forms, global attributes, font and layout styling, display types, mobile responsiveness, and other concepts used in modern web development.',
        achievedOn: '11/13/2023',
        examProvider: 'Certiport Pearson Vue',
        icon: Database,
        image: '/certificates/html-css.jpg'
    },
    {
        id: 3,
        title: 'Information Technology Specialists in Databases',
        description: 'This certificate helped me strengthen my understanding of databases—especially things like SQL queries, table relationships, CRUD operations, and field data types.',
        achievedOn: '03/16/2022', 
        examProvider: 'Certiport Pearson Vue',
        icon: Database,
        image: '/certificates/databases.jpg'
    },
];

const activeCertificate = ref<number|null>(null);

const openCertificate = (id: number) => {
    activeCertificate.value = id;
} 
</script>

<template>
    <BaseLayout>
        <div class="absolute inset-0 lg:grid lg:grid-cols-2 w-full min-h-full">
            <div class="border-b-2 dark:bg-[url('/public/svg/pattern-dark.svg')] bg-[url('/public/svg/pattern.svg')] flex flex-col justify-between gap-5 lg:gap-10 uppercase lg:border-r-2 lg:border-b-0 border-black p-5 lg:p-10 dark:border-white dark:text-white">
                <div class="space-y-5 lg:space-y-10">
                    <h1 class="font-black flex lg:flex-col" style="font-size: 7vw; line-height: 7vw;">
                        <div>My&nbsp;</div>
                        <div>Certs.</div>
                    </h1>
                    <p class="text-sm lg:text-base w-full sm:max-w-1/2 lg:max-w-full xl:max-w-1/2">A bunch of certificates I’ve earned along the way — proof of the things I’ve learned, the skills I’ve picked up, and the goals I’ve hit.</p>
                </div>

                <div class="p-3 flex gap-3 items-start dark:bg-white/10 bg-black rounded-md border border-black dark:border-white/20 text-white uppercase w-full sm:max-w-1/2 lg:max-w-full xl:max-w-1/2 text-xs">
                   <Info class="flex-shrink-0" />
                   <p>you can verify these certificates at <a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">verify.certiport.com</a>, sn for js, html and css: <span class="underline underline-offset-2">20220129599</span>, SN for databases: <span class="underline underline-offset-2">202010199</span></p>
                </div>
            </div>

            <div class="overflow-auto">
                <div class="p-5 lg:p-10 relative uppercase border-b-2 border-black dark:border-white last:border-b-0" v-for="certificate in certificates" :key="certificate.title">
                    <LucideIcon :icon="certificate.icon" class="mb-5" />

                    <h2 class="font-black text-2xl mb-5">{{ certificate.title }}</h2>

                    <p class="text-sm mb-5">{{ certificate.description }}</p>

                    <p class="text-sm"><span class="font-black">Achieved on</span>: <time :datetime="certificate.achievedOn">{{ certificate.achievedOn }}</time></p>
                    <p class="text-sm mb-5"><span class="font-black">Exam Provided by</span>: {{ certificate.examProvider }}</p>

                    <Button class="uppercase" @click="openCertificate(certificate.id)">View Certificate</Button>

                    <Modal :show="activeCertificate === certificate.id" @click.self="activeCertificate = null">
                        <div>
                            <div class="bg-[url('/public/svg/pattern.svg')] border border-black/10 mb-5 aspect-video w-full">
                                <img :src="certificate.image" alt="certificate image" class="" />
                            </div>
                            <h3 class="font-black text-lg mb-5">{{ certificate.title }}</h3>
                            
                            <p class="text-sm">Achieved on: {{ certificate.achievedOn }}</p>
                            <p class="text-sm">Exam provided by: {{ certificate.examProvider }}</p>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    </BaseLayout>
</template>