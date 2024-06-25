<template>


<div class="max-w-screen-l m-0 m-auto">
    
        <div class="hero-section  flex flex-col h-screen gap-10  justify-center items-center mt-8">
    
            <img class="flex w-4/5  lg:w-1/3 justify-center" src="../public/HeroSectionIllustration.webp">
    
            <div class="controll-btns flex flex-col   items-center w-11/12 lg:w-1/3  ">
    
                <h1 class="px-4  text-center pt-8 pb-2 text-white" >Bienvenue sur <span>trouve ton député</span> </h1>
                <h6 class="text-center px-4 pb-6 text-textWhite100">L'application ultime pour découvrir le parti politique et le candidat qui correspond le mieux à vos valeurs et à vos préoccupations.</h6>
                <button class="text-white w-11/12 py-4 mb-6">Commencer</button>
    
            </div>
    
        </div>




</div>


</template>

<style lang="scss" scoped>
@use "~/assets/styling.scss";

p{
    background-color: $primary  ;
}


.controll-btns{
    border-radius: 2rem;
    background-color: $secondary;
    max-height: 40rem;
    height: fit-content;
    h1{
        font-size: calc(0.7rem + 0.5vw);
        font-family: $P-ExtraBold;
        span {
            font-family: $M-Italic;

        }
    }

    h6{
        font-size: calc(0.5rem + 0.5vw);
        font-family: $P-Regular;
        line-height: 150%;

    }
    button{
    border-radius: 4rem;
    font-family: $P-SemiBold;
    background-color: $primary;
    font-size: calc(0.65rem + 0.5vw);


    
    }
}

</style>