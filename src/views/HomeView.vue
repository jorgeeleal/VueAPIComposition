<script setup>
import {ref} from 'vue';

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;

</script>

<template>
  <h1>Contador: {{ count }}</h1>
  <button @click="increment">sumar uno (+)</button>
  <button @click="decrement">restar uno (-)</button>
</template>


<!-- -- ---------------------- Options API 

  <script>
    export default {
      data() {
        return {
          contador: 0
        }
      },
      methods: {
        increment(){
          this.contador++;
        }, 
        decrement(){
          this.contador--;
        }
      }
    }
  </script>

-->