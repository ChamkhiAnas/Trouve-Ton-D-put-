<template>
    <div class="obj" v-for="(obj, index) in Questions">
        <Question :Question="obj"/>

    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styling.scss";


// .obj{
  
//     height: 60vh;
//     overflow-y: scroll;
// }
</style>


<script setup>

const Questions=ref({})

Questions.value=JSON.parse(localStorage.getItem('QuestionsList'))



</script>