import { ref } from "vue";

export function useContador(){
    const contador = ref(0);

    const incrementar = () => contador.value++;
    const decrementar = () => contador.value--;

    return({
        contador,
        incrementar,
        decrementar
    })
}