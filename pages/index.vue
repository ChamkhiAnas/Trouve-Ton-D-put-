<template>
    

    <div class="page-wrapper">


            <HeroSection v-if="page==0" @sendPage="sendPage" />

            <TopBar class="fixed z-20" :key="questionsAnswered" v-if="page!==0" :pageIndex="page" :parentIndex="index" :maxlength="data.length"/>

            <Questions class="pb-10 mt-24 relative  z-10 " v-if="page==1" @sendPage="sendPage"  @sendIndex="sendIndex" @sendQuestionsAnswered="sendQuestionsAnswered" :parentIndex="index" :data="data" />

            <QuestionsList  class="relative mt-24  z-10"   v-if="page==2"/>

            <Resultats class="mb-20 relative mt-24 z-10"  :key="index" :maxlength="data.length"  v-if="page==3"/>

            <Apropos class="relative  z-10 mt-20 mb-20" v-if="page==4"/>

            <Footer class="fixed z-20" v-if="page!==0" :key="questionsAnswered+'----'+page" @sendPage="sendPage" />




    </div>

</template>


<script setup>

const config = useRuntimeConfig()


const index=ref(0)
const questionsAnswered=ref([])




const page=ref(0)




localStorage.getItem('index')==null ? localStorage.setItem('index', 1) : "";

localStorage.getItem('Page')==null ? localStorage.setItem('Page', 0) : "";










page.value=parseInt(localStorage.getItem('Page'))



index.value=parseInt(localStorage.getItem('index'))





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




let grouped = {};


data.value.forEach(item => {
  let theme = item['Thème'];
  if (!grouped[theme]) {
    grouped[theme] = [];
  }
  grouped[theme].push(item);
});



data.value = Object.keys(grouped).map(theme => ({
  [theme]: grouped[theme] 
}));


data.value.forEach(item=>{
  item["answered"]=0
  item["maxLength"]=item[Object.keys(item)[0]].length
})



localStorage.getItem('QuestionsList')==null ? localStorage.setItem('QuestionsList', JSON.stringify([])) : "";






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