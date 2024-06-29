<template>
    

    <div class="page-wrapper">


            <HeroSection v-if="page==0" @sendPage="sendPage" />

            <TopBar :key="questionsAnswered" v-if="page!==0" :pageIndex="page" :parentIndex="index" :maxlength="data.length"/>

            <Questions v-if="page==1" @sendPage="sendPage"  @sendIndex="sendIndex" @sendQuestionsAnswered="sendQuestionsAnswered" :parentIndex="index" :data="data" />

            <QuestionsList  v-if="page==2"/>

            <Resultats :key="index" :maxlength="data.length"  v-if="page==3"/>

            <Apropos v-if="page==4"/>

            <Footer v-if="page!==0" :key="questionsAnswered+'----'+page" @sendPage="sendPage" />




    </div>

</template>


<script setup>

const config = useRuntimeConfig()


const index=ref(0)
const questionsAnswered=ref([])




const page=ref(0)




localStorage.getItem('index')==null ? localStorage.setItem('index', 1) : "";

localStorage.getItem('Page')==null ? localStorage.setItem('Page', 0) : "";

localStorage.getItem('QuestionsList')==null ? localStorage.setItem('QuestionsList', JSON.stringify([])) : "";









page.value=parseInt(localStorage.getItem('Page'))



index.value=parseInt(localStorage.getItem('index'))


console.log("index storage",localStorage.getItem('index'))

console.log("index value",index.value)



const data=ref({})


const sendPage=(value)=>{
  page.value=value
  localStorage.setItem('Page', value)

}

const sendIndex=(value)=>{
    index.value=value
    localStorage.setItem('index', index.value)
}


const sendQuestionsAnswered=(value)=>{
  questionsAnswered.value=value

}



const {data:paramData, execute:paramExecute } = await useFetch(`${config.public.apiBase}/${config.public.baseId}/${config.public.tableIdOrName}`,{

method:'GET',
headers: {
    'Authorization': `Bearer ${config.public.api_Key}`,
    'Content-Type': 'application/json',
},

})


data.value=paramData.value.records


data.value=data.value.map(item => item.fields);

const sortedRecords = data.value.sort((a, b) => a.ID - b.ID);

data.value=sortedRecords  

console.log("Sorted records:", data.value);






</script>


<style lang="scss" scoped>
@use "~/assets/styling.scss";


.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-wrapper > * {
  flex-grow: 1;
}

.page-wrapper .Footer {
  margin-top: auto;
}   



</style>