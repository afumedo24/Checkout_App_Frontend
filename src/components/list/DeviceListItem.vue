<template>
  <!-- 
      this is the structure for all the items in the device list 
      a thumbnail for the device images, the device name and
      the device status also a button to borrow the device
  -->
    <ion-item>
      <!-- the image for the displayed device -->
      <ion-thumbnail slot="start"> 
        <ion-img :src="device.image" :alt="device.name"/>
      </ion-thumbnail>
      <!-- the name for the displayed device -->
      <ion-label>
        <h2> {{ device.name }} </h2>
        <!-- here the class is dynamically assigned so that we get the appropriate color -->
        <p :class="device.status == 'Available' ? 'status-green' : 'status-red'"> {{ device.status }}</p>
      </ion-label>
      <!-- 
          we check the device.status to render the right button 
          if available, then its a Button with Borrow Text, else with Return
      -->
      <ion-button v-if="device.status === 'Available'" @click="borrowFunction()" class="borrow-btn"> Borrow </ion-button>
      <ion-button v-else @click="borrowFunction()"> Return </ion-button>
    </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonThumbnail, IonImg } from '@ionic/vue';

export default {
  // device as a prop
  props: ['device'],
  components: {
    IonImg, 
    IonItem, 
    IonLabel , 
    IonThumbnail
  },
  methods: {

    /* 
      this is for the Borrow button, it commits the chosen device in the store 
      so it can be called in the form page 
      also it redirects us to the formpage
    */
    borrowFunction() {
      // here the saveSingleDevice() mutation is commited with the selected device
      this.$store.commit('saveSingleDevice', this.device );
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

  .borrow-btn{
    --background: var( --ion-color-secondary-tint);
  }



</style>