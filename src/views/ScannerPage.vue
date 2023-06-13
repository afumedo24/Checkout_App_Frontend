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
import ScanModal from '../components/ScanModal.vue';


export default {
    components: {
         IonContent, ref, ScanModal,  modalController, IonPage, 
         IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle 
    },
    data() {
        const decodedText = ref("");
        const scannedDevice = ref("");
      

        return { decodedText, scannedDevice,
            devices: [
                { id: 1, name: 'Device 1' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 2, name: 'Device 2' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 3, name: 'Device 3' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
                { id: 4, name: 'Device 4' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 5, name: 'Device 5' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
                { id: 6, name: 'Device 6' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
                { id: 7, name: 'Device 7' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 8, name: 'Device 8' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 9, name: 'Device 9' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 10, name: 'Device 10' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
                { id: 11, name: 'Device 11' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 12, name: 'Device 12' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
                { id: 13, name: 'Device 13' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
                { id: 14, name: 'Device 14' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
                { id: 15, name: 'Device 15' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
            ], 
            
        };
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
                //
                this.scannedDevice = this.devices[(this.decodedText) - 1];
                console.log(this.devices[(this.decodedText) - 1]);
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
