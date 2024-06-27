<template>

    <div class="footer-section flex">

        <div class=" max-w-4xl m-0 m-auto flex flex-col  gap-10  justify-center items-center w-full">
        


            <ul class="flex sm:gap-2  footer-items justify-between items-center w-full">
                
                <li @click="changeIndex(0)" class="flex cursor-pointer flex-col items-center justify-center">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  :class="{ 'active-item': index==0 }" fill-rule="evenodd" clip-rule="evenodd" d="M22.0999 12C22.0999 16.6392 17.8015 20.4 12.4999 20.4C10.796 20.4071 9.11537 20.0038 7.6003 19.224L2.8999 20.4L4.5055 16.6524C3.4915 15.3204 2.8999 13.7208 2.8999 12C2.8999 7.36078 7.1983 3.59998 12.4999 3.59998C17.8015 3.59998 22.0999 7.36078 22.0999 12ZM8.8999 10.8H6.4999V13.2H8.8999V10.8ZM18.4999 10.8H16.0999V13.2H18.4999V10.8ZM11.2999 10.8H13.6999V13.2H11.2999V10.8Z" fill="#D9D9D9"/>
                    </svg>
                    <span  :class="{ 'active-item': index==0 }">Question</span>
                </li>
                <li @click="changeIndex(1)" class="flex cursor-pointer flex-col items-center justify-center">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  :class="{ 'active-item': index==1 }"     d="M3 6.25C3 5.58696 3.26339 4.95107 3.73223 4.48223C4.20107 4.01339 4.83696 3.75 5.5 3.75H14.25C14.913 3.75 15.5489 4.01339 16.0178 4.48223C16.4866 4.95107 16.75 5.58696 16.75 6.25V11.25C16.75 11.913 16.4866 12.5489 16.0178 13.0178C15.5489 13.4866 14.913 13.75 14.25 13.75H11.75L8 17.5V13.75H5.5C4.83696 13.75 4.20107 13.4866 3.73223 13.0178C3.26339 12.5489 3 11.913 3 11.25V6.25Z" fill="#A8A8AB"/>
                        <path :class="{ 'active-item': index==1 }"  d="M19.2501 8.75V11.25C19.2501 12.5761 18.7234 13.8479 17.7857 14.7855C16.848 15.7232 15.5762 16.25 14.2501 16.25H12.7851L10.5776 18.4587C10.9276 18.645 11.3264 18.75 11.7501 18.75H14.2501L18.0001 22.5V18.75H20.5001C21.1632 18.75 21.7991 18.4866 22.2679 18.0178C22.7367 17.5489 23.0001 16.913 23.0001 16.25V11.25C23.0001 10.587 22.7367 9.95107 22.2679 9.48223C21.7991 9.01339 21.1632 8.75 20.5001 8.75H19.2501Z" fill="#A8A8AB"/>
                    </svg>


                    <span :class="{ 'active-item': index==1 }" >Réponse (8)</span>

                </li>
                <li @click="changeIndex(2)"  class="flex cursor-pointer flex-col items-center justify-center">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path :class="{ 'active-item': index==2 }"  d="M11.75 6.00501C10.3871 5.34146 8.89081 4.99773 7.375 5.00001C5.80625 5.00001 4.32125 5.36251 3 6.00501V18.505C4.36287 17.8415 5.8592 17.4978 7.375 17.5C9.46125 17.5 11.3975 18.1375 13 19.2313C14.6576 18.1003 16.6183 17.4968 18.625 17.5C20.1938 17.5 21.6787 17.8625 23 18.505V6.00501C21.6371 5.34146 20.1408 4.99773 18.625 5.00001C17.0562 5.00001 15.5712 5.36251 14.25 6.00501V15C14.25 15.3315 14.1183 15.6495 13.8839 15.8839C13.6495 16.1183 13.3315 16.25 13 16.25C12.6685 16.25 12.3505 16.1183 12.1161 15.8839C11.8817 15.6495 11.75 15.3315 11.75 15V6.00501Z" fill="#A8A8AB"/>
                    </svg>

                    <span :class="{ 'active-item': index==2 }" >Résultat</span>

                </li>
                <li @click="changeIndex(3)"  class="flex cursor-pointer flex-col items-center justify-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="{ 'active-item': index==3 }" fill-rule="evenodd" clip-rule="evenodd" d="M22.5 12.5C22.5 15.1522 21.4464 17.6957 19.5711 19.5711C17.6957 21.4464 15.1522 22.5 12.5 22.5C9.84784 22.5 7.3043 21.4464 5.42893 19.5711C3.55357 17.6957 2.5 15.1522 2.5 12.5C2.5 9.84784 3.55357 7.3043 5.42893 5.42893C7.3043 3.55357 9.84784 2.5 12.5 2.5C15.1522 2.5 17.6957 3.55357 19.5711 5.42893C21.4464 7.3043 22.5 9.84784 22.5 12.5ZM13.75 17.5C13.75 17.8315 13.6183 18.1495 13.3839 18.3839C13.1495 18.6183 12.8315 18.75 12.5 18.75C12.1685 18.75 11.8505 18.6183 11.6161 18.3839C11.3817 18.1495 11.25 17.8315 11.25 17.5C11.25 17.1685 11.3817 16.8505 11.6161 16.6161C11.8505 16.3817 12.1685 16.25 12.5 16.25C12.8315 16.25 13.1495 16.3817 13.3839 16.6161C13.6183 16.8505 13.75 17.1685 13.75 17.5ZM12.5 6.25C12.1685 6.25 11.8505 6.3817 11.6161 6.61612C11.3817 6.85054 11.25 7.16848 11.25 7.5V12.5C11.25 12.8315 11.3817 13.1495 11.6161 13.3839C11.8505 13.6183 12.1685 13.75 12.5 13.75C12.8315 13.75 13.1495 13.6183 13.3839 13.3839C13.6183 13.1495 13.75 12.8315 13.75 12.5V7.5C13.75 7.16848 13.6183 6.85054 13.3839 6.61612C13.1495 6.3817 12.8315 6.25 12.5 6.25Z" fill="#A8A8AB"/>
                    </svg>

                    <span :class="{ 'active-item': index==3 }">A propos</span>

                </li>
            </ul>

           

       
    </div>


        
    </div>

</template>



<script setup>

const index=ref(0)
const emit=defineEmits(['sendIndex'])
const changeIndex=(value)=>{
    index.value=value
    emit('sendIndex',value)
}





</script>


<style lang="scss" scoped>
@use "~/assets/styling.scss";

.footer-section{
  background-color: $forground;
  bottom: 0;
  width: 100%;
  max-height: 5rem;
  padding: 20px; /* Adjust padding as needed */
}

.footer-items{
    font-family: $P-Regular;
    color: $text-white-100;
    font-size:calc(0.8rem + 0.1vw);
}


.active-item{
    fill: white !important;
    color: white !important;

}
</style>