<template>
  <ion-page>
    <ion-header>
      <app-header> </app-header>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
       <p> ListPage </p>      
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonHeader } from '@ionic/vue';
import AppHeader from '../components/Header.vue';


export default {
  components: {
    IonContent,
    IonPage,
    IonHeader,
    AppHeader
  },

}
</script>

