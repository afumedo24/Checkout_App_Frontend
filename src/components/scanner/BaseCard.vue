<template>
    <!-- IonCard to display the information/user feedback-->
    <ion-card  class="base-card"> 
        <ion-card-header>
            <ion-card-title class="base-card-title">
                No devices scanned
            </ion-card-title>
        </ion-card-header>
        <ion-card-content class="base-card-label">
            <ion-label>
                Please press the orange Button with the QR-Code Icon on it to scan a device
            </ion-label>
            <!-- 
                here are the error messages displayed 
                and we are giving the message as a property to this component
             -->
            <ion-label class="error-message">
                {{  message }}
            </ion-label>
        </ion-card-content>
    </ion-card>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel } from '@ionic/vue'
export default {
    props: [ 'message' ],
    components: {
        IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel
    }
}
</script>

<style scoped>
.base-card {
    height: 60%;
    margin-top: 11vh;
    --box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.base-card-title{
    font-size: 8vh;
    font-weight: 500;
    text-align: center;
}

.base-card-label{
    font-size: 3vh;
    font-weight: 400;
    text-align: center;
    margin-top: 2vh;
    margin-left: 2vh;
    margin-right: 2vh;
}


.error-message{
    display: block;
    margin-top: 4vh;
    font-size: 3.5vh;
    font-weight: 700;
    text-align: center;
    color: var(--ion-color-danger)
}



</style>