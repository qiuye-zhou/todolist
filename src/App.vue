<script setup lang="ts">
import { useLocalStorage } from 'use-aid';

import Nav from './components/Nav.vue';
import container from './components/container.vue';

const local = useLocalStorage();
window.addEventListener('beforeunload', function () {
    local.set('LastTime', Date.now());
});
</script>

<template>
    <div class="max-w-screen-lg m-auto p-4 flex flex-col">
        <Nav />
        <container />
    </div>
</template>
