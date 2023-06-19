<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
      
        <ion-content>
           <h2> The scanned QR-Code is </h2>
            <h1 > {{ decodedText }} </h1>


            <ion-card >
                <img :alt="scannedDevice.name" :src="scannedDevice.image" />
                <ion-card-header>
                  <ion-card-title>{{ scannedDevice.name }}</ion-card-title>
                  <ion-card-header class="" >{{ scannedDevice.status  }}</ion-card-header>
                </ion-card-header>
            
                <ion-card-content>
                    id: {{ scannedDevice.id  }}
                </ion-card-content>
              </ion-card>
            
        </ion-content>
      </ion-page>
</template>

<script>
import {  IonContent,  modalController, IonPage, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
import { ref } from "vue";
import axios from 'axios';
import ScanModal from '../components/ScanModal.vue';


export default {
    components: {
         IonContent, ref, ScanModal,  modalController, IonPage, 
         IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, axios
    },
    data() {
        const decodedText = ref("");
        const scannedDevice = ref("");
      

        return { decodedText, scannedDevice,    };
    },
    methods: {
        
        // 
        async openModal() {
            const modal = await modalController.create({
                component: ScanModal,
            });

            modal.present();

            const { data, role } = await modal.onWillDismiss();
            console.log(role); //delete it later
            if(role === 'confirm') {
                this.decodedText = data.result;

                const apiUrl = 'http://localhost:8300/api/devices/' + this.decodedText; 

                axios.get(apiUrl)
                    .then((response) => {
                    this.scannedDevice = response.data;
                    console.log('Device Data:', this.scannedDevice);
                    // Do something with the device data in your app
                    })
                    .catch((err) => {
                    console.error(err);
                    // Handle error scenarios in your app
                    });
            }
            else {
                this.decodedText = 'Nothing Found to Scan';
            }
        },

    },
    mounted() {
        this.openModal();
    },

};
 
</script>


<style scoped>
h1{
    color: blue;
}
</style>
