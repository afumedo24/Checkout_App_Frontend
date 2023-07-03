<template>
<!-- here is the list component -->
  <ion-list>
    <!-- the list tilte is passed as prop so that we can set dynamically -->
    <h2 class="title"> {{ this.listtitle }} </h2>
    <!--
        our custom structure for every item in the list 
        we iterate like normal for-loop through all devices, 
        which are passed as a property
    -->
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
  // devices and listtitle prop
  props: [ 'devices', 'listtitle' ],
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
  color: black;
  font-size: 4vh;
  font-weight: bold;
  margin-left: 2vh;
  margin-bottom: 4vh;
  text-align: center;
}


  
</style>