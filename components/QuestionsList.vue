<template>

    <div class="questions-wrapper ">
        <div v-if="Questions.length>0">
            <div  v-for="(obj, index) in Questions">
                <Question :Question="obj"/>
        
            </div>


        </div>


        <div class="flex justify-center items-center mt-10" v-if="Questions.length==0">

            <div class="flex max-w-6xl m-0 m-auto justify-center items-center w-full p-4" >
                <h3>Vous n'avez voté pour aucun proposition pour l'instant !</h3>
            </div>

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
        font-family: $M-Italic;
        font-size: calc(1rem + 0.3vw);
    }
}
</style>


<script setup>

const Questions=ref({})

Questions.value=JSON.parse(localStorage.getItem('QuestionsList'))



</script>