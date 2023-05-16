<template>
    <ion-page>
        <ion-header> 
            <app-header> </app-header>
        </ion-header>
        <ion-content>
            <p> AddPage</p>
                <ion-card >
                    <ion-card-header style="text-align: center; background-color: grey;" >
                        <ion-card-title >Daten für das Ausleihen</ion-card-title>
                        <ion-card-subtitle style="color: red">Bitte Überprüfen Sie Ihre Daten!</ion-card-subtitle>
                    </ion-card-header>

                    <ion-card-content style="background-color: grey;">
                        <ion-list style="text-align: center;width:fit-content;" >
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
                        <ion-list style="text-align: center;">
                                                  
                            <ion-item >    
                                <ion-item slot="start" style="width: fit-content ;">  
                                                            
                                    <ion-accordion-group >
                                        <ion-accordion value="start">
                                        <ion-item slot="header">
                                        <ion-label>Von</ion-label>
                                        <ion-note slot="start" id="datetimeValue"></ion-note>
                                        </ion-item>
                                        <ion-datetime
                                        id="datetime"
                                        presentation="date"
                                        slot="content"
                                        display-format="MMMM YY"
                                        
                                        ></ion-datetime>
                                        </ion-accordion>
                                    </ion-accordion-group>
                                </ion-item>
                                <ion-item slot="end" style="width: fit-content ;">  
                                    <ion-accordion-group>
                                        <ion-accordion value="end">
                                        <ion-item slot="header">
                                        <ion-label>Bis</ion-label>
                                        <ion-note slot="end" id="datetimeValue"></ion-note>
                                        </ion-item>
                                        <ion-datetime
                                        id="datetime"
                                        presentation="date"
                                        slot="content"
                                        display-format="MMMM YY"
                                    
                                        ></ion-datetime>
                                        </ion-accordion>
                                    </ion-accordion-group>
                                </ion-item>
                            
                            </ion-item>
                        
                            
                           
                        </ion-list>
                        <ion-button slot="center" size="large"> Submit </ion-button>
                    </ion-card-content>
                </ion-card>
            <!--ion-datetime></ion-datetime-->
        </ion-content>
      </ion-page>
</template>

<script>
import { IonContent, IonPage,IonModal, IonHeader,IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup} from '@ionic/vue';
import AppHeader from '../components/Header.vue';


export default {
components: {
    AppHeader, IonPage, IonContent, IonModal, IonHeader, IonDatetime, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonList, IonPopover, IonAccordion, IonNote, IonAccordionGroup
}
};

</script>

<style scoped>


</style>


