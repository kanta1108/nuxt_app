<template>
    <section>
        <p>{{ message }}</p>
        <p>id: {{ this.$route.params.id }}</p>
    </section>
</template>
<script>
export default {
    data(){
        return {
            message: '/user/id'
        }
    },
    validate({params}){
        return /^\d+$/.test(params.id)
    }
}
</script>
