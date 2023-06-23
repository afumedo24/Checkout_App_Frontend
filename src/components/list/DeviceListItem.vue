<template>
    <ion-item>
        <ion-thumbnail slot="start"> 
          <ion-img :src="device.image" :alt="device.name"/>
        </ion-thumbnail>
        <ion-label>
          <h2> {{ device.name }} </h2>
          <p :class="device.status === 1 ? 'status-green' : 'status-red'"> {{ displaystatus(device.status) }}</p>
        </ion-label>
          <ion-button @click="borrowDevice()" class="borrow-button"  slot="end"> Borrow </ion-button>
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
          return 'Verfügbar';
        }
        else {
          return "Nicht Verfügbar";
        }
      }
    }
  },
}
</script>

<style scoped>

ion-item {
  width: 100%;
  padding: 1.3vh;
  border-block-end: 1.5px solid #7E7E7E;
  --background: white; 
}

ion-img {
  width: 6vh;
  height: 6vh;
  object-fit: scale-down;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 50%;
}
  
  .status-green{
  color: green;
  }
  .status-red{
    color: red;
  }

  h2{
    font-size: 2.5vh;
    font-weight: 490;
  }

  p{
    font-size: 1.7vh;
    font-weight: 300;
  }

  .borrow-button{
    --background: var( --ion-color-secondary-shade);
    height: 4.5vh;
    width: 9.5vh;
    margin: 0 0;
    font-size: 1.6vh;
  }
</style>