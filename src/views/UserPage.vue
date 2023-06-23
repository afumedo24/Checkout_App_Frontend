<template>
  <ion-page>
      <ion-content >
              <ion-card class="user-list">
                  <ion-card-header class="title" >
                      <ion-card-title >Zum Konto Einlogen</ion-card-title>
                      <ion-card-subtitle style="color: red">Bitte NFC-TAG scannen!</ion-card-subtitle>
                  </ion-card-header>
                 

                  <ion-card-content>
                      <ion-list  class="user-item" >
                          <ion-item >
                          <ion-input v-model="userID" labelPlacement="standard" placeholder="User" ></ion-input>
                          </ion-item>
                      </ion-list>
                      

                  </ion-card-content>
                  <ion-card-content >
                      
                      <ion-button @click="signUp" class="borrow-button"> LOGIN </ion-button>
                  </ion-card-content>
              </ion-card>
              <h2> Welcome {{ loggedUser.FullName }}</h2>
          <!--ion-datetime></ion-datetime-->
      </ion-content>
    </ion-page>
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
          loggedUser: [],
        }
    },
    methods: {
      async signUp()
      {   
        const apiUrl = 'http://localhost:8300/api/users/' + this.userID; 

        await axios.get(apiUrl)
         .then((response) => {
          this.loggedUser = response.data;
          UserIsLogged  = true;
          console.log('User Data:', this.loggedUser);
        })
         .catch((err) => {
          console.error(err.message);
          console.error(err); 
        });  
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

