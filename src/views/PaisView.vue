<script>
import { computed } from 'vue';
//import { useRoute } from 'vue-router';
import {useGetData} from '../hooks/useGetData'
export default{
    props: ['pais'],
    setup(props){
        const paisUpper = computed(() => {
            return props.pais.toUpperCase();
        })
        //const nombreParams = useRoute();
        //console.log(nombreParams.params.pais);
        const {data, getData} = useGetData();
        getData(`https://restcountries.com/v3.1/name/${props.pais}`)

        return{
            paisUpper,
            data
        }
    }
}

</script>

<template>
    <h1>Información del país</h1>
    <!-- <p>{{ $route.params.pais }}</p> -->
    <p>{{ paisUpper }}</p>
    <div class="container" v-if="data">
        <p>Nombre comun: {{ data[0].name.common}}</p>
        <p> Nombre oficial: {{ data[0].name.official}}</p>
        <p> Bandera: </p>
        <p :style="{'font-size':'50px'}">{{ data[0].flag}}</p>
        <p> Region: {{ data[0].region}}</p>
    </div>
    
</template>