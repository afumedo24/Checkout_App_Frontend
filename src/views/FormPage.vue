<template>
    <ion-page>
        <ion-content>
          <!-- use the form component -->
           <borrow-form> </borrow-form>
        </ion-content>
      </ion-page>
  </template>
  
  <script>
  import { IonContent, IonPage } from '@ionic/vue';
  
  // import the form component
  import BorrowForm from '../components/form/Form.vue'
  
  export default {
    components: {
        IonPage, IonContent, BorrowForm
    },
  };
  </script>
  
  <style scoped>

  </style>
  




  
  