<script>
import {useContador} from '../hooks/useContador';
import ButtonC from '../components/ButtonC.vue';

export default {
    components: {
        ButtonC
    },
    setup(){
        //const {contador, incrementar, decrementar} = useContador();
        return {...useContador()}
    }
}

</script>

<template>
    <h1>Contador</h1>
    <p>{{ contador }}</p>
    <ButtonC btnText="aumentar" @action="incrementar" />
    <ButtonC btnText="decrementar" @action="decrementar" />
</template>