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

ion-avatar {
  --border-radius: 4px;
  padding: 10px;
  margin-left: 20px;
}
ion-toolbar{
    --background: var(--ion-color-primary);
    height: 60px;
}
ion-title{
    color: white;
}

</style>
