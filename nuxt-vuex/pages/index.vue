<template>
  <section class="container">
    <div>
      <p>{{ message }}</p>
      <button @click="update('hogehoge')">update</button>
    </div>
  </section>
</template>

<script>
export default {
  computed:{
    message(){
      return this.$store.state.message
    },
  },
  methods: {
    update(value){
      // this.$store.commit('updateMessage', value)
      this.$store.dispatch('updateMessageAction', payload)
    }
  },

}
</script>
