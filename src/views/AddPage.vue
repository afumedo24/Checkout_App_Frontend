<template>
    <ion-page>
        <ion-header> 
            <app-header> </app-header>
        </ion-header>
        <ion-content>
            <p> AddPage</p>
                <ion-card>
                    <ion-card-header style="text-align: center;">
                        <ion-card-title >Ausleihen</ion-card-title>
                        <ion-card-subtitle>Bitte Überprüfen Sie Ihre Daten!</ion-card-subtitle>
                    </ion-card-header>

                    <ion-card-content >
                        <ion-list style="text-align: center;">
                            <ion-item>
                            <ion-input label="" value="User" :readonly="true"></ion-input>
                            </ion-item>


                            <ion-item>
                            <ion-select label="Geräte" label-placement="floating" placeholder="Enter text">
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
                    <ion-card-content >
                        <ion-list style="text-align: center;">
                                                  
                        <ion-item >    
                            <ion-item >  
                                                        
                              <ion-datetime slot="start"></ion-datetime>
                            </ion-item>
                            <ion-item >  
                                <ion-datetime slot="end"></ion-datetime>
                            </ion-item>
                        </ion-item>

                            
                            <ion-button slot="center" size="large"> Submit </ion-button>
                        </ion-list>
                    </ion-card-content>
                </ion-card>
            <!--ion-datetime></ion-datetime-->
        </ion-content>
      </ion-page>
</template>

<script>
import { IonContent, IonPage, IonHeader,IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList} from '@ionic/vue';
import AppHeader from '../components/Header.vue';

export default {
components: {
    AppHeader, IonPage, IonContent, IonHeader, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList
}
};

</script>

<style scoped>


</style>


