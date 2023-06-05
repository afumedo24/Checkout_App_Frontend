<template>
  <ion-list class="device-list">
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

.device-list {
    display: block;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    background-color: grey;
    border-radius: 20px;
    
  }
  
</style>