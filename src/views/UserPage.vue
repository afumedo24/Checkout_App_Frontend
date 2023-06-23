<template>
  <ion-page>
      <ion-content >
<<<<<<< HEAD
          <user-login > 
            
          </user-login>
=======
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
>>>>>>> 9af1a0af6d93f988745cda67251de72196bbbbac
      </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage,IonModal, IonHeader} from '@ionic/vue';
import UserLogin from '@/components/login/UserLogin.vue';

export default {
components: {
<<<<<<< HEAD
  IonPage, IonContent, IonModal, IonHeader, UserLogin
=======
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
>>>>>>> 9af1a0af6d93f988745cda67251de72196bbbbac
}
};


</script>

<style>

</style>

