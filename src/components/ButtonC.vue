<script setup>
    defineProps(['btnText']);

</script>

<template>
    <button @click="$emit('action')">{{ btnText }}</button>
</template>