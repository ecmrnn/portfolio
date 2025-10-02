<script setup lang="ts">
// ...
const props = defineProps({
    show: Boolean
});
</script>

<template>
    <Transition name="fade">
        <div :class="props.show ? 'opacity-100 grid' : 'hidden opacity-0 scale-0'"
            class="h-screen overflow-hidden transition-all w-screen fixed inset-0 z-50 text-black bg-black/50 place-items-center">
            <div :class="props.show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                 class="m-5 md:max-w-1/3 p-5 bg-white md:min-w-2xl w-full transition-all">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>