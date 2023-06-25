<template>
    <ion-toolbar>
        <ion-avatar slot="start"> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/NFC_logo.svg/2000px-NFC_logo.svg.png"/>
        </ion-avatar>
        <ion-title> Checkout App </ion-title>
    </ion-toolbar>
</template>

<script>
import { IonToolbar, IonTitle, IonAvatar } from '@ionic/vue';
export default {
components: {
    IonToolbar ,IonTitle, IonAvatar, 
},
}
</script>

<style scoped>

ion-toolbar{
    --background: var(--ion-color-primary);
    height: 9vh;
    display: flex;
    
}

ion-avatar {
  --border-radius: 0px;
  height: 6vh;
  width: 6vh;
  margin-left: 2vh;
}

ion-title{
    color: white;
    font-size: 3.3vh;
    font-weight: 550;
}

</style>
