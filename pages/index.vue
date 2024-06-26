<template>
    

    <div class="page-wrapper">


            <!-- <HeroSection/> -->

            <TopBar :parentIndex="index"/>

            <Questions @sendIndex="sendIndex" :parentIndex="index" :data="data" />

            <Footer />




    </div>

</template>


<script setup>

const config = useRuntimeConfig()


const index=ref(1)

const data=ref({})

const sendIndex=(value)=>{
    index.value=value
    console.log("vaue",value)
}



const {data:paramData, execute:paramExecute } = await useFetch(`${config.public.apiBase}/${config.public.baseId}/${config.public.tableIdOrName}`,{

method:'GET',
headers: {
    'Authorization': `Bearer ${config.public.api_Key}`,
    'Content-Type': 'application/json',
},

})


data.value=paramData


console.log("param data",paramData)

console.log("baseId",config.public.baseId)
console.log("tableIdOrName",config.public.tableIdOrName)
console.log("api_Key",config.public.api_Key)




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