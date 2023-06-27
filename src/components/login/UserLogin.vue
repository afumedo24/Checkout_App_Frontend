<template>
  <ion-card-content  v-if="loggedUser != 0"> 
      <ion-list  class="user-login">
          <ion-item>
                <h2 class="waviy">
                  <span style="--i:1;" > Welcome  {{ loggedUser.FullName }}</span>
                </h2>
          </ion-item>
      </ion-list>
  </ion-card-content>



  <ion-card class="user-list" v-else> <!-- v-if="!loggedUser" damit das Einloggen Card  verschwindet  -->
    <ion-card-header>
      <ion-card-title class="title">Zum Konto Einlogen
        <ion-card-subtitle class="subtitle">Bitte NFC-TAG scannen!</ion-card-subtitle>
      </ion-card-title>
    </ion-card-header>
          
    <ion-card-content>
      <ion-list  class="user-item" >
        <ion-item>
          <ion-input v-model="userID" labelPlacement="standard" placeholder="User"></ion-input>
        </ion-item>
      </ion-list>
    </ion-card-content>
                    
    <ion-card-content>
      <ion-button @click="signUp" class="login-button"> <h2 class="subtitle-button"  >LOGIN</h2> </ion-button>
    </ion-card-content>
  </ion-card>
  
  <!--ion-button @click="signOut" class="logout-button"> <h2 class="subtitle-button">LOGOUT</h2> </ion-button-->
                
</template>
  
  <script>
import { IonContent, IonPage,IonModal, IonHeader,IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup} from '@ionic/vue';
  
  export default {
  components: {
    IonPage, IonContent, IonModal, IonHeader, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup
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
    
    signOut()
    {   
      this.$store.commit('userLogIn', 0);
      localStorage.removeItem('token');
    }
  }
};
  
  
  </script>
  
  <style scoped>
  .user-list {
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 95%;
  margin-top: 11vh;
  margin-left: 2.5%;
  background-color: #D9D9D9;
  border-radius: 1vh 1vh 0 0;
  text-align: center;
  
}
.user-item {
    justify-content: flex-start;
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    color: #D9D9D9;
    height: 7vh;

   
  }
.user-login {
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 95%;
  margin-top: 20vh;
  margin-left: 2.5%;
  background-color: #D9D9D9;
  border-radius: 1vh 1vh 0 0;
  text-align: center;
  
}
.title{
  font-size: 4vh;
  font-weight: bold;
  margin-left: 2vh;
  margin-bottom: 4vh;
  text-align: center;
  color: var(--ion-color-secondary-contrast);
}
.subtitle{
  font-size: 3vh;
  font-weight: bold;
  margin-left: 2vh;
  margin-bottom: 4vh;
  text-align: center;
  color: var(--ion-color-danger);
}

.login-button {
    --background: var( --ion-color-secondary-shade);
    --background-hover: var(--ion-color-secondary-shade);
    height: 6.5vh;
    width: 14.5vh;
    
    font-size: 2.4vh;
    font-weight: 700;
    color: white;
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
  }
  


.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  color: blue;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(.2s * var(--i));
  
}

@keyframes flip {
  0%,80% {
    transform: rotateY(360deg) 
  }
}
  
  
  
  </style>