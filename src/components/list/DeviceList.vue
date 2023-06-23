<template>

  <ion-list>
    <h2 class="title"> List of all Devices </h2>
    <device-list-item 
      v-for="device in devices"
       :key="device.id"
       :device="device">
    </device-list-item>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import DeviceListItem from './DeviceListItem.vue'
export default {
  props: [ 'devices' ],
  components: { IonList, DeviceListItem },

}
</script>

<style scoped>

ion-list {
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 95%;
  margin-top: 11vh;
  margin-left: 2.5%;
  background-color: #D9D9D9;
  border-radius: 1vh 1vh 0 0;
  
}
.title{
  font-size: 4vh;
  font-weight: bold;
  margin-left: 2vh;
  margin-bottom: 4vh;
  text-align: center;
}


  
</style>