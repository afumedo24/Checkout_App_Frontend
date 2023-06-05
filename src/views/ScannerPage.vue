<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
      
        <ion-content>
           <h2> The scanned QR-Code is </h2>
            <h1> {{ decodedText }} </h1>

        </ion-content>
      </ion-page>
</template>

<script>
import {  IonContent,  modalController, IonPage } from '@ionic/vue'
import { ref } from "vue";
import ScanModal from '../components/ScanModal.vue';


export default {
    components: {
         IonContent, ref, ScanModal,  modalController, IonPage, 
    },
    data() {
        const decodedText = ref("");

        return { decodedText };
    },
    methods: {
        // 
        async openModal() {
            const modal = await modalController.create({
                component: ScanModal,
            });
            modal.present();

            const { data, role } = await modal.onWillDismiss();
            console.log(role);
            if(role === 'confirm') {
                this.decodedText = data.result;
            }
            else {
                this.decodedText = 'Not Happend';
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
