<script>
    import { ref } from 'vue';
    import axios from 'axios';
    import {useGetData} from '../hooks/useGetData'
    // - ---------------------------------------------
    
    export default{
        setup(){
            const {data, getData} = useGetData();

            getData('https://restcountries.com/v3.1/all')
            return{
                data
            }
        }
    }

</script>

<template>

    <h1>Lista paises</h1>
    <ul v-if="data">
        <li v-for="c in data">
            <router-link :to="`/paises/${c.name.official}`">
                {{ c.name.official }}
            </router-link>     
        </li>
    </ul>

</template>