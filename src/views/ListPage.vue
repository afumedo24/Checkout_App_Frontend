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
    axios, ref
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
    
    async loadDevices() {
      const apiUrl = 'http://localhost:8300/api/devices'; 

      await axios.get(apiUrl)
          .then((response) => {
          this.devices = response.data;
          //console.log(response.data);
          console.log('Devices:', this.devices);
          // Do something with the device data in your app
          })
          .catch((err) => {
          console.error(err);
          // Handle error scenarios in your app
          });
    },
  }
}
</script>

<style scoped>

</style>