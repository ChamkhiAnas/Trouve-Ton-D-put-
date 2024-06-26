<template>
    

    <div class="page-wrapper">


        <!-- <HeroSection/> -->

        <TopBar/>

        <Question/>

        <Footer/>




    </div>

</template>


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