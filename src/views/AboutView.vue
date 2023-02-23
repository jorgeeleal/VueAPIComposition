<script>
// -- ---------------------------------------------------------
import {ref, computed} from 'vue';
import Titulo from '../components/Titulo.vue'
import ButtonC from '../components/ButtonC.vue';

export default {
  components: {
    Titulo,
    ButtonC
  },
   setup(){
      const contador = ref(0);
      const texto = ref('');

      const increment = () => contador.value++;
      const decrement = () => contador.value--;

      const mayuscula = computed(() => {
        return texto.value.toUpperCase();
      })
      const color = computed(() => {
        if(contador.value > 0) return 'red';
        if(contador.value < 0) return 'green';
      })

      return {
        contador,
        texto,
        increment,
        decrement,
        mayuscula,
        color
      }
   }
}

</script>

<template>
  <h1
    :style="{'color': color}"
  >About: Contador: {{ contador }}</h1>
  <ButtonC btnText="Aumentar" @action="increment"/>
  <ButtonC btnText="Decrementar" @action="decrement"/>
  <hr>
  <input type="text" v-model="texto"/>
  <p>{{ mayuscula }}</p>
  <hr>

  <Titulo :title="contador"/>
  
</template>
