<template>

    <div class="questions-wrapper">
        <div v-if="Questions.length>0">
            <div  v-for="(obj, index) in Questions">
                <Question :Question="obj"/>
        
            </div>


        </div>


        <div class="max-w-6xl m-0 m-auto justify-center items-center w-full p-4" v-if="Questions.length==0">
            <h3>Vous n'avez voté pour aucun proposition pour l'instant !</h3>
        </div>



    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styling.scss";


.questions-wrapper{
  
    height: 60vh;
    position: relative;
    overflow-x:hidden;
    background-color: $secondary;

    h3{
        color: white;
        font-family: $P-SemiBold;
    }
}
</style>


<script setup>

const Questions=ref({})

Questions.value=JSON.parse(localStorage.getItem('QuestionsList'))



</script>