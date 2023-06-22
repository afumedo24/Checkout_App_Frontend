<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="primary" @click="cancel">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Qr-Code Scanner</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <div>
            <StreamBarcodeReader 
                @decode="onDecode">
            </StreamBarcodeReader>
        </div>
    </ion-content>
  </template>
  
  <script lang="ts">
    import {
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonButton,
      modalController,
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { StreamBarcodeReader } from "vue-barcode-reader";
  
    export default defineComponent({
      name: 'Modal',
      components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, StreamBarcodeReader,  modalController },
      methods: {
        cancel() {
          return modalController.dismiss(null, 'cancel');
        },
        onDecode(result) {
            return modalController.dismiss({result, dismissed: true}, 'confirm');
        },
      },
    });
  </script>

