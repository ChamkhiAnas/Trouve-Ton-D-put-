<template>


    <div class="navbar">
        
            <div class="hero-section max-w-6xl m-0 m-auto flex flex-col  gap-10  justify-center items-center w-full">
        
                <div class=" flex justify-between items-center p-4 w-full">
                    <h1>Questions</h1>

                    <div class="radialProgressBar" 

                    :class="{
                    'progress-10': parentIndex === 1,
                    'progress-20': parentIndex === 2,
                    'progress-30': parentIndex === 3,
                    'progress-40': parentIndex === 4,
                    'progress-50': parentIndex === 5,
                    'progress-60': parentIndex === 6,
                    'progress-70': parentIndex === 7,
                    'progress-80': parentIndex === 8,
                    'progress-90': parentIndex === 9,
                    'progress-100': parentIndex === 10


                    }"
                        
                  
                    >
                        <div class="overlay flex justify-center gap-1 items-center"><span>{{parentIndex }} sur</span> 10</div>
                    </div>


                </div>
               
            </div>
    
    
    
    
    </div>
    
    
</template>


<script setup>

const props = defineProps(['parentIndex'])

const {parentIndex} = toRefs(props)





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

    .radialProgressBar {
    border-radius: 50%;
    width: 4.3rem;
    height: 4.3rem;
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
    }

    .radialProgressBar .overlay {
      border-radius: 50%;
      width: 3.5rem;
      height: 3.5rem;
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