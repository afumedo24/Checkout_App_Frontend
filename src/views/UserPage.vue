<template>
  <ion-page>
      <ion-content>
          <user-login> 
            
          </user-login>
      </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage,IonModal, IonHeader} from '@ionic/vue';
import UserLogin from '@/components/login/UserLogin.vue';

export default {
components: {
  IonPage, IonContent, IonModal, IonHeader, UserLogin
},
};


</script>

<style>

</style>

