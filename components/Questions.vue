<template>



<div class="questions flex">
    <div v-if="QuestionsAnswered.length<maxlength" class="question max-w-6xl m-0 m-auto pt-8">

       




        <div class="question-card py-8 px-4 flex flex-col xs:px-8  justify-center w-11/12 m-0 m-auto mt-8">

            <div class="badge-type-question max-w-7xl py-2 px-6 ml-2">
                <p>{{ questions[index-1].Thème }}</p>
            </div>
            <h1 class="px-4 mt-4">{{ questions[index-1].Question }}</h1>


        </div>


        <div class="swipe-btns px-1 sm:px-2 mt-10  pb-6 flex justify-center items-center  gap-1 xs:gap-4 sm:gap-8">

                <div :style="{ backgroundColor: bgColorError }"  @click="changeColorError('#7D1A1A');Dislike(questions[index-1])" @mousedown="changeColorError('#7D1A1A')" @mouseup="changeColorError('#7D1A1A')" class="controll-btn cursor-pointer px-6 max-h-24 h-fit sm:px-8  py-2 flex gap-2 justify-center items-center flex-wrap ">
                    <label class="cursor-pointer">Contre</label>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 25.3333C20.2592 25.3333 25.3333 20.2592 25.3333 14C25.3333 7.74077 20.2592 2.66667 14 2.66667C7.74077 2.66667 2.66667 7.74077 2.66667 14C2.66667 20.2592 7.74077 25.3333 14 25.3333ZM28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z" fill="white"/>
                        <path d="M10.5482 21.5431C10.2621 21.9563 9.69523 22.0593 9.28204 21.7732C8.86884 21.4871 8.76582 20.9202 9.05192 20.507C10.3157 18.6819 12.0294 17.7371 14.1132 17.7371C16.2149 17.7371 17.872 18.7013 18.9813 20.5584C19.239 20.9899 19.0982 21.5486 18.6667 21.8063C18.2353 22.064 17.6766 21.9232 17.4188 21.4917C16.6343 20.1783 15.5667 19.5571 14.1132 19.5571C12.6416 19.5571 11.4799 20.1976 10.5482 21.5431Z" fill="white"/>
                        <path d="M9.12942 14.0372C8.82894 13.6344 8.25877 13.5514 7.85591 13.8518C7.45304 14.1523 7.37004 14.7225 7.67051 15.1253C8.22717 15.8717 8.98994 16.2643 9.85999 16.2409C10.691 16.2377 11.4023 15.8409 11.9326 15.1211C12.2307 14.7164 12.1444 14.1468 11.7397 13.8487C11.3351 13.5505 10.7654 13.6369 10.4673 14.0415C10.2642 14.3172 10.0798 14.4201 9.83233 14.4212C9.54975 14.4288 9.3415 14.3216 9.12942 14.0372Z" fill="white"/>
                        <path d="M17.5295 14.0372C17.229 13.6344 16.6589 13.5514 16.256 13.8518C15.8531 14.1523 15.7701 14.7225 16.0706 15.1253C16.6273 15.8717 17.39 16.2643 18.2601 16.2409C19.0911 16.2377 19.8023 15.8409 20.3327 15.1211C20.6308 14.7164 20.5444 14.1468 20.1398 13.8487C19.7352 13.5505 19.1655 13.6369 18.8674 14.0415C18.6643 14.3172 18.4799 14.4201 18.2324 14.4212C17.9498 14.4288 17.7416 14.3216 17.5295 14.0372Z" fill="white"/>
                        <path d="M6.7123 11.1083C6.23551 10.9494 5.97784 10.434 6.13677 9.95724C6.2957 9.48045 6.81105 9.22277 7.28784 9.3817L11.2723 10.7099C11.7491 10.8688 12.0068 11.3841 11.8478 11.8609C11.6889 12.3377 11.1736 12.5954 10.6968 12.4365L6.7123 11.1083Z" fill="white"/>
                        <path d="M16.5122 10.7818C16.0354 10.9407 15.7777 11.4561 15.9367 11.9329C16.0956 12.4096 16.6109 12.6673 17.0877 12.5084L21.2877 11.1084C21.7645 10.9495 22.0222 10.4341 21.8633 9.95732C21.7043 9.48053 21.189 9.22286 20.7122 9.38179L16.5122 10.7818Z" fill="white"/>
                    </svg>


                </div>

                <div :style="{ backgroundColor: bgNeutral }"  @click="changeColorNeutral('#cac9c9d9');Neutral(questions[index-1])" class="next-btn cursor-pointer flex justify-center  items-center px-4 py-4">
                    <label  class="cursor-pointer">Passer</label>
                </div>

            

                <div :style="{ backgroundColor: bgColorSucces }" @click="changeColorSucces('#1C4920');Like(questions[index-1])" class="controll-btn cursor-pointer px-6 max-h-24 h-fit  sm:px-8 py-2  flex gap-2 justify-center items-center flex-wrap">
                    <label class="cursor-pointer">Pour</label>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 25.3333C20.2592 25.3333 25.3333 20.2592 25.3333 14C25.3333 7.74077 20.2592 2.66667 14 2.66667C7.74077 2.66667 2.66667 7.74077 2.66667 14C2.66667 20.2592 7.74077 25.3333 14 25.3333ZM28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z" fill="white"/>
                        <path d="M7.7811 16.0733C7.68109 15.2351 8.27956 14.4744 9.11782 14.3744C9.20815 14.3655 9.20815 14.3655 9.29904 14.3637H18.7008C18.7915 14.3655 18.7916 14.3655 18.8819 14.3744C19.7201 14.4744 20.3186 15.2351 20.2186 16.0733C19.8426 19.2253 17.2033 21.7 13.9998 21.7C10.7964 21.7 8.15714 19.2253 7.7811 16.0733Z" fill="white"/>
                        <path d="M17.4068 11.158C17.1449 11.4931 16.661 11.5525 16.3259 11.2907C15.9908 11.0288 15.9314 10.5449 16.1933 10.2098C16.7636 9.47992 17.528 9.10436 18.405 9.12678C19.2338 9.12982 19.946 9.50916 20.4896 10.2134C20.7494 10.5501 20.6871 11.0336 20.3505 11.2935C20.0139 11.5533 19.5303 11.491 19.2705 11.1544C19.0073 10.8134 18.7343 10.668 18.3827 10.6665C17.9858 10.6565 17.6821 10.8057 17.4068 11.158Z" fill="white"/>
                        <path d="M9.00668 11.158C8.74485 11.4931 8.26095 11.5525 7.92585 11.2907C7.59075 11.0288 7.53136 10.5449 7.79319 10.2098C8.3635 9.47992 9.12795 9.10436 10.0049 9.12678C10.8337 9.12982 11.5459 9.50916 12.0895 10.2134C12.3493 10.5501 12.2871 11.0336 11.9504 11.2935C11.6138 11.5533 11.1302 11.491 10.8704 11.1544C10.6072 10.8134 10.3342 10.668 9.98261 10.6665C9.58566 10.6565 9.28198 10.8057 9.00668 11.158Z" fill="white"/>
                    </svg>



                </div>


               

             
        </div>

    </div>

    <div v-if="QuestionsAnswered.length>=maxlength" class="max-w-6xl flex  m-0 m-auto justify-center items-center w-full p-4" >

            <div class="controll-btns flex flex-col   items-center w-11/12 lg:w-2/4 ">
                
                <h1 class="px-4 flex justify-center gap-2 mb-4 text-center pt-8 pb-2 text-white" > Félicitations, vous avez voté  toutes les propositions ! </h1>
                <button @click="changePage(3)" class="text-white w-11/12 py-4 mb-6">Voir mes résultats</button>

            </div>
    </div>

