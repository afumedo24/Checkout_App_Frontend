<template>
  <ion-app>
    <!-- den AppHeader hier eingefügt damit es sich nicht immer neu rendert -->
    <app-header> </app-header>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import AppHeader from './components/header/Header.vue'

</script>
