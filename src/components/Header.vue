<template>
    <ion-toolbar>
        <ion-avatar slot="start"> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/NFC_logo.svg/2000px-NFC_logo.svg.png"/>
        </ion-avatar>
        <ion-title> Checkout App </ion-title>
        <ion-button @click="signOut" class="logout-button"> <h2 class="subtitle-button">LOGOUT</h2> </ion-button>
    </ion-toolbar>
</template>

<script>
import { IonToolbar, IonTitle, IonAvatar, IonButton } from '@ionic/vue';
export default {
components: {
    IonToolbar ,IonTitle, IonAvatar, IonButton
},
   
data()
  {
    return{
      userID: '',
    }
  },

  computed: {
    loggedUser() {
      return this.$store.getters.getUser;
    },
  },

  methods: {
    
    signUp() {   
      this.$store.dispatch('userLogIn', this.userID)
    },

    signOut()
    {   
      this.$store.commit('userLogIn', 0)
    }
  }
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
    color: white;
    font-size: 3.3vh;
    font-weight: 550;
}
.login-button {
    --background: var( --ion-color-danger);
    --background-hover: var(--ion-color-secondary-shade);
    height: 6.5vh;
    width: 14.5vh;
    position: absolute;
    font-size: 2.4vh;
    font-weight: 700;
    color: var(--ion-color-danger);
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
  }

</style>
