<template>
    <!-- ein IonCard soll die Informationen von dem gescannte Device darstellen -->
    <ion-card>
        <ion-img :alt="devicetitle" :src="deviceimage" />
        <ion-card-header>
          <ion-card-title>{{ devicetitle }}</ion-card-title>
          <!-- hier wird die class dynamisch zugewiesen damit wir die entsprechende Farbe bekommen -->
          <ion-card-subtitle :class="devicestatus  === 1 ? 'status-green' : 'status-red'"> {{ dv_status }} </ion-card-subtitle>
        </ion-card-header>

        <ion-toolbar> 
        <div class="btn-container"> 
            <!-- $router.back bricht den Scan Vorgang ab und leitet uns an der HmePage weiter bzw. die letzte Seite -->
            <ion-button class="cancel-btn" @click="$router.back()">
                <ion-label> Cancel </ion-label>
            </ion-button>

            <ion-button :disabled="isDisabled" @click="borrow()" class="ok-btn" >
                <ion-label> Borrow  </ion-label>
            </ion-button>
        </div>
        </ion-toolbar> 
       
      </ion-card>
</template>

<script>
import {
    IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton, IonLabel, IonToolbar,
} from '@ionic/vue';

export default {
    props: [ 'devicetitle', 'deviceimage', 'devicestatus' ],
    components: {
        IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton, IonLabel, IonToolbar
    },
    data() {
        const dv_status =  '';
        const isDisabled = false;
        return { dv_status, isDisabled }; 
    },
    methods: {
        borrow() {
            console.log("Borrowing Device: " + this.devicetitle );
        },
    },
    // damit wir den Device Status in einem Wort umwandeln 
    // und falls nicht ausleihbar den Button deaktivieren
    beforeUpdate() {

            if(this.devicestatus === 1){
                this.dv_status = 'Verfügbar';
                this.isDisabled = false;
            }
            else {
                this.dv_status = 'Nicht Verfügbar';
                this.isDisabled = true;
            
            }
    }
}
</script>

<style scoped>


ion-card{
    margin-top: 10vh;
    padding: 2vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
img{

    object-fit: contain;
}

ion-card-header{
    justify-content: center;
    align-items: center;
}

ion-card-subtitle{
    font-size: larger;
}

ion-toolbar{
    --background: none;
}

.btn-container{
    
    margin-bottom: 0.5vh;
    margin-left: 0vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}

.cancel-btn{
    --background: var(--ion-color-danger);
    width: 13vh;
    height: 6vh;  
}

.ok-btn{
    --background: var(--ion-color-success);
    width: 13vh;
    height: 6vh;  
}

ion-label{
    font-size: larger;
}

.status-green{
    color: var(--ion-color-success);
}

 .status-red{
    color: var(--ion-color-danger);
}


</style>