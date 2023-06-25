<template>
    <!-- IonCard should display the information from the scanned device -->
    <ion-card class="success-card">
        <ion-img :alt="device.name" :src="device.image" />
        <ion-card-header>
          <ion-card-title>{{ device.name }}</ion-card-title>
          <!-- here the class is dynamically assigned so that we get the appropriate color -->
          <ion-card-subtitle :class="device.status  === 1 ? 'status-green' : 'status-red'"> {{ device_status_word }} </ion-card-subtitle>
        </ion-card-header>

        <ion-toolbar> 
        <div class="btn-container"> 
            <!-- $router.push(), cancels the borrowing process up and redirects us to the HomePage -->
            <ion-button @click="this.$router.push('home')" class="cancel-btn btn-class">
                <ion-label> Cancel </ion-label>
            </ion-button>
            <!-- v-if, like a normal if-statement, checks which button we should render -->  
            <ion-button v-if="isAvailable"  @click="borrowDevice()" class="borrow-btn btn-class" >
                <ion-label> Borrow  </ion-label>
            </ion-button>
            <!-- is rendered if v-if=false -->
            <ion-button v-else @click="giveBackDevice()" class="give-back-btn btn-class" >
                <ion-label> Give Back  </ion-label>
            </ion-button>

        </div>
        </ion-toolbar> 
       
      </ion-card>
</template>

<script>
import {
    IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton, IonLabel, IonToolbar,
} from '@ionic/vue';
import axios from 'axios';

export default {
    props: [ 'device' ],
    components: {
        IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton, IonLabel, IonToolbar, axios
    },
    data() {
        const device_status_word =  '';         
        const isAvailable = true;
        return { device_status_word, isAvailable }; 
    },
    
    // to translate the Device Status from a num to a word
    // and render the right buttons for the necessary action
    mounted() {

        if(this.device.status === 1){
            this.device_status_word = 'Verfügbar';
            this.isAvailable = true;
        }
        else {
            this.device_status_word = 'Nicht Verfügbar';
            this.isAvailable = false;

        }
    },

    methods: {

        // method for sending a update request to the api
        async updateDeviceStatus(device, newstatus) {
            const apiUrl = 'http://localhost:8300/api/devices/' + device.id; 

            try{
                const response = await axios.put(apiUrl, { status: newstatus });
                console.log(response.data);

                // redirect us to the next page
                // after a succesfull scan
                this.$router.push('/borrow/' + this.device.id);     
            }
            catch(err) {
                console.log(err);
            }
        },

        //method for borrowing the device 
        borrowDevice() {
            console.log("Borrowing Device: " + this.device.name );
            this.updateDeviceStatus(this.device, 2)
        },

        //method for bringing back the device
        giveBackDevice() {
            console.log("Giving Device back: " + this.device.name );
            this.updateDeviceStatus(this.device, 1);
        },
    },
}
</script>

<style scoped>


.success-card {
    margin-top: 11vh;
    padding: 2vh;
    --box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
ion-img{
    width: 80%;
    margin-left: 10%;
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

.btn-class {
    width: 13vh;
    height: 6vh;  
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.cancel-btn{
    --background: var(--ion-color-danger);
}

.borrow-btn{
    --background: var(--ion-color-success);
}

.give-back-btn {
    --background: var(--ion-color-warning);
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