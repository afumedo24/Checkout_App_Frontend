<template>
    <!-- 
        this component is for the verfication page when the borrow/return Process is successful
        also the device retrieved from the store
    -->
    <ion-card>
        <ion-img :src="device.image" :alt="device.name"/> 

        <!-- if we borrowed the device, it will render this part with green text -->
        <ion-card-header v-if="device.status === 'Available' ">
            <ion-card-title class="borrow-title"> {{ device.name }}  borrowed successfully </ion-card-title>
            <ion-card-subtitle> 
                You borrowed {{ device.name }}  successfully! Click on the Button to go back to 
                the HomePage
            </ion-card-subtitle>
        </ion-card-header>

        <!-- and on returning the device, it will render this part with orange text -->
        <ion-card-header v-else>
            <ion-card-title class="give-back-title"> {{ device.name }}  returned  back successfully </ion-card-title>
            <ion-card-subtitle> 
                You returned {{ device.name }}  successfully back! Click on the Button to go back to 
                the HomePage
            </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <!-- this button will close the Modal Page -->
        <ion-button @click="goBackToHome()">
            <ion-label> Go to HomePage </ion-label>
        </ion-button>
      </ion-card-content>
    </ion-card>
</template>

<script>
import { IonButton, IonCard, IonCardHeader, IonImg, IonCardTitle, IonCardContent, modalController } from '@ionic/vue';

export default {
    components: {
        IonButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonImg, 
    },
    methods: {
        // closes the modal and sends a confirm message to the parent component
        goBackToHome() {
            return modalController.dismiss(null, 'confirm');
        }

    },
    computed: {
        /*
            the device() property here, calls/returns us the state of the 
            stored device in our store by calling the getter getDevice(),
            we can use the device() as a normal variable
        */
        device() {
            return this.$store.getters.getDevice;
        }
    }

}
</script>

<style scoped>

ion-card{
    width: 95%;
    height: 90%;
    margin-top: 5%;
    margin-left: 2.5%;
    padding: 2vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
}

ion-card-header{
    justify-items: center;
    align-items: center;
    display: bloc;;
}

ion-img {
    width: 60%;
    justify-content: center;
    margin: auto;
    object-fit: scale-down;
}
ion-card-title{
    font-size: 4vh;
    font-weight: bolder;
    text-align: center;
}

ion-card-subtitle {

}

.borrow-title {
    color: var(--ion-color-success-shade);
}

.give-back-title {
    color: var(--ion-color-warning-shade);
}

ion-card-subtitle{
    width: 100%;
    font-size: 2.2vh;
    font-weight: 400;
    font-display: block;
    text-align: center;
    text-transform: none;
}
ion-card-content{
    display: grid;
}

ion-button {
    width: 20vh;
    height: 6vh;  
    margin: auto;
    font-size: 2vh;
    --background: var(--ion-color-secondary-shade);
    text-transform: none;
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
</style>