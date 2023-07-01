<template>
  <ion-page>
      <ion-content>

      
          <user-login> 
          </user-login>

          <borrowed-device-list v-if="loggedUser != 0" :devices="borrowedDevices" >
          </borrowed-device-list>

          <ion-button v-if="loggedUser.is_admin === 1" class="create-user-btn" @click="createNewUser">
            <ion-label> 
              create a new User?
            </ion-label>
            
          </ion-button>
        
      </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage,IonModal, IonHeader, IonButton, modalController} from '@ionic/vue';
import UserLogin from '@/components/login/UserLogin.vue';

import BorrowedDeviceList from '../components/borrowed_list/BorrowedList.vue'

import LoginModal from '@/components/loginmodal/LoginModal.vue';



export default {
components: {
  IonPage, IonContent, IonModal, IonHeader, IonButton, UserLogin, BorrowedDeviceList, LoginModal
},

  mounted() {
    this.$store.commit('getLoggedUser');
    this.$store.dispatch('showAllBorrowedDevicesByUser', this.loggedUser.fullname );

    if(this.loggedUser == 0){
      this.openModal();
    }

  },

computed: {
  borrowedDevices() {
      return this.$store.getters.getBorrowedDevice;
    },
    loggedUser() {
      return this.$store.getters.getUser;
    },
},

methods: {
  createNewUser() {
    // send to nect page 
  },

  // the nfc chip modal at the start
  async openModal() {
    console.log("Modal opened")
    const modal = await modalController.create({
      component: LoginModal,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
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

