<template>
    <div> 
        <ion-searchbar show-cancel-button="focus" :debounce="1000" @ionInput="handleInput($event)"></ion-searchbar>
        <ion-list>
            <ion-item v-for="result in results" :key="result">
                <ion-label>{{ result }}</ion-label>
              </ion-item>
        </ion-list>
    </div>
</template>

<script>

import { IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/vue'

export default {
components: {
    IonSearchbar, IonList, IonItem, IonLabel
},
data() {
    const data = ['Rasberry Pi', 'Keyboard', 'Mouse', 'Macbook', 'Scanner', 'Tisch'];
    const results = data;
    return { data, results };
},
methods: {
    handleInput(event) {
        const query = event.target.value.toLowerCase();
        this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
    },
},
}
</script>


<style>
ion-searchbar {
    width: 80%;
    border: 1rem;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: .3s ease;
}
</style>