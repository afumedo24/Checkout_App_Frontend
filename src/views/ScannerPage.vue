<!-- eslint-disable vue/no-unused-components -->
<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <img :alt="scannedDevice.name" :src="scannedDevice.image" />
                <ion-card-header>
                  <ion-card-title>{{ scannedDevice.name }}</ion-card-title>
                  <ion-card-subtitle :class="scannedDevice.status  === 1 ? 'status-green' : 'status-red'"> {{ devicestatus }} </ion-card-subtitle>
                </ion-card-header>

                <ion-toolbar> 
                <div class="btn-container"> 
                    <ion-button class="cancel-btn">
                        <ion-label> Cancel </ion-label>
                    </ion-button>

                    <ion-button class="ok-btn" >
                        <ion-label> Borrow  </ion-label>
                    </ion-button>
                </div>
            </ion-toolbar> 
               
              </ion-card>
        </ion-content>
      </ion-page>
</template>

<script>
import {  IonContent,  modalController, IonPage, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton, IonLabel, IonToolbar} from '@ionic/vue'
import { ref } from "vue";
import axios from 'axios';
import ScanModal from '../components/ScanModal.vue';



export default {
    components: {
         IonContent, ref, ScanModal,  modalController, IonPage, 
         IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton, IonLabel, IonToolbar, axios
    },
    data() {
        const decodedText = ref("");
        const scannedDevice = ref("");
        var devicestatus = '';
      

        return { decodedText, scannedDevice, devicestatus };
    },
    methods: {
        
        // 
        async openModal() {
            const modal = await modalController.create({
                component: ScanModal,
            });

            modal.present();

            const { data, role } = await modal.onWillDismiss();
            // console.log(role);                                   //delete it later
            if(role === 'confirm') {
                this.decodedText = data.result;

                const apiUrl = 'http://localhost:8300/api/devices/' + this.decodedText; 

                axios.get(apiUrl)
                    .then((response) => {
                    this.scannedDevice = response.data;
                    console.log('Device Data:', this.scannedDevice);

                    //for the device status variable 
                    if(this.scannedDevice.status === 1)
                    {
                        this.devicestatus = 'Verfügbar';
                    }
                    else 
                    {
                        this.devicestatus = 'Nicht Verfügbar';
                    }

                    
                    })
                    .catch((err) => {
                    console.error(err);
                    // Handle error scenarios in your app
                    });
            }
            else {
                this.decodedText = 'Nothing Found to Scan';
            }
        },

    },
    mounted() {
        this.openModal();
    },

};
 
</script>


<style scoped>

ion-card{
    margin-top: 10vh;
    padding: 2vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
img {
    --background-color: red;
    align-content: center;
    justify-content: center;
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
    --ripple-color: red;
    
    
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

