<template>
    <ion-header class="header">
      <ion-toolbar class="toolbar"> 
          <ion-button  @click="cancel" slot="start" class="btn">Cancel</ion-button>
        <ion-title class="title">Create a new User</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card class="card">
        <ion-card-title class="label"> Fill out the field </ion-card-title>
        <ion-item class="item">
        <ion-input label-placement="stacked" label="Enter the Username" v-model="data.username" placeholder="Username"></ion-input>
      </ion-item>

      <ion-item class="item">
        <ion-input label-placement="stacked" label="Enter the Fullname" v-model="data.fullname" placeholder="Fullname"></ion-input>
      </ion-item>


      <ion-item class="item">
        <ion-checkbox v-model="data.is_admin"> Is User is admin? </ion-checkbox>
      </ion-item>
      <ion-button expand="block" @click="confirm" :strong="true" class="confirm"> Create User </ion-button>
    </ion-card>
    </ion-content>
  </template>
  
  <script lang="ts">
    import {
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonButton,
      IonItem,
      IonInput,
      modalController, IonCheckbox
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      name: 'Modal',
      components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonItem, IonInput, IonCheckbox },
      data() {
        return { 
            data: { 
                    username: '', 
                    fullname: '', 
                    is_admin: false,
                }
            }
      },
      methods: {
        cancel() {
          return modalController.dismiss(null, 'cancel');
        },
        confirm() {
          return modalController.dismiss(this.data, 'confirm');
        },
      },
    });
  </script>

  <style scoped>

  .header{
    height: 9vh;
}

.toolbar{
    --background: var(--ion-color-primary);
    height: 100%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15)  0 2.6px;
    justify-content: center;
    align-items: center;
}


.btn{
    --background: var( --ion-color-tertiary);
    height: 5vh;
    width: 12vh;
    color: var(--ion-color-light);
    margin-left: 3vh;
    font-size: 2vh;
    font-weight: 450;
    --border-radius: 1vh;
    --box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.title{
    color:  var(--ion-color-light);
    font-size: 3vh;
    font-weight: 600;
    margin-left: 2vh;
}
.card{
    background: var(--ion-color-medium);
    margin-top: 5%;
    height: 90%;
    border-radius: 1vh;
    --box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.label{
    font-size: 4vh;
    font-weight: 600;
    text-align: center;
    margin-top: 2vh;
}
.item{
    --background: white;
    width: 95%;
    height: 7vh;
    margin-top: 5%;
    margin-left: 2.5%;
    border-radius: 1vh;
}
.confirm{
    --background: var(--ion-color-success);
    height: 10%;
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    font-size: large;
    font-weight: 500;
    
}

  </style>