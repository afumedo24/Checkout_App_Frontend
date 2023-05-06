<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
              <ion-buttons slot="end" @click="closeScanner()" >
                <ion-button>
                  <ion-icon slot="icon-only" :icon="closeOutline" />
                </ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <div class="scanner">
              <StreamBarcodeReader
                @decode="onDecode()"
              />
            </div>
          </ion-content>
    </ion-page>
</template>

<script>
import { IonButtons, IonButton, IonToolbar, IonIcon, IonContent, modalController, } from '@ionic/vue';
import { StreamBarcodeReader} from 'vue-qrcode-reader';
import {
  closeOutline
} from 'IonIcons/icons';


export default {
    name: 'Scanner',
    components: {
        IonButtons, IonButton, IonIcon, IonContent, IonToolbar, modalController, StreamBarcodeReader,
    },
    data() {
    closeOutline
    },
    method: {
        onDecode(result) {
            modalController.dismiss({dismissed: true}, result);
        },
        closeScanner() {
            modalController.dismiss({dismissed: true});
        },
    },

};

</script>

<style scoped>


</style>


