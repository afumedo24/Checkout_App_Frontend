<template>
  <ion-page>
    <ion-content>
      <!-- we pass all stored devices as a Property for the component and also the title -->
      <device-list :listtitle="title" :devices="devices"></device-list> 
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

  data() {
    // the title for the list 
    const title = "List of All Devices";
    return {
      title
    }
  },
  
  /*
    every time we mount this page in the DOM this method is called
    the getAllDevices() action is being dispatched and it fetches
    all Devices from the server, 
    we are calling it so often because when we borrow a device 
    it will always display the newest status of all devices, you could 
    see it as a page refresh
  */

  mounted() {
    this.$store.dispatch('getAllDevices');   
  },

  
  computed: {
    /*
      after fetching the devices from the Server and storing them in the store 
      with the function above, we need to access them, this is done with this function, 
      here we us call the getter for the device state getAllDevices(), which allows us to 
      get the devices state from our store, then this is returned to devices() and now 
      we can use it as a normal variable
    */
    devices() {
      return this.$store.getters.getAllDevices;
    },

  },
}
</script>

<style scoped>

</style>