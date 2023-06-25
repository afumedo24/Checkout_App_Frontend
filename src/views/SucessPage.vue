<template>
  <ion-page>
    <ion-content>
        <successfull-card :device="device"> </successfull-card>
    </ion-content>
  </ion-page>
</template>

<script>
import SuccessfullCard from '../components/success/SuccessfullCard.vue'
import { ref } from 'vue';
import axios from 'axios';


export default {
    components: {
        SuccessfullCard
    },
    data() {
        const id = this.$route.params.id;
        const device = ref('');
        return { id, device }
    },
    mounted() {
        this.getSingleDeviceFromApi();
    },
    methods: {
        getSingleDeviceFromApi() {
            const apiUrl = 'http://localhost:8300/api/devices/' + this.id; 

            axios.get(apiUrl)
            .then((response) => {
            this.device = response.data;
            })
            .catch((err) => {
                console.error(err.message);
                console.error(err);
            });
        }
    }

}
</script>

<style scoped>

</style>