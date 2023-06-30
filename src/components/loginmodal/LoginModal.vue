<template>
    <ion-modal :show-modal="loggedUser != 0">
        <ion-content>
          <!-- NFC scanning content here (e.g., instructions or progress) -->
          <ion-button @click="handleNfcScanning">Scan NFC Chip</ion-button>
        </ion-content>
      </ion-modal>
</template>

<script>
export default {
   
    computed: {
        loggedUser() {
            return this.$store.getters.getUser;
        }
    },
    
    methods: {
      // Function to handle NFC scanning and data processing
      handleNfcScanning() {
        // Implement NFC scanning logic using the USB NFC chip scanner
        // Process the scanned NFC data (e.g., extract the username)
        // Close the modal programmatically
        this.isScanned = false;
      },
    },
}
</script>

<style>

</style>
