<template>
    <ion-page>
        <ion-header> 
            <app-header> </app-header>
        </ion-header>
        <ion-content>
            <p> AddPage</p>
        </ion-content>
      </ion-page>
</template>

<script>
import { IonContent, IonPage, IonHeader } from '@ionic/vue';
import AppHeader from '../components/Header.vue';

export default {
components: {
    AppHeader, IonPage, IonContent, IonHeader
}
};

</script>

<style scoped>


</style>


