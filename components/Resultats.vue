<template>
        <div class="resultat-wrapper  relative">

            

            <div  v-for="(obj, index) in resultats" class="resultat-card relative mb-8 w-11/12  max-w-6xl  min-h-28 m-0 m-auto mt-8">

                <div class="logo-circle ml-4 pt-6">

                    <div v-if="obj.key=='NFP'" class="logo" style="background-image: url(/NFP.png);"></div>
                    <div v-if="obj.key=='RN'" class="logo" style="background-image: url(/RN.svg);"></div>
                    <div v-if="obj.key=='EN'" class="logo" style="background-image: url(/en.png);background-size: cover"></div>
                    <div v-if="obj.key=='LR'" class="logo" style="background-image: url(/LR.svg);"></div>


                </div>
                <h1 class="px-4  pt-4 pb-0">
                {{ obj.key === 'NFP' ? 'Nouveau Front Populaire' :
                obj.key === 'RN' ? 'Rassemblement National' :
                obj.key === 'EN' ? 'Ensemble Pour La République' :
                obj.key === 'LR' ? 'Les Républicains' : '' }}
                </h1>
                <h4 class="px-4 ">{{obj.value}} points sur {{maxlength}} possibles  <span>({{ Math.floor(obj.value/maxlength * maxlength) }}%)</span></h4>

                <div class="resultat rounded-xl px-4 pt-4">
                    <div class="bg-forground rounded-xl">
                        <div class="bg-primary rounded-xl"  :style="{ height: '18px', width: obj.value+'%'}"></div>
                    </div><br>
                </div>

                <div class="resultat-btns flex flex-wrap gap-2 px-4 pb-6">
                    <button v-if="obj.key!=='LR'" @click="Download(obj.key)" class="download-btn cursor-pointer px-6 py-2 ">
                        <label class="cursor-pointer">Télécharger le programme</label>
                    </button>
                    <button @click="Visit(obj.key)" class="site-btn flex flex-wrap  justify-center items-center  gap-3 cursor-pointer px-6 py-2 ">
                        <label class="cursor-pointer">Visitez le site officiel</label>
                        <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_799_713)">
                            <circle cx="8" cy="8" r="6" fill="black" fill-opacity="0.2"/>
                            <circle cx="8" cy="8" r="7" stroke="white" stroke-opacity="0.2" stroke-width="2"/>
                            </g>
                            <path d="M7.10395 6C6.87535 6 6.69003 6.18522 6.68999 6.41372C6.68996 6.64228 6.8753 6.82759 7.10395 6.82759H8.58823L6.12124 9.29361C5.95959 9.45521 5.95959 9.71721 6.12124 9.8788C6.2829 10.0404 6.54501 10.0404 6.70666 9.8788L9.17314 7.41329L9.17323 8.89714C9.17324 9.12535 9.35929 9.31034 9.58759 9.31034C9.81589 9.31034 10 9.12534 10 8.89712V6.41379C10 6.18526 9.81467 6 9.58605 6H7.10395Z" fill="white"/>
                            <defs>
                            <filter id="filter0_b_799_713" x="-8" y="-8" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_799_713"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_799_713" result="shape"/>
                            </filter>
                            </defs>
                        </svg>

                    </button>
                </div>

            </div>

        </div>

</template>

<script setup>
const props = defineProps(['maxlength'])

const {maxlength} = toRefs(props)

const resultats=ref([])

localStorage.getItem('Parties')!=null ? resultats.value=JSON.parse(localStorage.getItem('Parties'))[0] : "";


resultats.value= Object.entries(resultats.value).map(([key, value]) => ({ key, value }));

resultats.value=resultats.value.sort((a, b) => b.value - a.value);




const Visit=(index)=>{
    index === 'NFP' ?   window.open('https://www.nouveaufrontpopulaire.fr', '_blank') :
    index === 'RN' ?  window.open('https://rassemblementnational.fr', '_blank') :
    index === 'EN' ? window.open('https://ensemble-2024.fr/', '_blank') :
    index === 'LR' ? window.open('https://republicains.fr', '_blank')  : '' 
}


const Download=(index)=>{
    index === 'NFP' ?   window.open('https://www.nouveaufrontpopulaire.fr/programme', '_blank') :
    index === 'RN' ?  window.open('https://rassemblementnational.fr/documents/202406-programme.pdf', '_blank') :
    index === 'EN' ? window.open('https://ensmbl.fr/notre-projet/', '_blank') :
    index === 'LR' ? window.open('https://republicains.fr', '_blank')  : '' 
}







</script>

<style lang="scss" scoped>
@use "~/assets/styling.scss";

.logo-circle{
  
}
.logo{
    width: 5rem;
    height: 5rem;
    background-color: white;
    border: 3px solid #4E4E4E;
    border-radius: 0.3rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; /* Center the image */
}
.resultat-wrapper{
    background-color: $secondary;
    height: 60vh;
    position: relative;
    overflow-x:hidden;

}

.resultat-card{

    background-color: $forground;
    border-radius:1rem;
    h1{
        color: white;
        font-family: $P-Bold;
        font-size: calc(1.1rem + 0.2vw )
    }
    h4{
        color: $text-white-100;
        font-family: $P-Regular;
        font-size: calc(0.9rem + 0.2vw );
        span {
        font-family: $P-Bold !important;
        font-size: calc(1rem + 0.1vw ) !important;


        }

       

    }


}

.resultat-btns{
    color: white;
    font-family: $P-Regular;


    .download-btn{
        background-color: $primary;
        border-radius:0.3rem;


    }
    .site-btn{
        background-color: $secondary;
        border:3px solid #4E4E4E;
        border-radius:0.3rem;



    }
}

</style>

