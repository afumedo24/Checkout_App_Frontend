<template>
  <ion-page>
    <ion-header>
  <ion-toolbar></ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- <device-list></device-list> -->

      

      <div class="device-list-container">
        
          <ion-list class="device-list">
            <h2 class="title"> Alle Geräte </h2>
                <ion-item v-for="device in displayedDevices" :key="device.id" class="device-item">  <!-- devices -->
                  <ion-thumbnail slot="start"> 
                    <img :src="device.image" :alt="device.name"/>
                  </ion-thumbnail>
                  <ion-label>
                    <h2>{{ device.name }}</h2>
                    <p :class="device.status === 'Available' ? 'status-green' : 'status-red'"> {{ device.status }}</p>
                  </ion-label>
                  <ion-button class="borrow-button" slot="end" @click="borrowDevice(device)"> Borrow</ion-button>
                </ion-item>

                <ion-infinite-scroll @infinite="loadMoreDevices" :disabled="allDevicesLoaded">
                  <ion-infinite-scroll-content
                    loading-text="Loading more devices..."
                    :finished-text="allDevicesLoaded ? 'All devices loaded' : ''">
                  </ion-infinite-scroll-content>
                </ion-infinite-scroll>

   <!--        
               <ion-item v-for="device in devices" :key="device.id">
              <ion-label>{{ device.name }}</ion-label>
            </ion-item>
             -->
          </ion-list>
        </div>
     
    </ion-content>
</ion-page>
</template>

<script>
import { IonContent, IonPage, IonHeader, IonList, IonItem, IonLabel, IonThumbnail, IonInfiniteScroll, IonInfiniteScrollContent,  } from '@ionic/vue';
import DeviceList from '@/components/list/DeviceList.vue';
import axios from 'axios';



export default {
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonList, IonItem, IonLabel , IonThumbnail, IonInfiniteScroll, IonInfiniteScrollContent,
    DeviceList,
    axios
  },
  data() {
    return {
      devices: [
        { id: 1, name: 'Device 1' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 2, name: 'Device 2' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 3, name: 'Device 3' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
        { id: 4, name: 'Device 4' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 5, name: 'Device 5' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
        { id: 6, name: 'Device 6' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
        { id: 7, name: 'Device 7' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 8, name: 'Device 8' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 9, name: 'Device 9' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 10, name: 'Device 10' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
        { id: 11, name: 'Device 11' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 12, name: 'Device 12' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Available'},
        { id: 13, name: 'Device 13' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
        { id: 14, name: 'Device 14' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
        { id: 15, name: 'Device 15' , image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1628010471000', status: 'Not Available'},
      ],
      displayedDevices: [],
      batchSize: 8, // Number of devices to load at a time
      allDevicesLoaded: false,
      Devices: []
    };
  },
  mounted() {
    this.loadMoreDevices();
    this.loadDevices();
  },
  methods: {
  
    loadMoreDevices() {
      const startIndex = this.displayedDevices.length;
      const endIndex = startIndex + this.batchSize;

      // Check if all devices have been loaded
      if (startIndex >= this.devices.length) {
        this.allDevicesLoaded = true;
        return;
      }

      // Load the next batch of devices
      this.displayedDevices = this.displayedDevices.concat(this.devices.slice(startIndex, endIndex));


    }, 
    borrowDevice(device) {
      // Implement your borrowing functionality here
      console.log('Borrowing device:' + device.name);
    },

    loadDevices() {
      const apiUrl = 'http://localhost:8300/api/devices'; 

      axios.get(apiUrl)
          .then((response) => {
          this.Devices = JSON.stringify(response.data);
          //console.log(response.data);
          console.log('Devices:', this.Devices);
          // Do something with the device data in your app
          })
          .catch((err) => {
          console.error(err);
          // Handle error scenarios in your app
          });
    }
  },
}
</script>

<style scoped>
.device-list {
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  background-color: #D9D9D9;
  border-radius: 20px;
  
}
.device-item {
  padding: 10px;
  border-block-end: 1px solid #7E7E7E;
  display: block;
  background-color: #D9D9D9;
  object-fit: cover; 
}

.device-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
}

.status-green{
color: var(--ion-color-success);
}
.status-red{
  color: var(--ion-color-danger);
}
.borrow-button{
  --background: var( --ion-color-secondary-shade);
  height: 4.5vh;
  width: 9.5vh;
  margin: 0 0;
}
.title{
  font-size: 28px;
  font-weight: bolder;
  margin-left: 10px;
}


</style>