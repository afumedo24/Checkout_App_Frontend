<template>
    <ion-item>
      <ion-thumbnail slot="start"> 
        <ion-img :src="device.image" :alt="device.name"/>
      </ion-thumbnail>
      <ion-label>
        <h2> {{ device.name }} </h2>
        <p :class="device.status === 1 ? 'status-green' : 'status-red'"> {{ displaystatus(device.status) }}</p>
      </ion-label>
      <ion-button @click="borrowDevice()"> Borrow </ion-button>
    </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonThumbnail, IonImg } from '@ionic/vue';
import axios from 'axios';

export default {
  props: ['device'],
  components: {
    IonImg, 
    IonItem, 
    IonLabel , 
    IonThumbnail, axios
  },

  methods: {
    borrowFunction() {
      this.$router.push({ path: `borrow/${this.device.id}`});
    },
     //method for changing the device status first prototype
     async borrowDevice() {
            console.log("Borrowing Device: " + this.device.name );

            const apiUrl = 'http://localhost:8300/api/devices/' + this.device.id; 

            try{
                const res = await axios.put(apiUrl, { status: 2 });
                console.log(res.data);
                if(res === 'Success'){
              this.$router.push({ path: `borrow/${this.device.id}`});
            }
            }
            catch(err) {
                console.log(err);
            }
        },

  },
  computed: {
    
    // damit wir den Device Status in einem Wort umwandeln
    displaystatus() {
      return (status) => {
        if (status === 1) {
          return 'Available';
        }
        else {
          return "not Available";
        }
      }
    }
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