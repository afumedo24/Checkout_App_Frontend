<template>
    <ion-header class="header">
      <ion-toolbar class="toolbar">
          <ion-button @click="cancel" class="btn" slot="start">Cancel</ion-button>   
        <ion-title class="title">Qr-Code Scanner</ion-title>
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

  <style scoped>
  .header{
    height: 9vh;
  }

  .toolbar{
    --background: var(--ion-color-primary);
    height: 100%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15)  0 2.6px;
    justify-content: center;
    align-items: center;
  }

  .title{
    color:  var(--ion-color-light);
    font-size: 3vh;
    font-weight: 600;
    margin-left: 2vh;
  }

  .btn{
    --background: var( --ion-color-tertiary);
    height: 5vh;
    width: 12vh;
    color: var(--ion-color-light);
    margin-left: 3vh;
    font-size: 2vh;
    font-weight: 450;
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  </style>

