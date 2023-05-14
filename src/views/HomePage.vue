<template>
  <ion-page>
    <ion-header> 
        <app-header> </app-header>
    </ion-header>
    <ion-content>
      <div id="container">
       <p> HomePage </p>  
      <scanner> </scanner>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonHeader, IonContent, IonPage, IonToolbar } from '@ionic/vue';
import AppHeader from '../components/Header.vue';
import Scanner from '../components/Scanner.vue';


export default {
  components: {
    IonContent,
    IonHeader,
    IonPage,
    AppHeader,
    IonToolbar,
    Scanner
},

}
</script>

<style scoped>

</style>
