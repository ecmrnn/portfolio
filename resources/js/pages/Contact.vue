<script setup lang="ts">
import LucideIcon from '@/components/LucideIcon.vue';
import BaseLayout from '../layouts/BaseLayout.vue';
import { Send, Mail } from 'lucide-vue-next';
import Input from '@/components/ui/input/Input.vue';
import Textarea from '@/components/ui/textarea/Textarea.vue';
import Button from '@/components/ui/button/Button.vue';

const phoneNumbers = [
    '+63 926 2355 376',
    '+63 968 5575 486', 
];

const sendEmail = () => {
    alert('Sending email...');
}
</script>

<template>
    <BaseLayout>
        <div class="absolute inset-0 lg:grid lg:grid-cols-2 w-full min-h-full">
            <div class="border-b-2 dark:bg-[url('/public/svg/pattern-dark.svg')] bg-[url('/public/svg/pattern.svg')] space-y-5 lg:space-y-10 uppercase lg:border-r-2 lg:border-b-0 border-black p-5 lg:p-10 dark:border-white dark:text-white">
                <h1 class="font-black flex lg:flex-col" style="font-size: 7vw; line-height: 7vw;">
                    <div>Let's&nbsp;</div>
                    <div>Connect</div>
                </h1>
                <p class="text-sm lg:text-base w-full sm:max-w-1/2 lg:max-w-full xl:max-w-1/2">Contact me through the following phone numbers or send an email using the form here. can’t wait to get in touch with you!</p>
            </div>

            <div class="overflow-auto uppercase">
                <div class="p-5 lg:p-10 border-b-2 border-black dark:border-white">
                    <LucideIcon :icon="Send" class="mb-5" />

                    <h2 class="font-black text-2xl">Send me a message!</h2>
                    <p class="sm:max-w-1/2 lg:max-w-full xl:max-w-1/2">connect with me with the following phone numbers below</p>

                    <ul class="mt-5">
                        <li v-for="phone in phoneNumbers" :key="phone">
                            {{ phone}}
                        </li>
                    </ul>
                </div>

                <div class="p-5 lg:p-10">
                    <LucideIcon :icon="Mail" class="mb-5" />

                    <h2 class="font-black text-2xl">Send me an email!</h2>
                    <p class="sm:max-w-1/2 lg:max-w-full xl:max-w-1/2">write me an email to discuss whatever you wanna talk about</p>

                    <form @submit.prevent="sendEmail" method="post" class="mt-5 space-y-5">
                        <Input type="text" placeholder="What you want to talk about?" />
                        <Input type="email" placeholder="Your email" />
                        <Textarea placeholder="Write your message here" />
                        <Button class="uppercase">Send Email</Button>
                    </form>
                </div>
            </div>
        </div>
    </BaseLayout>
</template>