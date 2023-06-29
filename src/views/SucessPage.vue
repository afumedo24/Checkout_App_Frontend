<template>
  <ion-page>
    <ion-content>
        <successfull-card :device="device"> </successfull-card>
    </ion-content>
  </ion-page>
</template>

<script>
import SuccessfullCard from '../components/success/SuccessfullCard.vue'

export default {
    components: {
        SuccessfullCard
    },

    computed: {
        // get the selected device from the store
        device() {
            return this.$store.getters.getDevice;
        }
    },

}
</script>

<style scoped>

</style>