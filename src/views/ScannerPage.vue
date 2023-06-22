<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
        <ion-content>
            <scanned-device-card 
                :devicetitle="scannedDevice.name" 
                :deviceimage="scannedDevice.image"
                :devicestatus="devicestatus">
            </scanned-device-card>
        </ion-content>
      </ion-page>
</template>

<script>
import {  IonContent,  modalController, IonPage } from '@ionic/vue'
import { ref } from "vue";
import axios from 'axios';
import ScanModal from '../components/ScanModal.vue';
import ScannedDeviceCard from '../components/scanner/ScannedDeviceCard.vue';



export default {
    components: {
         IonContent, ref, ScanModal,  modalController, IonPage, ScannedDeviceCard, axios
    },
    data() {
        const decodedText = ref("");
        const scannedDevice = ref("");
        var devicestatus = '';
        //let ScanWasSucessful = true;
      

        return { decodedText, scannedDevice, devicestatus, };
    },
    methods: {
        
        // opens the ScanModal for scanning the Qr-Code
        async openModal() {
            const modal = await modalController.create({
                component: ScanModal,
            });

            modal.present();

            const { data, role } = await modal.onWillDismiss();
            if(role === 'confirm') {
                this.decodedText = data.result;

                const apiUrl = 'http://localhost:8300/api/devices/' + this.decodedText; 

                axios.get(apiUrl)
                    .then((response) => {
                    this.scannedDevice = response.data;
                    console.log('Device Data:', this.scannedDevice);

                    //turns the device status attribute into a word 
                    if(this.scannedDevice.status === 1)
                    {
                        this.devicestatus = 'Verfügbar';
                    }
                    else 
                    {
                        this.devicestatus = 'Nicht Verfügbar';
                    }

                    
                    })
                    .catch((err) => {
                        console.error(err.message);
                        console.error(err);
                    });
            }
            else {
               // ScanWasSucessful = false;
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


</style>

