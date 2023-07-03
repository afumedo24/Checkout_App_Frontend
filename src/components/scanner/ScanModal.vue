<template>
  <!-- this component will be our QR-code Scanner -->
    <ion-header class="header">
      <ion-toolbar class="toolbar">
        <!-- a button to cancel the scan Process -->
          <ion-button @click="cancel" class="btn" slot="start">Cancel</ion-button>   
        <ion-title class="title">Qr-Code Scanner</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- 
          here we use the StreamBarcodeReader from the vue-barcode-reader library
          and it comes with the function decode(), so whenever a QR-Code is recognized
          it will call the our onDecode method and pass the scanned result to it 
          the onDecode method emits the data back to the modalcontroller
      -->
        <div>
            <StreamBarcodeReader 
                @decode="onDecode">
            </StreamBarcodeReader>
        </div>
    </ion-content>
  </template>
  
  <script>
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
      components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, StreamBarcodeReader,  modalController },
      methods: {
        // it will close the modal and pass null as the data with the role cancel 
        // so that our modalcontroller knows what do in that case
        cancel() {
          return modalController.dismiss(null, 'cancel');
        },

        // it will also close the modal and pass the scanned Device id with the role confirm 
        // so that the modalcontroller knows that everything went fine
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

