<template>
  <ion-page>
    <ion-content>
      <device-list :devices="devices"></device-list> 

<!-- 
      <ion-infinite-scroll @ionInfinite="loadData()" :disabled="allDevicesLoaded">
        <ion-infinite-scroll-content
          loading-text="Loading more devices..."
          :finished-text="allDevicesLoaded ? 'All devices loaded' : ''"
        ></ion-infinite-scroll-content>
      </ion-infinite-scroll>

      <ion-spinner v-if="isLoading"></ion-spinner>
-->
    </ion-content>
</ion-page>
</template>

<script>
import { IonContent, IonPage, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';
import DeviceList from '@/components/list/DeviceList.vue';
import axios from 'axios';
import { ref } from 'vue';



export default {
  components: {
    IonContent,
    IonPage,
    DeviceList, IonInfiniteScroll, IonInfiniteScrollContent,
    axios, ref, 
  },
  data() {
    const devices = ref('');

    return {
      devices,
    };
  },

  mounted() {
    this.loadDevices();
  },

  methods: {
    
    // function to get all the devices from api to display the devices
    async loadDevices() {
      const apiUrl = 'http://localhost:8300/api/devices'; 
      try {
          const response = await axios.get(apiUrl);
          this.devices = response.data;
      } catch(err) {
          console.error(err);
      }
    }
  }

}
</script>

<style scoped>

</style>