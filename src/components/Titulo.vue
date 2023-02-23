<script>
import { computed } from 'vue';
// -- -------------------------------------

export default {
    props: ['title'],
    setup(props){
        const plus = computed(() => {
            return props.title + 'computed';
        })

        return {
            plus
        }
    }
}
</script>

<template>
    <h1>Titulo dinamico</h1>
    <p>{{ title }}</p>
    <p>{{ plus }}</p>
</template>
