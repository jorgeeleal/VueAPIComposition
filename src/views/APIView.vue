<script setup>
    import { ref } from 'vue';
    import {useGetData} from '../hooks/useGetData'
    // - ---------------------------------------------
    
    const {data, getData} = useGetData();

    getData('https://restcountries.com/v3.1/all');

</script>

<template>

    <h1>Lista paises</h1>
    <ul v-if="data">
        <li v-for="c in data">{{ c.name.official }}</li>
    </ul>

</template>