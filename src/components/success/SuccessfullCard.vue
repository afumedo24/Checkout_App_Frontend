<template>
    <!-- 
        this component is for the verfication page when the borrow/returnung Process is successful
        also the device is passed down as a property
    -->
    <ion-card>
        <img :src="device.image" :alt="device.name"/> 

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
            <ion-card-title class="give-back-title"> {{ device.name }}  was brought back successfully </ion-card-title>
            <ion-card-subtitle> 
                You gave {{ device.name }}  successfully back! Click on the Button to go back to 
                the HomePage
            </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <!-- this button will bring us back to the HomPage -->
        <ion-button @click="goBackToHome()">
            <ion-label> Go to HomePage </ion-label>
        </ion-button>
      </ion-card-content>
    </ion-card>
</template>

<script>
import { IonButton, IonCard, IonCardHeader, IonImg, IonCardTitle, IonCardContent } from '@ionic/vue';

export default {
    props: [ 'device' ],
    components: {
        IonButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonImg, 
    },
    methods: {
        // just redirects us to the give url
        goBackToHome() {
            this.$router.push("/");
        }

    }

}
</script>

<style scoped>

ion-card{
    width: 90%;
    margin-top: 10vh;
    margin-left: 5%;
    padding: 2vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
}

ion-card-header{
    justify-items: center;
    align-items: center;
}

ion-img {
    width: 25vh;
    margin-top: 10vh;
    margin-bottom: 5vh;
    object-fit: scale-down;
}
ion-card-title{
    font-size: 4vh;
    font-weight: bolder;
    text-align: center;
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