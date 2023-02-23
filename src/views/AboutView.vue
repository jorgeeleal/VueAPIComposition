<script setup>
import Titulo from '../components/Titulo.vue'
import ButtonC from '../components/ButtonC.vue';
// -- ---------------------------------------------------------
import {ref, computed} from 'vue';

const count = ref(0);

const texto = ref('');

const increment = () => count.value++;
const decrement = () => count.value--;

const mayuscula = computed(() => {
  return texto.value.toUpperCase();
})
const color = computed(() => {
  if(count.value > 0) return 'red';
  if(count.value < 0) return 'green';
})

</script>

<template>
  <h1
    :style="{'color': color}"
  >About: Contador: {{ count }}</h1>
  <!--
  <button @click="increment">sumar uno (+)</button>
  <button @click="decrement">restar uno (-)</button>
  -->
  <ButtonC btnText="Aumentar" @action="increment"/>
  <ButtonC btnText="Decrementar" @action="decrement"/>
  <hr>
  <input type="text" v-model="texto"/>
  <p>{{ mayuscula }}</p>
  <hr>
  <Titulo :title="count"/>
</template>

<!-- -- ---------------------- Compositions API 

  <script>
    import {ref} from 'vue';
    export default {
      components: {
        //component,
      },
      setup(){
        const count = ref(0);

        const increment = () => count.value++;
        const decrement = () => count.value--;

        return {
          count,
          increment,
          decrement
        }
      }
    }
  </script>

-->