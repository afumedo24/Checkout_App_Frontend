<template>
  <!-- 
      this is the structure for all the items in the borrowed device list 
      a thumbnail for the device images, the device name, device status and 
      when it was borrowed,  also a button to return the device
  -->
    <ion-item>
      <ion-thumbnail slot="start"> 
        <ion-img :src="device.image" :alt="device.name"/>
      </ion-thumbnail>
      <ion-label>
        <h2> {{ device.name }} </h2>
        <!-- here the class is dynamically assigned so that we get the appropriate color -->
        <p :class="device.status == 'Available' ? 'status-green' : 'status-red'"> {{ device.status }} </p>
        <p> on {{ device.receive_date }} </p>
      </ion-label>
      <ion-button @click="returnFunction()"> Return </ion-button>
    </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonThumbnail, IonImg } from '@ionic/vue';

export default {
  // the devices property
  props: ['device'],
  components: {
    IonImg, 
    IonItem, 
    IonLabel , 
    IonThumbnail
  },
  methods: {

    /* 
      this is for the Return button, it commits the chosen device in the store for the retrun process
      also it redirects us to the formpage
    */
    returnFunction() {

      /*
        we need to filter the data out from the device Property because we
        are receiving a different object than in the "all device list"
        and therefor to make it workout we are only storing the properties we need
        and then commit it to our store
      */
      const devicedata = {
        id: this.device.device_id,
        name: this.device.name
      }
      // here the saveSingleDevice() mutation is commited with the selected device
      this.$store.commit('saveSingleDevice', devicedata );
      // this just redirects us to the form page 
      this.$router.push("borrow/form");
    },
  },

}
</script>

<style scoped>

ion-item {
  width: 95%;
  height: 15vh;
  padding-left: 2.5vh;
  padding-right: 0vh;
  border-radius: 1vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: white; 
  margin-left: 2.5%;
  margin-bottom: 1vh;
  display: flex;
  

}
ion-thumbnail{
  width: 8vh;
  height: 8vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 50%;
  
}
ion-img {
  object-fit: scale-down;
  border-radius: 50%;
}
  
  .status-green{
  color: green;
  }
  .status-red{
    color: red;
  }


  ion-label {
    margin-left: 2vh;
  }
  h2{
    font-size: 3vh;
    font-weight: 500;
  }

  p{
    font-size: 2vh;
    font-weight: 380;
    display: inline;
  }

  ion-button {
    --background: var( --ion-color-secondary-shade);
    --background-hover: var(--ion-color-secondary-shade);
    height: 6.5vh;
    width: 14.5vh;
    margin-right: 0;
    font-size: 2.4vh;
    font-weight: 700;
    color: white;
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
  }
</style>