</div>  

</template>

<script setup>


const props = defineProps(['data','parentIndex'])
const emit = defineEmits(['sendIndex','sendQuestionsAnswered','sendPage'])




const changePage=(value)=>{
    emit('sendPage',value)
}



const questions=ref({})

const QuestionsAnswered=ref({})

QuestionsAnswered.value=JSON.parse(localStorage.getItem('QuestionsList'))


const { parentIndex } = toRefs(props)

const index=ref(0)


index.value=parentIndex.value




const maxlength=ref(0)

questions.value=props.data




maxlength.value=questions.value.length







const bgColorError=ref('#373737')

const bgColorSucces=ref('#373737')

const bgNeutral=ref('white')


const parties=ref([{
    "NFP":0,
    "RN": 0,
    "EN": 0,
    "LR": 0,    
}])


const array=ref([])


localStorage.getItem('Parties')==null ?  localStorage.setItem('Parties', JSON.stringify(parties.value)) : ""

localStorage.getItem('QuestionsList')==null ?  localStorage.setItem('QuestionsList', JSON.stringify(array.value)) : ""


const RecallQuestionsAnswered=async()=>{
    QuestionsAnswered.value=JSON.parse(localStorage.getItem('QuestionsList'))
    emit('sendQuestionsAnswered',QuestionsAnswered.value)

}


const NextStep=async()=>{

    index.value<maxlength.value ? index.value+=1 : ""
    emit('sendIndex',index.value)
}



const Neutral=async(Obj)=>{

    Obj["Status"] = "Neutral";

    let array = JSON.parse(localStorage.getItem('QuestionsList')) || [];

    array.push(Obj);


    await localStorage.setItem('QuestionsList', JSON.stringify(array));

    NextStep();
    RecallQuestionsAnswered();



}


const Like=async(Obj)=>{

    Obj["Status"] = "Like";




    let Parties = JSON.parse(localStorage.getItem('Parties')) || [];
    let array = JSON.parse(localStorage.getItem('QuestionsList')) || [];


    Obj["Partis en accord"].includes("NFP") ? Parties[0].NFP+=1 : "";
    Obj["Partis en accord"].includes("RN") ? Parties[0].RN+=1: "";
    Obj["Partis en accord"].includes("EN") ? Parties[0].EN+=1 : "";
    Obj["Partis en accord"].includes("LR") ? Parties[0].LR+=1: "";


    
    array.push(Obj);

    await localStorage.setItem('QuestionsList', JSON.stringify(array));
    await localStorage.setItem('Parties', JSON.stringify(Parties));


    NextStep();
    RecallQuestionsAnswered();



}


 
const Dislike=async(Obj)=>{
    Obj["Status"] = "Dislike";
    let array = JSON.parse(localStorage.getItem('QuestionsList')) || [];
    array.push(Obj);
    await localStorage.setItem('QuestionsList', JSON.stringify(array));
    NextStep();
    RecallQuestionsAnswered();

}








const changeColorSucces=async (value)=>{
    bgColorSucces.value=value
    setTimeout(() => {
        bgColorSucces.value = '#373737';
    }, 500);

}

const changeColorError=(value)=>{
    bgColorError.value=value
    setTimeout(() => {
        bgColorError.value = '#373737';
    }, 500);
}

const changeColorNeutral=(value)=>{
    bgNeutral.value=value
    setTimeout(() => {
        bgNeutral.value = 'white';
    }, 500);
}


</script>


<style lang="scss" scoped>
@use "~/assets/styling.scss";

.questions{
    background-color: $secondary;
    color: white;

    .question-card{
    min-height: 50vh;
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