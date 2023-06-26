<template>
    <ion-card-content  v-if="loggedUser != 0"> 
      <ion-list  class="user-text">
          <ion-item>
                <h2 class="waviy">
                  <span style="--i:1"> Welcome </span> <span style="--i:2"> {{ loggedUser.FullName }}</span>
                </h2>
          </ion-item>
          <ion-button @click="signOut" class="logout-button"> <h2 class="subtitle-button">LOGOUT</h2> </ion-button>
      </ion-list>
  </ion-card-content>
  </template>
  
  <script>
  import { IonContent, IonPage,IonModal, IonHeader,IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup} from '@ionic/vue';
  import AppHeader from '../components/Header.vue';
  import axios from 'axios';
  import UserLogin from '../components/login/UserLogin.vue'
  
  export default {
  components: {
    AppHeader, IonPage, IonContent, IonModal, IonHeader, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup
  },
     
      data()
      {
        data()
  {
    return{
      userID: '',
    }
  }

  computed: {
    loggedUser() {
      return this.$store.getters.getUser;
    }
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
    background-color: #6a6a6a;
    border-radius: 20px;
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
  .title{
    font-size: 28px;
    font-weight: bolder;
    margin-left: 10px;
  }
  
  
  
  </style>
  
  