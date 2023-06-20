<template>
  <ion-page>
      <ion-header> 
          <app-header> </app-header>
      </ion-header>
      <ion-content >
              <ion-card class="user-list">
                  <ion-card-header style="text-align: center; background-color: grey;" >
                      <ion-card-title >Daten für das Ausleihen</ion-card-title>
                      <ion-card-subtitle style="color: red">Bitte Überprüfen Sie Ihre Daten!</ion-card-subtitle>
                  </ion-card-header>

                  <ion-card-content>
                      <ion-list  style=": center;width:fit-content;" >
                          <ion-item >
                          <ion-input label="" value="User" :readonly="true"></ion-input>
                          </ion-item>
                      </ion-list>
                  </ion-card-content>
                  <ion-card-content style="background-color: grey;">
                      <ion-list style="text-align: center;width:fit-content;">


                          <ion-item>
                          <ion-select label="Geräte" label-placement="floating" placeholder="Geräte auswählen">
                              <ion-select-option value="">No Game Console</ion-select-option>
                              <ion-select-option value="nes">NES</ion-select-option>
                              <ion-select-option value="n64">Nintendo64</ion-select-option>
                              <ion-select-option value="ps">PlayStation</ion-select-option>
                              <ion-select-option value="genesis">Sega Genesis</ion-select-option>
                              <ion-select-option value="saturn">Sega Saturn</ion-select-option>
                              <ion-select-option value="snes">SNES</ion-select-option>
                          </ion-select>
                          </ion-item>


                          
                          
                          
                          <!--ion-datetime slot="start"></ion-datetime>
                      <ion-datetime presentation="month-year"></ion-datetime>
                          <ion-datetime slot="end"></ion-datetime-->
                         

                      </ion-list>
                  </ion-card-content>
                  <ion-card-content style="background-color: grey;">
                      
                      <ion-button class="borrow-button" slot="center" size="large"> Submit </ion-button>
                  </ion-card-content>
              </ion-card>
          <!--ion-datetime></ion-datetime-->
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
}
};

</script>

<style scoped>
.user-list {
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  background-color: #D9D9D9;
  border-radius: 20px;
  
}
.user-item {
  padding: 10px;
  border-block-end: 1px solid #7E7E7E;
  display: block;
  background-color: #D9D9D9;
  object-fit: cover; 
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
  margin: 0 0;;
}
.title{
  font-size: 28px;
  font-weight: bolder;
  margin-left: 10px;
}



</style>

