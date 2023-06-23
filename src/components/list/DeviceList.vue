<template>

  <ion-list>
    <h2 class="title"> Alle Geräte </h2>
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
  width: 90%;
  margin-top: 10%;
  margin-left: 5%;
  background-color: #D9D9D9;
  border-radius: 15px 15px 0px 0px;
  
}
.title{
  font-size: 4vh;
  font-weight: bolder;
  margin-left: 2vh;
}


  
</style>