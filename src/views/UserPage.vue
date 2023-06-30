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
import { IonContent, IonPage,IonModal, IonHeader} from '@ionic/vue';
import UserLogin from '@/components/login/UserLogin.vue';

import BorrowedDeviceList from '../components/borrowed_list/BorrowedList.vue'

import LoginModal from '@/components/loginmodal/LoginModal.vue';


export default {
components: {
  IonPage, IonContent, IonModal, IonHeader, UserLogin, BorrowedDeviceList, LoginModal
},

mounted() {
  this.$store.commit('getLoggedUser');
  this.$store.dispatch('showAllBorrowedDevicesByUser', this.loggedUser.fullname )

  },

computed: {
  borrowedDevices() {
      return this.$store.getters.getBorrowedDevice;
    },
    loggedUser() {
      return this.$store.getters.getUser;
    },
},

method: {
  createNewUser() {
    // send to nect page 
  },
}


};


</script>

<style>

.create-user-btn{
  height: 13%;
  width: 95%;
  margin-left: 2.5%;
  padding: 2vh;
  font-size: 3vh;
  font-weight: 800;
  text-align: center;
  color: var(--ion-color-tertiary);
  --background: none;
  border-radius: 2vh;
  border: 3px dashed var( --ion-color-tertiary);
}

.create-user-btn:hover{
  background-color: var(--ion-color-primary-tint);
}

</style>

