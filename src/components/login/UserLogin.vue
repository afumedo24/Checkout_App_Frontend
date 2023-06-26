<template>
  <ion-card-content  v-if="loggedUser != 0"> 
      <ion-list  class="user-text">
          <ion-item>
                <h2 class="waviy">
                  <span style="--i:1"> Welcome </span> <span style="--i:2"> {{ loggedUser.FullName }}</span>
                </h2>
          </ion-item>
      </ion-list>
  </ion-card-content>



  <ion-card class="user-list"> <!-- v-if="!loggedUser" damit das Einloggen Card  verschwindet  -->
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
      <ion-button @click="signUp" class="borrow-button"> <h2 class="subtitle-button" >LOGIN</h2> </ion-button>
    </ion-card-content>
  </ion-card>
  
  <ion-button @click="signOut" class="logout-button"> <h2 class="subtitle-button">LOGOUT</h2> </ion-button>
                
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
    
    signUp() {   
      this.$store.dispatch('userLogIn', this.userID)
    },

    signOut()
    {   
      this.$store.commit('userLogIn', 0)
    }
  }
};
  
  
  </script>
  
  <style scoped>
  .user-list {
    display: block;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 60%;
    margin-top: 15vh;
    margin-left: 20%;
    background-color: #aaa8a8;
    border-radius: 20px;
    text-align: center;
    
  }
  .user-text {
    display: block;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 60%;
    margin-top: 12%;
    margin-left: 20%;
    background-color: #aaa8a8;
    border-radius: 4.5vh;
    text-align: center;
  
    
  }
  .user-item {
    padding: 10px;
    display: block;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 90%;
    height: 7vh;
    margin-top: 2%;
    margin-left: 5%;
    color: --ion-color-medium-shade;
    border-radius: 20px;
    
   
  }
  
  .device-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .status-green{
  color: var(--ion-color-success);
  }
  .status-red{
    color: var(--ion-color-danger);
  }
  .borrow-button{
    margin-top: 3%;
    margin-bottom: 3%;
    --background: var( --ion-color-secondary-shade);
    height: 4.5vh;
    width: 5vw;
    
  }
  .logout-button{
    --background: var( --ion-color-danger);
    height: 4.5vh;
    width: 9.5vh;
    margin-right: auto;
    margin-left: 5%;
    margin-top: 5%;
  }
  .title{
    font-size: 2vw;
    font-weight: bolder;
    margin-left: center;
    margin-top: 2%;
    height: 5vh;
  }
  .subtitle{
    font-size: 1.1vw;
    color: var( --ion-color-danger);
    margin-left: center;
  }

  .subtitle-button{

    font-size: 1.1vw;
    margin-left: center;

  }
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  color: --ion-color-success;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(.2s * var(--i))
}
@keyframes flip {
  0%,80% {
    transform: rotateY(360deg) 
  }
}
  
  
  
  </style>