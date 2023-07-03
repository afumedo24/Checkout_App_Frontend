<template>
  <ion-page>
      <ion-content>

        <!-- delete this later -->
          <user-login> 
          </user-login>
        <!-- ------------  -->
         
          <!-- 
              this is the borrowed device list of a User, 
              it will show when ever  
              we pass the title(listtitle) and the item(devices) to iterate 
              through as props
          -->
          <device-list 
            v-if="loggedUser != 0" 
            :listtitle="title" 
            :devices="borrowedDevices">
          </device-list>

          <!-- 
              this is the button which allow the admin to create a new User, 
              it will render when the User is admin
          -->
          <ion-button 
            v-if="loggedUser.is_admin === 1" 
            class="create-user-btn" 
            @click="openCreateUserModal">

              <ion-label> 
                create a new User?
              </ion-label>
          </ion-button>
        
      </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage,IonModal, IonHeader, IonButton, modalController} from '@ionic/vue';

// delete this
import UserLogin from '@/components/login/UserLogin.vue';
// import the DeviceList from components
import DeviceList from '@/components/list/DeviceList.vue';

// import the LoginModal from components
import LoginModal from '@/components/loginmodal/LoginModal.vue';
// import the CreateUserModal from components
import CreateUserModal from '../components/createuser/CreateUserModal.vue'



export default {
components: {
  IonPage, IonContent, IonModal, IonHeader, IonButton, UserLogin, LoginModal, CreateUserModal, DeviceList
},

data() 
{
  // thhe title for the List
  const title = 'Your Borrowed Devices';
  return {
    title
  }
},

  /*
    we call this everytime er mount this Page to the DOM
    1.  it will check if a User is logged, if not then it will 
        open up the Login Modal to scan our Chip
    2.  it will commit the getLoggedUser() mutation to get the user 
        token from sesseionstorage and save the User in our Store
    3.  then it will dispatch the showAllBorrowedDevicesByUser() action
        with the Users Fullname as the payload, this will detch all currently  
        borrowed devices by this User and save them in out store

  */
  mounted() {
    // check if user is logged
    if(this.loggedUser == 0){
      // open modal
      this.openModal();
    }
    // check the sessionstorage and save the user information in our store
    this.$store.commit('getLoggedUser');
    // fetch all borrowed devices by the logged User and save them in out store
    this.$store.dispatch('showAllBorrowedDevicesByUser', this.loggedUser.fullname );
  },

computed: {
  // getBorrowedDevice() getter allows us to access to the borrowedDevices state, 
  // and use them here as borrowedDevices
  borrowedDevices() {
    return this.$store.getters.getBorrowedDevice;
  },
  // getUser() getter allows us to access to the Users state, 
  // and use them here as loggedUser
  loggedUser() {
    return this.$store.getters.getUser;
  },
},

methods: {

  /*
    this is the Login Modal which scans the Chip to identify the User
    we create a Modal with LoginModal as its component and then we open it
    after that we wait until the Modal is closed, so that we can destructure 
    data and role out of it, if the role is confirm we disptach the Login() action 
    with the scanned ChipId as the payload to retrieve the User Information from 
    the Server and save them in our store
  */
  async openModal() {
    // create a Modal with LoginModal as the component
    const modal = await modalController.create({
      component: LoginModal,
    });
    // open the Modal
    modal.present();

    // destructure the data and role when it closes
    const { data, role } = await modal.onWillDismiss();
    // check role
    if (role === 'confirm') {
      // dispatch Login() with the scanned ChipID 
      // fetch the User from the Server and save it in our store
      this.$store.dispatch('Login', data );
    }
  },

  /*
    this is the createUserModal for the admin
    it opens a Modal where you must fill out the data for a new User
    this is then send to the server to create a new User
  */
  async openCreateUserModal() {
    // create a Modal with CreateUserModal as the component
    const modal = await modalController.create({
      component: CreateUserModal,
    });
    // open the Modal
    modal.present();

    // destructure the data and role when it closes
    const { data, role } = await modal.onWillDismiss();
    // check role
    if (role === 'confirm') {
      // dispatch createUser() with the data
      // send it to the server to create a new User
      this.$store.dispatch('createUser', data );
    }
  },
  
}
};


</script>

<style>

.create-user-btn{
  height: 13%;
  width: 95%;
  margin-left: 2.5%;
  margin-top: 2vh;
  font-size: 3vh;
  font-weight: 800;
  text-align: center;
  color: var(--ion-color-tertiary);
  --background: none;
  border-radius: 2vh;
  border: 3px dashed var( --ion-color-tertiary);
}

.create-user-btn:hover{
  background-color: var(--ion-color-tertiary-tint);
}

</style>

