<template>
    <ion-toolbar>
        <ion-avatar slot="start"> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/NFC_logo.svg/2000px-NFC_logo.svg.png"/>
        </ion-avatar>
        <ion-title> Checkout App </ion-title>
        <ion-searchbar show-cancel-button="focus" slot="end"></ion-searchbar>
    </ion-toolbar>
</template>

<script>
import { IonToolbar, IonTitle, IonAvatar} from '@ionic/vue';
export default {
components: {
    IonToolbar ,IonTitle, IonAvatar
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
}
ion-title{
    color: white;
}
ion-searchbar{
    width: 400px;
    --padding: 10px;
   /* --padding-left: 2.5rem; */
    --padding-left: 10px;
    --border: 2px solid transparent;
    --border-radius: 8px;
    --outline: none;
    --background-color: var(--ion-color-light-contrast)
    color: black;
    --transition: .3s ease;
    text-align: left;
}
ion-searchbar:focus , ion-searchbar:hover  {
    --outline: none;
    --border-color: rgba(234,76,137,0.4);
    --background-color: #fff;
    --box-shadow: 0 0 0 4px rgb(0 38 58/ 30%);
}

ion-searchbar:icon{
    --color: black;
}


/*
ion-searchbar {
     width: 400px;
     --justify-content: left;
     text-align: left;
     padding: 10px;
     margin-right: 15px;
     margin-top: 3px;
     margin-bottom: 3px;
     --border-radius: 8px;
     color: black;
}
*/

</style>
