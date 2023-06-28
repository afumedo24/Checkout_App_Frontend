<template>
    <ion-page>
        <ion-content>
           <borrow-form> </borrow-form>
        </ion-content>
      </ion-page>
  </template>
  
  <script>
  import { IonContent, IonPage } from '@ionic/vue';
  import BorrowForm from '../components/form/Form.vue'
  
  export default {
    components: {
        IonPage, IonContent, BorrowForm
    },
    data() {
    },
  };
  
  
  </script>
  
  <style scoped>
  </style>
  
  