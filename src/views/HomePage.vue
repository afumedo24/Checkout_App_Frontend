<template>
  <ion-page>
    <ion-header> 
        
    </ion-header>
    <ion-content>
      <div id="container">
       <p> HomePage </p>  
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonHeader, IonContent, IonPage } from '@ionic/vue';


export default {
  components: {
    IonContent,
    IonHeader,
    IonPage
  },
}
</script>

<style scoped>
.container{
  margin-top: 400px;
}
</style>
