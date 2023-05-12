<template>
    <div>
        <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
        <h2>The decoded value in QR/barcode is</h2>
        <h2>{{ decodedText }}</h2>
    </div>
</template>

<script>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
    components: {
        StreamBarcodeReader, 
    },
    data() {
        const decodedText = ref("");

        const onLoaded = () => {
        console.log("loaded");
        };

        const onDecode = (text) => {
        decodedText.value = text;
        };

        return { decodedText, onDecode, onLoaded };
    },

}
</script>

<style scoped>
a {
    color: #42b983;
  }
  .information {
    margin-top: 100px;
  }
</style>