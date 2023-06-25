<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
        <ion-content>

            <base-card v-if="this.scannedDevice == 0" 
                :message="errormessage">
            </base-card>

            <scanned-device-card v-else
                :device="this.scannedDevice">
             </scanned-device-card>

        </ion-content>
      </ion-page>
</template>

<script>
import {  IonContent,  modalController, IonPage } from '@ionic/vue'
import { ref } from "vue";
import axios from 'axios';
import ScanModal from '../components/scanner/ScanModal.vue';
import ScannedDeviceCard from '../components/scanner/ScannedDeviceCard.vue';
import BaseCard from '@/components/scanner/BaseCard.vue';



export default {
    components: {
         IonContent, ref, ScanModal,  modalController, IonPage, ScannedDeviceCard, BaseCard, axios
    },
    data() {

        const decodedText = ref("");
        const scannedDevice = ref("");
        const errormessage =  '';

        return { decodedText, scannedDevice, errormessage };
    },
    mounted() {
        this.openModal();
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
                this.getDevice(this.decodedText);

            }
            else {
                this.decodedText = null ;
            }
        },

          // method for requesting data for a device from the api
          async getDevice(device_id) {
            const apiUrl = 'http://localhost:8300/api/devices/' + device_id; 

            await axios.get(apiUrl).then((response) => {
                this.scannedDevice = response.data;
            }).catch((err) => {
                if(err.response.statusText === 'Not Found')
                this.errormessage = ("Error: QR-Code nicht gefunden" );
                console.error(err);
            });
        },
    },
};
 
</script>


<style scoped>


</style>

