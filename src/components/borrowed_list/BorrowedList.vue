<template>
<!-- whole list component for the borrowed device -->
  <ion-list>
    <h2 class="title"> Your borrowed Devices </h2>
    <!--
        our custom structure for every item in the list 
        we iterate like a normal for-loop through all devices, 
        which are passed as a property
    -->
    <borrowed-device-list-item 
      v-for="device in devices"
       :key="device.id"
       :device="device">
    </borrowed-device-list-item>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import BorrowedDeviceListItem from './BorrowedListItem.vue'

export default {
  // the devices property
  props: [ 'devices' ],
  components: { IonList, BorrowedDeviceListItem },

}
</script>

<style scoped>

ion-list {
  display: block;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 95%;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: 2.5%;
  background-color: var( --ion-color-medium);
  border-radius: 1vh;
  
}
.title{
  font-size: 4vh;
  font-weight: bold;
  margin-left: 2vh;
  margin-bottom: 4vh;
  text-align: center;
}


  
</style>