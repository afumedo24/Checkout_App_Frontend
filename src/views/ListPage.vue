<template>
  <ion-page>
    <ion-content>
      <!-- we pass all stored devices as a Property for the component -->
      <device-list :devices="devices"></device-list> 
    </ion-content>
</ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import DeviceList from '../components/list/DeviceList.vue';

export default {
  components: {
    IonContent,
    IonPage,
    DeviceList
  },
  
  /*
    every time we mount this page in the DOM this method is called
    the getAllDevices() action is being dispatched and it fetches
    all Devices from the server, 
    we are calling it so often because when we borrow a device 
    it will always display the new status of all devices, you could 
    see it as a page refresh
  */

  mounted() {
    this.$store.dispatch('getAllDevices');   
  },

  // all devices are returned to this fucntion, which is being called above for the iteration of the list 
  computed: {
    devices() {
      return this.$store.getters.getAllDevices;
    },

  },
}
</script>

<style scoped>

</style>