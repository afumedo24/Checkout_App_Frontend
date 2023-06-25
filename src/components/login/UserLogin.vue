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
      <ion-card-title class="title">Zum Konto Einlogen</ion-card-title>
      <ion-card-subtitle class="subtitle">Bitte NFC-TAG scannen!</ion-card-subtitle>
    </ion-card-header>
          
    <ion-card-content>
      <ion-list  class="user-item">
        <ion-item>
          <ion-input v-model="userID" labelPlacement="standard" placeholder="User" ></ion-input>
        </ion-item>
      </ion-list>
    </ion-card-content>
                    
    <ion-card-content>
      <ion-button @click="signUp" class="borrow-button"> LOGIN </ion-button>
    </ion-card-content>
  </ion-card>
  
  <ion-button @click="signOut" class="logout-button"> LOGOUT </ion-button>
                
</template>
  
  <script>
  import { IonContent, IonPage,IonModal, IonHeader,IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup} from '@ionic/vue';
  import axios from 'axios';
  
  export default {
  components: {
    IonPage, IonContent, IonModal, IonHeader, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup
  },
     
  data()
  {
    const userID = '';
      return{
        userID,
        loggedUser: []
      }
  },
  methods: {
    async signUp()
    {   
  
      const apiUrl = 'http://localhost:8300/api/users/' + this.userID; 

      await axios.get(apiUrl)
        .then((response) => {
        this.loggedUser = response.data;
        console.log('User Data:', this.loggedUser);
      })
        .catch((err) => {
        console.error(err.message);
        console.error(err); 
      });  
    },
   
    async signOut()
    {   
        this.loggedUser = 0;

      
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
    margin-top: 10%;
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
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    color: #D9D9D9;
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
      
    --background: var( --ion-color-secondary-shade);
    height: 4.5vh;
    width: 9.5vh;
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
    font-size: 28px;
    font-weight: bolder;
    margin-left: 10px;
  }
  .subtitle{
    font-size: 18px;
    color: var( --ion-color-danger);
    margin-left: 10px;

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