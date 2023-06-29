<template>
    <ion-toolbar>
        <ion-avatar slot="start"> 
          <!-- you can change the logo here -->
            <img src="../assests/nfc-logo.png"/> 
        </ion-avatar>
        <ion-title> Checkout App </ion-title>
       <!--
              v-if="loggedUser != 0, checks if a user is stored in loggedUser
              if yes, then it displays the button
              if not, then isnt
        -->
        <ion-button v-if="loggedUser != 0" slot="end" @click="this.$store.dispatch('userLogout')" class="logout-button"> LOGOUT </ion-button>

    </ion-toolbar>
    
</template>

<script>
import { IonToolbar, IonTitle, IonAvatar, IonButton } from '@ionic/vue';
export default {
  components: {
      IonToolbar ,IonTitle, IonAvatar, IonButton,
  },

  // get the currently logged user 
  computed: {
    loggedUser() {
      return this.$store.getters.getUser;
    },
  }, 

}
</script>

<style scoped>

ion-toolbar{
    --background: var(--ion-color-primary);
    height: 9vh;
    display: flex;
    
}

ion-avatar {
  --border-radius: 0px;
  height: 6vh;
  width: 6vh;
  margin-left: 2vh;
}

ion-title{
    color: var(--ion-color-tertiary);
    font-size: 3.3vh;
    font-weight: 550;
}

.logout-button {
  --background: var( --ion-color-tertiary);
  --background-hover: var(--ion-color-tertiary-shade);
  height: 5vh;
  width: 12vh;
  margin-right: 1.3vh;
  font-size: 1.7vh;
  font-weight: 450;
  color: var(--ion-color-danger);
  --border-radius: 1vh;
  --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

}

</style>
