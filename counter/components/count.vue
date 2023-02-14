<template>
    <div>
        <h2>Counter</h2>
        <p>amount: {{ amount }}</p>
        <button @click="increment">+1</button>
        <button @click="reset">reset</button>
    </div>
</template>
<script>
export default {
    computed:{
        amount(){
            return this.$store.state.count.count
        }
    },
    methods: {
        increment(){
            this.$store.commit('count/addCount')
        },
        reset(){
            this.$store.commit('count/resetCount')
        }
    },
}
</script>
