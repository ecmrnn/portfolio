<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Header from './partials/Header.vue';
import Footer from './partials/Footer.vue';
</script>

<template>
    <Head title="Portfolio">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <div class="flex flex-col min-h-screen">
        <!-- Header / Navigation / Logo -->
        <Header />

        <!-- Main content goes here -->
        <main class="flex-grow relative overflow-auto">
            <slot></slot>
        </main>
        <Footer />
    </div>

</template>