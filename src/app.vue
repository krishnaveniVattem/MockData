<template>
    <div>      
        <headtitle></headtitle>
        <InputForm></InputForm>


    </div>
</template>

<script>
    import headtitle from './header.vue';
    import InputForm from './fields.vue';



    export default{
        name: 'App',
        data() {
            return{
                showData: false
            }
        },
        components: {
            InputForm,headtitle,

        },
       
    }
</script>


