<template>
    <ion-header class="header">
        <ion-toolbar class="toolbar">
                <ion-button @click="cancel" class="btn" slot="start">Cancel</ion-button>
          <ion-title class="title">Scan your NFC chip</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <div class="icon-container">
            <ion-icon :icon="radioOutline" size="large" class="icon"></ion-icon>
        </div>
    </ion-content>  
</template>

<script>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonLabel, IonIcon, modalController } from '@ionic/vue';
import { radioOutline } from 'IonIcons/icons'
export default {
    components: {
        IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonLabel, IonIcon
    }, 
    data() {
        return { radioOutline };
    },
    
    methods: {

    cancel() {
        return modalController.dismiss(null, 'cancel');
    },

    onDecode(result) {
        return modalController.dismiss(result, 'confirm');
    },
/*
      // Function to handle NFC scanning and data processing
      handleNfcScanning() {
        // Implement NFC scanning logic using the USB NFC chip scanner
        // Process the scanned NFC data (e.g., extract the username)
        // Close the modal programmatically
        this.isScanned = false;
      },*/
   
    }
}
</script>

<style>

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

.title{
    color:  var(--ion-color-light);
    font-size: 3vh;
    font-weight: 600;
    margin-left: 2vh;
}

.icon-container{
    height: 80%;
    width: 80%;
    margin-top: 10%;
    margin-left: 10%;
    border-radius: 1vh;
    background: var(--ion-color-medium);

}

.icon{
    height: 70%;
    width: 70%;
    margin-top: 15%;
    margin-left: 15%;
    animation: changeBackgroundColor 2s infinite;
}


@keyframes changeBackgroundColor {
0% {
  color: var(--ion-color-primary-tint);
}
33% {
  color: var(--ion-color-primary);
}
66% {
  color: var(--ion-color-primary-shade);
}
100% {
    color: var(--ion-color-primary-tint);
}
}

</style>
