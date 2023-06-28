<template>
    <ion-card class="form-card">

        <ion-card-header>
            <ion-card-title class="form-title"> Borrow Device  </ion-card-title>
            <ion-card-subtitle class="form-subtitle">  Please Check you Data before submitting! </ion-card-subtitle>
        </ion-card-header>
        

        <ion-card-content>

            <ion-item>
                <h2 class="form-item-title"> Device  </h2>
                <ion-label class="form-item-text"> {{ device.name }} </ion-label>
            </ion-item>

            <ion-item>
                <h2 class="form-item-title"> User</h2>
                <ion-label class="form-item-text"> {{ loggeduser.fullname }}</ion-label>
            </ion-item>

            <ion-item>
                <h2 class="form-item-title"> Status </h2>
                <ion-label class="form-item-text"> {{ newstatus }} </ion-label>
            </ion-item>

            <ion-item>
                <h2 class="form-item-title"> Date </h2>
                <ion-label class="form-item-text"> {{ currentDate }}  </ion-label>
            </ion-item>
            
        </ion-card-content>
        <div class="form-btn-container">
            <ion-button @click="submitForm" class="send-form-btn"> Send </ion-button>
        </div>
    </ion-card>
            
  </template>
  
<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList } from '@ionic/vue';

// imported for a better Date Format
import moment from 'moment';        
 
  
export default {
  components: {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList,
  },    

  created() {
    this.$store.commit('getLoggedUser');
  },

  methods: {
    submitForm() {
        const data = {
            deviceid: this.device.id,
            username: this.loggeduser.fullname,
            newstatus: this.newstatus,
            date: this.currentDate
        };

        this.$store.dispatch('borrowDevice', data)

        console.log("Form Submited");
        console.log(data);

        // fire a saction 
    }
  },
  computed: {
    loggeduser() {
        return this.$store.getters.getUser;
    },

    device() {
        return this.$store.getters.getDevice;
    },
    newstatus() {
        return (this.device.status === 'Available' ? 'borrowing' : 'returning back');
    },

    // get current date with help of moment library to format 
    // the date in a readable format
    currentDate() {
        const date = moment();
        return date.format('D-MM-YYYY')
    },

  }
} 
  
</script>
  

<style scoped>
.form-card {
    width: 95%;
    margin-top: 11vh;
    padding: 1vh;
    margin-left: 2.5%;
    background-color: #D9D9D9;
    border-radius: 1vh;
    --box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    display: block;

}

ion-card-header{
    text-align: center;
}

.form-title{
    font-size: 5vh;
    font-weight: bold;
    color: var(--ion-color-secondary-contrast);
}

.form-subtitle{
    font-size: 2.7vh;
    font-weight: 500;
    margin-top: 0.7vh;
    color: var(--ion-color-danger);
}

ion-item{
    width: 95%;
    margin-top: 5%;
    margin-left: 2.5%;
    border-radius: 1vh;
}
ion-label {
    height: 4vh;

}
.form-item-title{
    height: 50%;
    width: 8vh;
    font-size: 2vh; 
    font-weight: 450;
    color: var(--ion-color-dark-tint);
}
.form-item-text{
    font-size: 2.3vh;
    font-weight: 500;
    margin-left: 2vh;
}

.form-btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.send-form-btn{
    --background: var( --ion-color-secondary-shade);
    --background-hover: var(--ion-color-secondary-shade);
    width: 20vh;
    height: 6vh; 
    font-size: 2.4vh;
    font-weight: 700;
    color: white;
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

</style>
  
  