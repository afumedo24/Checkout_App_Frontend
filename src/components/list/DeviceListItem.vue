<template>
    <ion-item class="device-item">
        <ion-thumbnail slot="start"> 
          <img :src="device.image" :alt="device.name"/>
        </ion-thumbnail>
        <ion-label>
          <h2>{{ device.name }}</h2>
          <p :class="device.status === 'Available' ? 'status-green' : 'status-red'"> {{ device.status }}</p>
        </ion-label>
        <ion-button class="borrow-button" slot="end" @click="borrowDevice(device)"> Borrow</ion-button>
      </ion-item>
</template>

<script>
import { IonContent, IonPage, IonHeader, IonList, IonItem, IonLabel, IonThumbnail } from '@ionic/vue';

export default {
    props: ['device'],
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonList, 
    IonItem, 
    IonLabel , 
    IonThumbnail,
  },
  methods: {
    borrowDevice(device) {
      // Implement your borrowing functionality here
      console.log('Borrowing device:', device.name);
    },
  },
}
</script>

<style scoped>

ion-item {
    padding: 10px;
    border: 1px solid #ccc;
    display: flex;
   
}
  
.device-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
}
  
  .status-green{
  color: green;
  }
  .status-red{
    color: red;
  }
  .borrow-button{
    --background: var( --ion-color-secondary-shade);
    height: 4.5vh;
    width: 9.5vh;
    margin: 0 0;
    font-size: 16px;
  }
</style>