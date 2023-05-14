<template>
    <ion-datetime></ion-datetime>
    <ion-item>
  <ion-input label="Floating Input" label-placement="floating" placeholder="Enter text"></ion-input>
    </ion-item>
  </template>
  
  <script>
    import { IonDatetime, IonItem } from '@ionic/vue';
  
    export default defineComponent({
      components: { IonDatetime, IonItem },
    });
  </script>