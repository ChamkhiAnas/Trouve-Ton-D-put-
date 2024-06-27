<template>

    <div class="questions-wrapper">
            <div  v-for="(obj, index) in Questions">
                <Question :Question="obj"/>
        
            </div>


    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styling.scss";


.questions-wrapper{
  
    height: 60vh;
    position: relative;
    overflow-x:hidden;
}
</style>


<script setup>

const Questions=ref({})

Questions.value=JSON.parse(localStorage.getItem('QuestionsList'))



</script>