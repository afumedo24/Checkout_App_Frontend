<template>
  <ion-page>
    <ion-content>
      <!-- 
      <ion-refresher @ionRefresh="refeshData" slot="fixed" :pull-factor="0.3" :pull-min="50" :pull-max="100">
        <ion-refresher-content> </ion-refresher-content>
      </ion-refresher>
        -->
      <device-list :devices="devices"></device-list> 
    </ion-content>
</ion-page>
</template>

<script>
import { IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/vue';
import DeviceList from '@/components/list/DeviceList.vue';




export default {
  components: {
    IonContent,
    IonPage,
    DeviceList, IonRefresher, IonRefresherContent 
  },
  
  // every time we inject this page in the DOM this method is called
  mounted() {
    this.$store.dispatch('showAllDevices');   // action from store being called to fetch all Devices from api
  },

  // all devices are returned to this fucntion, which is being called above for the iteration of the list 
  computed: {
    devices() {
      return this.$store.getters.getAllDevices;
    },

  },
  methods: {
    refeshData() {
      console.log("refresh");
      this.$store.dispatch('showAllDevices');  
    }
  },
}
</script>

<style scoped>

</style>