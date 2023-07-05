<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
        <ion-content>
            <!-- display the baseCard if you havent scanned a device yet -->
            <base-card v-if="Device == 0" 
                :message="errormessage">
            </base-card>

            <!-- 
                after scanning a QR-Code succesfully, it displays 
                the information of that device 
             -->
            <scanned-device-card v-else
                :device="Device">
             </scanned-device-card>

             <h1> this is the scanned device {{  test  }} </h1>

        </ion-content>
      </ion-page>
</template>

<script>
import {  IonContent,  modalController, IonPage } from '@ionic/vue'

// import the QR-Code scanner Modal from components
import ScanModal from '../components/scanner/ScanModal.vue';
// import the BaseCard from components
import BaseCard from '@/components/scanner/BaseCard.vue';
// import the ScannedDeviceCard from components
import ScannedDeviceCard from '../components/scanner/ScannedDeviceCard.vue';


export default {
    components: {
         IonContent, modalController, IonPage, ScanModal, ScannedDeviceCard, BaseCard, 
    },
data(){
return { test: '' };
},
    // everytime we mount this Page to the DOM it will open the ScanModal
    mounted() {
        this.openModal();
    },

    computed: {
        /* 
            we call the getter getDevice() from our store to get the 
            scanned Device which was stored in the device state when we 
            scanned the QR-Code
        */
        Device() {
            return this.$store.getters.getDevice;
        },
         /* 
            we call the getter errormessage() to get the 
            any Error Messages from the Store, these are set
            when we get the response of the Server back,
            we display them so that we can show the User what 
            they might have done wrong
        */
        errormessage() {
            return this.$store.getters.errormessage;
        }
    },

    methods: {
        
        /*  
            creates and opens the ScanModal for scanning the Qr-Code
            we create the Modal with the ScanModal as the component
            then we open this Modal and wait for it to close
            after its closed we will destructure data and role out of it
            and next we will check the role, if its confirm we will 
        */
        async openModal() {
            // create a Modal with ScanModal as the component
            const modal = await modalController.create({
                component: ScanModal,
            });

            // open the Modal
            modal.present();

            // destructure the data and role when it closes
            const { data, role } = await modal.onWillDismiss();
            // check role
            if(role === 'confirm') { 
                // dispatch showSingleDevice() with the scanned QR-Code to 
                // fetch the device from the Server and save it in our store
                this.$store.dispatch('showSingleDevice', data.result);
                this.test = data.result;
            }
        },
    },
};
 
</script>


<style scoped>


</style>

