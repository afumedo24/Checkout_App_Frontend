<template>
    <!-- this is the Login Modal where yuo scann the chip to identify the user -->
    <ion-header class="header">
        <ion-toolbar class="toolbar">
            <!-- a button that cancels the Process -->
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
    // it will close the modal and pass null as the data with the role cancel 
    // so that our modalcontroller knows what do in that case
    cancel() {
        return modalController.dismiss(null, 'cancel');
    },

    // it will also close the modal and pass the chipID with the role confirm 
    // so that the modalcontroller knows that everything went fine
    /*
        // Implement NFC scanning logic using the USB NFC chip scanner
        // Process the scanned NFC data (e.g., extract the username)
        // Close the modal programmatically
    */
    onDecode(result) {
        return modalController.dismiss(result, 'confirm');
    },

   
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
