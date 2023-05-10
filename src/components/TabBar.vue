<template>
    <div>
        <ion-tabs>  
            <ion-router-outlet></ion-router-outlet>
       
            <ion-tab-bar slot="bottom" color="light">  
                <ion-tab-button tab="home" href="/home">
                    <ion-icon aria-hidden="true" :icon="homeSharp"> </ion-icon>
                    <ion-label>Home</ion-label>  
                </ion-tab-button>  

                <!-- -->
            

                <ion-tab-button tab="list" href="/list">  
                    <ion-icon aria-hidden="true" :icon="listSharp" ></ion-icon>
                    <ion-label>List</ion-label>  
                </ion-tab-button>  
            </ion-tab-bar>  
        </ion-tabs> 

        <ion-fab vertical="bottom" horizontal="center" slot="fixed"> 
            <ion-fab-button tab="add" router-link="/add">
                <ion-icon  :icon="addSharp" size="large"></ion-icon>
            </ion-fab-button>
        </ion-fab>
    </div>
</template>

<script>

import { IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon, IonFab, IonFabButton } from '@ionic/vue';
import { homeSharp, addSharp, listSharp, } from 'IonIcons/icons'

export default {
components: {
    IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon, IonFab, IonFabButton
},
data() {
    
    return {
        homeSharp, addSharp, listSharp,
    };
},
}
</script>

<style scoped>
  
  
ion-fab-button {
    scale: 1.27;
    --background: linear-gradient(130deg,#FFB600, #ED8B00);
    --background-hover: var(--ion-color-primary-shade);
    --border-radius: 15px;
    --box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
    --color: black;
    margin-bottom: 30px;;
}


ion-tab-bar{
 background: var(--ion-color-primary);
 height: 70px;;

}
ion-tab-button{
    background: var(--ion-color-primary);
    padding: px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: -3px;
}

ion-icon{
    color: var(--ion-color-light);
    scale: 1.2;
}
ion-label{
    color: var(--ion-color-light);
}



</style>