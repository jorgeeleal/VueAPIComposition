<script>
export default {
    props: ['btnText'],
    setup(props, context){
        const accionHijo = () => {
            context.emit('action');
        }
        return {
            accionHijo
        }
    }
}
</script>

<template>
    <button @click="accionHijo">{{ btnText }}</button>
</template>