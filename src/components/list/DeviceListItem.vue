<template>
    <ion-item>
      <ion-thumbnail slot="start"> 
        <ion-img :src="device.image" :alt="device.name"/>
      </ion-thumbnail>
      <ion-label>
        <h2> {{ device.name }} </h2>
        <p :class="device.status == 'Available' ? 'status-green' : 'status-red'"> {{ device.status  }}</p>
      </ion-label>
      <ion-button @click="borrowFunction()"> Borrow </ion-button>
    </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonThumbnail, IonImg } from '@ionic/vue';

export default {
  props: ['device'],
  components: {
    IonImg, 
    IonItem, 
    IonLabel , 
    IonThumbnail
  },
  methods: {
    borrowFunction() {
      //this.$store.dispatch('updateDeviceStatus', this.device );
      this.$store.commit('showSingleDevice', this.device );
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
</style>