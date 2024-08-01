<template>



<div class="questions flex">
    <div  class="question max-w-6xl m-0 m-auto pt-8">

       

        <form class="mt-4 justify-center w-11/12 m-0 m-auto">
            <select v-model="selectedTheme" id="countries" style="background-color: #373737;" class="border-transparent rounded-xl py-4 px-8 text-gray-900 text-sm block w-full p-2.5 dark:text-white">
                <option value="Sélectionnez un thème">Sélectionnez un thème</option>
                <option v-for="(obj, index) in questions" :key="index" :value="Object.keys(obj)[0]">
                    {{ Object.keys(obj)[0] }} ({{ obj['answered'] }}/{{ obj['maxLength'] }})
                </option>
            </select>
        </form>



        <div class="question-card py-8 px-4 flex flex-col xs:px-8  justify-center w-11/12 m-0 m-auto mt-8">
            <div class="badge-type-question max-w-7xl py-2 px-6 ml-2">
                <p>
                    
                    {{selectedTheme}}
                </p>
            </div>
                <h1 class="px-4 mt-4">

                    {{SelectedQustionObject[0][selectedTheme][SelectedQustionObject[0].answered].Question}}
                </h1>

        </div>


    </div>

</div>  

</template>

<script setup>


const props = defineProps(['data','parentIndex'])
const emit = defineEmits(['sendIndex','sendQuestionsAnswered','sendPage'])

const questions=ref({})
const QuestionsAnswered=ref({})
// const { parentIndex } = toRefs(props)
const selectedTheme=ref("Sélectionnez un thème")
const themes=ref([])



watch(selectedTheme, (newValue) => {
      console.log(`Theme changed value  ${newValue}`);
});

questions.value=props.data



questions.value.forEach(element => {
    element.answered!==element.maxLength
});

const SelectedQustionObject = computed(() => {
    return questions.value.filter((item) => Object.keys(item)[0]==selectedTheme.value);
})








console.log("Questions.value",questions.value)

// console.log("themes",themes.value)








// QuestionsAnswered.value=JSON.parse(localStorage.getItem('QuestionsList'))





// const changePage=(value)=>{
//     emit('sendPage',value)
// }






// const bgColorError=ref('#373737')

// const bgColorSucces=ref('#373737')

// const bgNeutral=ref('white')


// const parties=ref([{
//     "NFP":0,
//     "RN": 0,
//     "EN": 0,
//     "LR": 0,    
// }])


// const array=ref([])


// localStorage.getItem('Parties')==null ?  localStorage.setItem('Parties', JSON.stringify(parties.value)) : ""

// localStorage.getItem('QuestionsList')==null ?  localStorage.setItem('QuestionsList', JSON.stringify(array.value)) : ""


// const RecallQuestionsAnswered=async()=>{
//     QuestionsAnswered.value=JSON.parse(localStorage.getItem('QuestionsList'))
//     emit('sendQuestionsAnswered',QuestionsAnswered.value)

// }


// const NextStep=async()=>{

//     index.value<maxlength.value ? index.value+=1 : ""
//     emit('sendIndex',index.value)
// }



// const Neutral=async(Obj)=>{

//     Obj["Status"] = "Neutral";

//     let array = JSON.parse(localStorage.getItem('QuestionsList')) || [];

//     array.push(Obj);


//     await localStorage.setItem('QuestionsList', JSON.stringify(array));

//     NextStep();
//     RecallQuestionsAnswered();



// }


// const Like=async(Obj)=>{

//     Obj["Status"] = "Like";




//     let Parties = JSON.parse(localStorage.getItem('Parties')) || [];
//     let array = JSON.parse(localStorage.getItem('QuestionsList')) || [];


//     Obj["Partis en accord"].includes("NFP") ? Parties[0].NFP+=1 : "";
//     Obj["Partis en accord"].includes("RN") ? Parties[0].RN+=1: "";
//     Obj["Partis en accord"].includes("EN") ? Parties[0].EN+=1 : "";
//     Obj["Partis en accord"].includes("LR") ? Parties[0].LR+=1: "";


    
//     array.push(Obj);

//     await localStorage.setItem('QuestionsList', JSON.stringify(array));
//     await localStorage.setItem('Parties', JSON.stringify(Parties));


//     NextStep();
//     RecallQuestionsAnswered();



// }


 
// const Dislike=async(Obj)=>{
//     Obj["Status"] = "Dislike";
//     let array = JSON.parse(localStorage.getItem('QuestionsList')) || [];
//     array.push(Obj);
//     await localStorage.setItem('QuestionsList', JSON.stringify(array));
//     NextStep();
//     RecallQuestionsAnswered();

// }








// const changeColorSucces=async (value)=>{
//     bgColorSucces.value=value
//     setTimeout(() => {
//         bgColorSucces.value = '#373737';
//     }, 500);

// }

// const changeColorError=(value)=>{
//     bgColorError.value=value
//     setTimeout(() => {
//         bgColorError.value = '#373737';
//     }, 500);
// }

// const changeColorNeutral=(value)=>{
//     bgNeutral.value=value
//     setTimeout(() => {
//         bgNeutral.value = 'white';
//     }, 500);
// }


</script>


<style lang="scss" scoped>
@use "~/assets/styling.scss";

.questions{
    background-color: $secondary;
    color: white;

    #countries{
    font-family:  $P-Medium !important;
    font-size: calc(0.8rem + 0.3vh)
    }

    .question-card{
    min-height: 45vh;
    height: fit-content;
    background-color: $forground;   
    border-radius:2.5rem;
    }

    

    // background-color: rgb(202, 201, 201);

        .badge-type-question{
            border-radius: 2rem;
            background-color: $primary;
            width: fit-content;
            font-family: $P-Bold;
            font-size:1rem;
        
    
        }
        h1{
            line-height: 148%;
            font-family: $P-SemiBold;
            font-size: calc(1.2rem + 0.2vw);
        }
    

    .controll-btn{  
        border-radius: 0.5rem;
        // background-color: $forground;
        font-size:calc(0.9rem + 0.4vw);
        font-family:$P-Regular;
    }
    .next-btn{
        font-family:$P-Bold;
        border-radius:50%;
        background:white;
        color:$secondary;
        width:6rem;
        height:6rem;
        border:2px solid white;
    }
    .next-btn:before{
        content: "";
        border-radius: 50%;
        position: absolute;
        border: 2px solid white;
        width:7rem;
        height:7rem;

    }

    h3{
        color: white;
        font-family: $M-Italic;
        font-size:calc(1rem + 0.2vw)
    }
}


.controll-btns{
    border-radius: 2rem;
    background-color: $secondary;
    max-height: 40rem;
    height: fit-content;
    h1{
        font-size: calc(1.2rem + 0.5vw);
        font-family:  $M-Italic;
    }

    button{
    border-radius: 4rem;
    font-family: $P-SemiBold;
    background-color: $primary;
    font-size: calc(0.9rem + 0.5vw);


    
    }
}


</style>

<script setup>

</script>