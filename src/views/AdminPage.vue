<template>
  <ion-page>
      <ion-header> 
          <app-header> </app-header>
      </ion-header>
      <ion-content >
              <ion-card class="user-list">
                  <ion-card-header  >
                      <h2 class="title"> Gerät ausleihen</h2>
                      <h2 class="subtitle" style="color: --ion-color-danger">Bitte Überprüfen Sie die Daten!</h2>
                  </ion-card-header>
                 

                  <ion-card-content>
                            <ion-list  class="user-item" >
                                <ion-item >
                                <ion-input v-model="id" labelPlacement="standard" placeholder="ID" ></ion-input>
                                </ion-item>
                            </ion-list>

                        
                            <ion-list  class="user-item" >
                                <ion-item >
                                <ion-input v-model="user" labelPlacement="standard" placeholder="User" ></ion-input>
                                </ion-item>
                            </ion-list>
                        
                            <ion-list  class="user-item" >
                                <ion-item >
                                <ion-input v-model="date" labelPlacement="standard" placeholder="Name" ></ion-input>
                                </ion-item>
                            </ion-list>
                            
                            <ion-list  class="user-item" >
                                <ion-item >
                                <ion-input v-model="name" labelPlacement="standard" placeholder="Datum" ></ion-input>
                                </ion-item>
                            </ion-list>
                      

                  </ion-card-content>
                  
                  <ion-card-content >
                      
                      <ion-button v-on:click="signUp" class="borrow-button"> Senden </ion-button>
                  </ion-card-content>
              </ion-card>
          
      </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage,IonModal, IonHeader,IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup} from '@ionic/vue';
import AppHeader from '../components/Header.vue';
import axios from 'axios';

export default {
components: {
  AppHeader, IonPage, IonContent, IonModal, IonHeader, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup
},
   
    data()
    {
        return{
            user:'',
        }
    },
    methods:{
    async signUp()
    {
        let result = await axios.get("http://localhost:8300/api/users/",{
            user:this.user

        });
        console.warn(result)    
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
  margin-bottom: 0.4vh;
  text-align: center;
  color: var(--ion-color-secondary-contrast);
}
.subtitle{
  font-size: 3vh;
  font-weight: bold;
  margin-left: 2vh;
  margin-bottom: 0.2vh;
  text-align: center;
  color: var(--ion-color-danger);
}

.borrow-button {
    --background: var( --ion-color-secondary-shade);
    --background-hover: var(--ion-color-secondary-shade);
    height: 5.5vh;
    width: 12.5vh;
    
    font-size: 2.4vh;
    font-weight: 700;
    color: white;
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
  }
  


</style>

