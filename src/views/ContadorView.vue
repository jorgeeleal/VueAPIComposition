<script setup>
import {useContador} from '../hooks/useContador';
import ButtonC from '../components/ButtonC.vue';

const {contador, incrementar, decrementar} = useContador();

</script>

<template>
    <h1>Contador</h1>
    <p>{{ contador }}</p>
    <ButtonC btnText="aumentar" @action="incrementar" />
    <ButtonC btnText="decrementar" @action="decrementar" />
</template>