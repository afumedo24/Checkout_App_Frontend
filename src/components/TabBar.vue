<template>
    <div>
        <ion-tabs>  
            <ion-router-outlet></ion-router-outlet>
       
            <ion-tab-bar slot="bottom" color="light">  
                <ion-tab-button tab="home" class="home-tab" href="/home">
                    <ion-icon :icon="homeSharp" aria-hidden="true"></ion-icon>
                    <ion-label>Home</ion-label>  
                </ion-tab-button>  

                <!-- -->
            

                <ion-tab-button tab="list" class="list-tab" href="/list">  
                    <ion-icon :icon="listSharp" aria-hidden="true"></ion-icon>
                    <ion-label>List</ion-label>  
                </ion-tab-button>  
            </ion-tab-bar>  
        </ion-tabs> 

        <ion-fab vertical="bottom" horizontal="center" slot="fixed"> 
            <ion-fab-button href="/add">
                <ion-icon  :icon="qrCodeSharp" size="large"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </div>
</template>

<script>

import { IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon, IonFab, IonFabButton, IonLabel } from '@ionic/vue';
import { homeSharp, listSharp, qrCodeSharp} from 'IonIcons/icons'

export default {
components: {
    IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon, IonFab, IonFabButton, IonLabel, 
},
data() {
    

    return {
        homeSharp, qrCodeSharp, listSharp, 
    };
},
}
</script>

<style scoped>
  
  
ion-fab-button {
    height: 9vh;
    width: 9vh;
    --background: linear-gradient(130deg,#FFB600, #ED8B00);
    --background-hover: var(--ion-color-secondary-shade);
    --border-radius: 15px;
    --box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
    margin-bottom: 3vh;
}

ion-tab-bar{
 background: var(--ion-color-primary);
 height: 9vh;
 display: flex;
 justify-content: space-evenly;
}
ion-tab-button{
    background: var(--ion-color-primary);
    margin-bottom: 1vh;
    margin-right: 1vh;
    margin-left: 3.3vh;

}




ion-icon{
    height: 5vh;
    width: 5vh;
    color: var(--ion-color-light);
}
ion-label{
    font-size: 1.6vh;
    color: var(--ion-color-light);
}



</style>