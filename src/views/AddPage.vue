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
                            <ion-input placeholder="Enter user name"></ion-input>
                            </ion-item>

                            <ion-item>
                            <ion-input placeholder="Ausgewählte Geräte"></ion-input>
                            </ion-item>

                            <ion-item>
                            <ion-input label="Input with value" value="121 S Pinckney St #300"></ion-input>
                            </ion-item>

                            <ion-item>
                            <ion-input label="Readonly input" value="Madison" :readonly="true"></ion-input>
                            </ion-item>

                            <ion-item>
                            <ion-input label="Disabled input" value="53703" :disabled="true"></ion-input>
                            </ion-item>
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


