<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
        <ion-content>

            <base-card v-if="singledevice == 0" 
                :message="errormessage">
            </base-card>

            <scanned-device-card v-else
                :device="singledevice">
             </scanned-device-card>

        </ion-content>
      </ion-page>
</template>

<script>
import {  IonContent,  modalController, IonPage } from '@ionic/vue'
import ScanModal from '../components/scanner/ScanModal.vue';
import ScannedDeviceCard from '../components/scanner/ScannedDeviceCard.vue';
import BaseCard from '@/components/scanner/BaseCard.vue';



export default {
    components: {
         IonContent, ScanModal,  modalController, IonPage, ScannedDeviceCard, BaseCard, 
    },
    data() {
        return { 
            decodedText: '' , 
        };
    },
    mounted() {
        this.openModal();
    },

    computed: {
        singledevice() {
            return this.$store.getters.getSingleDevice;
        },
        errormessage() {
            return this.$store.getters.errormessage;
        }
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
                this.$store.dispatch('showSingleDevice', this.decodedText);
            }
            else {
                this.decodedText = null ;
            }
        },
    },
};
 
</script>


<style scoped>


</style>

