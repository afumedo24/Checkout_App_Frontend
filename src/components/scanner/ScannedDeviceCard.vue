<template>
    <!-- IonCard should display the information from the scanned device -->
    <ion-card class="success-card">
        <ion-img :alt="device.name" :src="device.image" />
        <ion-card-header>
          <ion-card-title>{{ device.name }}</ion-card-title>
          <!-- here the class is dynamically assigned so that we get the appropriate color -->
          <ion-card-subtitle :class="device.status  === 'Available' ? 'status-green' : 'status-red'"> {{ device.status }} </ion-card-subtitle>
        </ion-card-header>

        <ion-toolbar> 
        <div class="btn-container"> 
            <!-- 
                $router.push(), clicking the button cancels the 
                borrowing process and redirects us to the HomePage 
            -->
            <ion-button @click="this.$router.push('home')" class="cancel-btn btn-class">
                <ion-label> Cancel </ion-label>
            </ion-button>
            <!-- 
                v-if, like a normal if-statement, checks which button we should render 
                true = is borrow button
            -->  
            <ion-button v-if="device.status === 'Available' ? true : false"  @click="pushtoForm()" class="borrow-btn btn-class" >
                <ion-label> Borrow  </ion-label>
            </ion-button>
            <!-- 
                is rendered if v-if=false 
                flase = is Give Back button
            -->
            <ion-button v-else @click="pushtoForm()" class="give-back-btn btn-class" >
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
    methods: {
        // this method just redirects us to the form page 
        pushtoForm() {
            this.$router.push('/borrow/form');
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