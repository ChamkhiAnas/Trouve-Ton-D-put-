<template>


    <div class="navbar">
        
            <div class="hero-section max-w-6xl m-0 m-auto flex flex-col  gap-10  justify-center items-center w-full">
        
                <div class=" flex justify-between items-center p-4 w-full">
                    <h1 v-if="pageIndex==1" >Questions</h1>
                    <h1 v-if="pageIndex==4" >A propos</h1>


                    <div v-if="pageIndex==2" class="flex flex-col mt-2">
                        <h1>Réponse</h1>

                        <div class="flex  justify-center gap-2 items-center">
                            <h6>{{Questions.length }} questions répondues / <span> {{maxlength}}</span><span></span></h6>

                            <span class="group relative">
                                <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                    Répondez à un maximum de questions <br> pour avoir le résultat le plus fiable possible. 
                                </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                            </span>
                        </div>
                        <div>
                          
                        </div>


                    </div>


                    <div v-if="pageIndex==3" class="flex flex-col mt-2">
                        <h1>Résultat</h1>

                        <div class="flex  justify-center gap-2 items-center">
                            <h6>Basé sur {{Questions.length }}  questions répondues / <span> {{maxlength}}</span><span></span></h6>

                            <span class="group relative">
                                <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
                                    Répondez à un maximum de questions <br> pour avoir le résultat le plus fiable possible. 
                                </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
                            </span>
                        </div>
                        <div>
                          
                        </div>


                    </div>



                    <div v-if="pageIndex==1 || pageIndex==2" class="radialProgressBar" 

                    :class="{
                    'progress-0': parentIndex >= 0,
                    'progress-10': parentIndex >= 5,
                    'progress-20': parentIndex >= 20,
                    'progress-30': parentIndex >= 30,
                    'progress-40': parentIndex >= 40,
                    'progress-50': parentIndex >= 50,
                    'progress-60': parentIndex >= 60,
                    'progress-70': parentIndex >= 70,
                    'progress-80': parentIndex >= 80,
                    'progress-90': parentIndex >= 90,
                    'progress-100': parentIndex >= 100


                    }"
                        
                  
                    >
                        <div v-if="pageIndex==1" class="overlay flex justify-center gap-1 items-center"><span>{{parentIndex }} sur</span> {{maxlength}}</div>
                        <div v-if="pageIndex==2" class="overlay réponse flex justify-center gap-1 items-center">{{Questions.length }} </div>

                    </div>


                </div>


               
            </div>
    
    
    
    
    </div>
    
    
</template>


<script setup>

const props = defineProps(['parentIndex','maxlength','pageIndex'])

const {parentIndex} = toRefs(props)

const {maxlength} = toRefs(props)

const {pageIndex} =  toRefs(props)



const Questions=ref({})

Questions.value=JSON.parse(localStorage.getItem('QuestionsList')) || [];








</script>



    
<style lang="scss" scoped>
@use "~/assets/styling.scss";
  
    
    .navbar{
        background-color: $primary;
        background-image: url("../public/Pattern.webp");
        background-position: center;
        position: relative;
        max-height: 8rem;

        background-blend-mode: luminosity;

    }

    .navbar:before{
        content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-blend-mode: luminosity;
            background: rgba(230, 37, 91, 0.12); /* #E6255B with 12% opacity */
            pointer-events: none; /* ensures the overlay doesn't interfere with interactions */
    }

    h1{
        font-size: calc(1.3rem + 0.3vw);
        font-family: $P-ExtraBold;
        color: white;

    }
    h6{

        font-family: $P-Medium;
        font-size:calc(0.8rem + 0.2vw);
        color: white;
        span {
        font-family: $M-Italic;
        }
    }

    .radialProgressBar {
    border-radius: 50%;
    width: 5.3rem;
    height: 5.3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: transparent;
    font-size: calc(0.7rem + 0.1vw);
    font-family: $P-ExtraBold;
    color: white;



    span {

        font-family: $M-Italic;


    }

    .réponse{
    font-size: calc(1.2rem + 0.1vw);

    }
    }

    .radialProgressBar .overlay {
      border-radius: 50%;
      width: 4.5rem;
      height: 4.5rem;
      margin: auto;
      background: $primary;
      text-align: center;
    }

  
    .progress-0 {
    background-image: -webkit-linear-gradient(left, #b6b6b6 50%, transparent 50%), -webkit-linear-gradient(left, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(90deg, #b6b6b6 50%, transparent 50%), linear-gradient(90deg, white 50%, #b6b6b6 50%);
    }

 

    .progress-10 {
        background-image: linear-gradient(54deg, #b6b6b6 50%, transparent 50%), linear-gradient(90deg, #ffffff 50%, #b6b6b6 50%);

    }

    .progress-20 {
    background-image: -webkit-linear-gradient(72deg, #b6b6b6 50%, transparent 50%), -webkit-linear-gradient(left, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(18deg, #b6b6b6 50%, transparent 50%), linear-gradient(90deg, white 50%, #b6b6b6 50%);
    }

    .progress-30 {
    background-image: -webkit-linear-gradient(108deg, #b6b6b6 50%, transparent 50%), -webkit-linear-gradient(left, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(-18deg, #b6b6b6 50%, transparent 50%), linear-gradient(90deg, white 50%, #b6b6b6 50%);
    }

    .progress-40 {
    background-image: -webkit-linear-gradient(144deg, #b6b6b6 50%, transparent 50%), -webkit-linear-gradient(left, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(-54deg, #b6b6b6 50%, transparent 50%), linear-gradient(90deg, white 50%, #b6b6b6 50%);
    }

    .progress-50 {
    background-image: -webkit-linear-gradient(right, #b6b6b6 50%, transparent 50%), -webkit-linear-gradient(left, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(-90deg, #b6b6b6 50%, transparent 50%), linear-gradient(90deg, white 50%, #b6b6b6 50%);
    }

    .progress-60 {
    background-image: -webkit-linear-gradient(left, white 50%, transparent 50%), -webkit-linear-gradient(36deg, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(90deg, white 50%, transparent 50%), linear-gradient(54deg, white 50%, #b6b6b6 50%);
    }

    .progress-70 {
    background-image: -webkit-linear-gradient(left, white 50%, transparent 50%), -webkit-linear-gradient(72deg, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(90deg, white 50%, transparent 50%), linear-gradient(18deg, white 50%, #b6b6b6 50%);
    }

    .progress-80 {
    background-image: -webkit-linear-gradient(left, white 50%, transparent 50%), -webkit-linear-gradient(108deg, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(90deg, white 50%, transparent 50%), linear-gradient(-18deg, white 50%, #b6b6b6 50%);
    }

    .progress-90 {
    background-image: -webkit-linear-gradient(left, white 50%, transparent 50%), -webkit-linear-gradient(144deg, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(90deg, white 50%, transparent 50%), linear-gradient(-54deg, white 50%, #b6b6b6 50%);
    }

    .progress-100 {
    background-image: -webkit-linear-gradient(left, white 50%, transparent 50%), -webkit-linear-gradient(right, white 50%, #b6b6b6 50%);
    background-image: linear-gradient(90deg, white 50%, transparent 50%), linear-gradient(-90deg, white 50%, #b6b6b6 50%);
    }


</style>