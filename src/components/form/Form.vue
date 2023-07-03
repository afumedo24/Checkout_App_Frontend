<template>
    <!-- 
        this is the structure for the form component 
        everything is in a ion card, then we define the heder
    -->
    <ion-card class="form-card">

        <ion-card-header>
            <!-- 
                here we check the device status to get the appropriat title 
                if its available then it displays "Borrow ..." else "Return ..."
            -->
            <ion-card-title v-if="this.device.status === 'Available'" class="form-title"> Borrow Device  </ion-card-title>
            
            <!-- this will render when the statement aboce is false -->
            <ion-card-title v-else class="form-title"> Return Device  </ion-card-title>
            <ion-card-subtitle class="form-subtitle">  Please Check your Data before submitting! </ion-card-subtitle>
        </ion-card-header>
        

        <ion-card-content>

            <!-- the device field -->
            <ion-item>
                <h2 class="form-item-title"> Device  </h2>
                <ion-label class="form-item-text"> {{ device.name }} </ion-label>
            </ion-item>


            <!-- 
                the User field  
                here we check if the loggedUser is admin, and if he is 
                then this part with the dropdown option is displayed where 
                all the other users are listed 
                the admin can choose other users and borrow devices for them
            -->
            <ion-item v-if="loggedUser.is_admin == 1">
                <h2 class="form-item-title"> User </h2>    
                <!-- this is the dropdown/select element where all users are listed -->            
                <ion-select v-model="selectedUser" :value="selectedUser" aria-label="Select a User" slot="end">
                    <!-- we iterate through the users object to display all the Fullname of the users -->
                    <ion-select-option 
                        v-for="user in users"
                        :key="user.id"
                        :value="user.fullname">    
                        <!-- display the fullname of the users -->                      
                                {{  user.fullname }}                       
                    </ion-select-option>           
                </ion-select>
            </ion-item>

            <!-- 
                 and if the loggedUser is not admin this part is rendered 
                 and we just display the current loggedUsers fullname  
            -->
            <ion-item v-else>
                <h2 class="form-item-title"> User </h2>
                <ion-label class="form-item-text"> {{ selectedUser }}</ion-label>
            </ion-item>

            <!-- the status field -->
            <ion-item>
                <h2 class="form-item-title"> Status </h2>
                <ion-label class="form-item-text"> {{ newstatus }} </ion-label>
            </ion-item>

            <!-- the date field -->
            <ion-item>
                <h2 class="form-item-title"> Date </h2>
                <ion-label class="form-item-text"> {{ currentDate }}  </ion-label>
            </ion-item>
            
        </ion-card-content>

        <div class="form-btn-container">
            <!-- 
                we perform the submitForm() function which sends the form to the server and opens
                up a modal for verification
            -->
            <ion-button @click="submitForm"  class="send-form-btn" id="btn"> Send </ion-button>
        </div>

    </ion-card>
            
  </template>
  
<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList, IonSelect, IonSelectOption, modalController} from '@ionic/vue';
// imported for a better Date Format
import moment from 'moment';    
// imported the SuccessCard from the components for the Modal
import SuccessfullCard from '../success/SuccessfullCard.vue';
 
  
export default {
  components: {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList, IonSelect, IonSelectOption, SuccessfullCard,
  },    
  data() {  
    return {
        // in this variable the user is stored who wants to borrow the device
        // it could also be selected from the admin or its just the currently loggedUser
        selectedUser: '',
    }
  },

  /*
    this function will be called when ever this component is mounted
    1. it calls the getLoggedUser() mutation from the store to get the currently 
       logged user from the jwt token in the localstorage 
    2. also the current logged users fullname is saved in the selectedUser variable, 
       this will be passed on to the server
    3. if the currently logged User is admin, the showAllUsers() action is dispatched 
       and it fetches all the others Users from the database to borrow devices in their name
  */

  mounted() {
    this.$store.commit('getLoggedUser');
    this.selectedUser = this.loggedUser.fullname;
    if(this.loggedUser.is_admin == 1) {
        this.$store.dispatch('showAllUsers');
    }
  },

  methods: {

    /*
        this method gathers the necessary data for
        the borrowing Process and then dispatches the
        borrowDevice() action to send the data to the database

    */
    submitForm() {
        
        // set all necessary properties in a object
        const data = {
            deviceid: this.device.id,
            username: this.selectedUser,
            newstatus: this.newstatus,
            date: this.currentDate
        };

        // call the borrowDevice() action from the store with the data object from above 
        // to send the data to the server 
        this.$store.dispatch('borrowDevice', data);
        
        // after sending the Data, we open a Modal, which is more like verification that we 
        // borrowed/returned a device 
        this.openModal();
    },
  },
  computed: {
    
    // get the currently logged user from the store
    loggedUser() {
        return this.$store.getters.getUser;
    },
    
    // get all the users from the store
    users() {
        return this.$store.getters.getAllUsers;
    },

    // get the device you want to borrow from the store
    device() {
        return this.$store.getters.getDevice;
    },

    /* 
        calculate the new status of the device 
        if the device.status is Available, then its returns borrowing
        but if device.status is something else, then its returning back
    */
    newstatus() {
        return (this.device.status === 'Available' ? 'borrowing' : 'returning back');
    },

    /* 
        get the current date with help of the moment library to format 
        the date in a readable format
    */
    currentDate() {
        const date = moment();
        return date.format('D-MM-YYYY')
    },


    /*
        here we create a Modal with this function and the SuccessfullCard 
        is the passed down as a component, so it will render the SuccessfullPage
        on this Modal
    */
    async openModal() {
        // create a modal with the SuccessfullCard as the component
        const modal = await modalController.create({
            component: SuccessfullCard,
        });
        // open/present it on the screen
        modal.present();

        /*  
            we wait till the modal is closed and then we destructure the 
            role Variable which is emited from the SuccesfullCard component
            and if the role is confirm we send our User to the Home Page
        */
        const { role } = await modal.onWillDismiss();

        // check role 
        if (role === 'confirm') {
            // redirect us to the Home Page
            this.$router.push('/home');
        }
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
    padding-left: 1vh;
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

ion-select{
    position: relative;
    padding: 1vh;
    background: none;
}

ion-select::part(text) {
    position: relative;
    font-size: 2.3vh;
    font-weight: 500;
    margin-left: 3vh; 
}

/*
ion-select {
    width: 83%;
    background: red;
    height: 4vh;
    margin-right: vh;
}



ion-select::part(icon) {
    margin-left: 0%;
}  
*/

.custom-alert{
    --height: 40%;
    --width: 100%;
    --max-width: 60%;
    --margin-left: 20%;
}

ion-alert::part(header){
  font-size: 5vh;
}
.div{
    text-align: center;
    font-size: 4vh;
    color: red;
    font-weight: 700;
}
</style>
  
  