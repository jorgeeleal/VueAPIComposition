<script setup>
import { defineProps, computed} from 'vue';
// -- -------------------------------------

const props = defineProps(['title']);

const plus = computed(() => {
    return props.title + 'computed';
})

</script>

<template>
    <h1>Titulo dinamico</h1>
    <p>{{ title }}</p>
    <p>{{ plus }}</p>
</template>



<!-- ------------------------------ 
    OPTIONS API: 
    <script>
    export default {
        props: ['prop1', 'prop2'],
        computed: {
            
        }
    }
    </script>
    


-->