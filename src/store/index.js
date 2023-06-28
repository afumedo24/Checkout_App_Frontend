
import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router';
import VueJwtDecode from 'vue-jwt-decode';

const apiUrl = "http://localhost:8300/api/devices";

// Create a new store instance.
const store = createStore({
    
    /*
        ///////////////////   schreibe was hier über state   ///////////////////////
    */
    state () {
        return {
            singledevice: '' ,
            devices: [],
            user: '',
            errormessage: ''
        }
    },

    /* 
        ///////////////////   schreibe was hier über getters   ///////////////////////
    */
    getters: {
        /*
            we need to return the state objects with the
            JSON.parse(JSON.stringify(state.object)) functions
            because else they will be returned as a Proxy
            --> this way they are returned as a Object
        */
        // give back all devices
        getAllDevices(state) {
            return JSON.parse(JSON.stringify(state.devices));   
        },
        // give back a single device
        getDevice(state){
            return JSON.parse(JSON.stringify(state.singledevice));
        },
        // give back a the user     
        getUser(state) {
            return JSON.parse(JSON.stringify(state.user));
        },

        // give back a errormessage
        errormessage(state){
            return state.errormessage;
        }
    },

    /* 
        we need actions because you can only change data
        with mutations in the store but in mutations you 
        cant make async calls, so we cant fetch data from 
        our api 
        --> thats why we have actions as some sort of middleware
            you dispatch the action in your required code and then
            it makes the api calls and commits to the necessary 
            mutation with the data as the payload and the mutations 
            changes the data
    */ 
    actions: {

        // get all devices from api
        async showAllDevices(context) {
            await axios.get(apiUrl)            
            .then( response => {
                context.commit('showAllDevices', response.data );      // firing the showAllDevices mutations
            }).catch(error => {
                console.log(error);
            })
        },


        /*  ////////////// delelte it later //////////////
            i dont know why but in this case we need the    
            context.commit there as a parameter or else it will 
            treat deviceID as the wrong Object and not send the request 
            to the right address
        */

        // get a single device from api
        async showSingleDevice(context, deviceID) {
            await axios.get(apiUrl + `/${deviceID}`)
            .then( response => {
                context.commit('showSingleDevice', response.data);      // firing the showSingleDevice mutation     
            }).catch( error => {
               
                /* 
                    here a feedback function for the User when scanning the QR-Code
                    we can add more cases here to give the user more support while 
                    scanning a QR-code
                */

                if(error.response.statusText === 'Not Found')
                {
                    context.commit('setErrorMessage', "Error: Device not Found" );      // firing the setErrorMessage mutation
                }
                console.error(error);

            })
        },

        //delete it this is old function with only status
        // update a single device from api
        async updateDeviceStatus( context,  device ) {
  
            const newstatus = device.status == 2 ? 1 : 2;
          
            await axios.put( (apiUrl + `/${device.id}`), { status: newstatus })
            .then(response => {
                console.log(response.data);
                this.$router.push("/borrow/form"); 
                //router.push({ path: `borrow/${device.id}`});   
                context.commit('updateDeviceStatus', newstatus);

            }).catch(error => {
                console.log(error);
            }) 
        },

        ////////// the function for the form
        // update a the device from api
        async borrowDevice(context, data ) {
            // const newstatus = '';
            await axios.post("http://localhost:8300/api/device/borrow", data )
            .then(response => {
                console.log(response.data);
                router.push("/borrow/" + data.deviceid); 
                context.commit('borrowDevice', response.data);
                
            }).catch(error => {
                console.log(error);
            }) 
        },

    ///old function just the first
         // get a single device from api
        async userLogIn(context, userID ) {   
    
            await axios.get("http://localhost:8300/api/users" + `/${userID}`)
              .then((response) => {
                console.log(response.data);
                context.commit('userLogIn', response.data);
          }).catch((error) => {
                console.error(error.message);
                console.error(error); 
          });  

        },
        
            // login  user with jwt token
            async Login(context, chipID ) {   
    
                await axios.post("http://localhost:8300/api/users/login", {"chipID": chipID})
                  .then((response) => {
                    console.log(response.data);
                    localStorage.setItem('token', response.data.token );
    
                    context.commit('userLogIn', response.data.user);
              }).catch((error) => {
                    console.error(error.message);
                    console.error(error); 
              });  
    
            },

                 // get a single device from api
        async getUser(context, userID ) {   
    
            await axios.get("http://localhost:8300/api/users" + `/${userID}`, {
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('token')
                }
            })
              .then((response) => {
                console.log(response.data);
                context.commit('userLogIn', response.data);
          }).catch((error) => {
                console.error(error.message);
                console.error(error); 
          });  

        },
    },


    /*
        mutations are the only store hook that are allowed to change 
        the data in our store, every data manipulation is done here
    */ 
    mutations: {

        showAllDevices(state, fetchedDevices) {
            
            state.devices = [...state.devices, ...fetchedDevices];
        },

        showSingleDevice(state, fetchedDevice) {
            state.singledevice = fetchedDevice;
        },

        updateDeviceStatus(state, id, newstatus) {
            //state.device.status = newstatus;
            console.log(state.singledevice);
        },
        borrowDevice(state, data){
            console.log(data);
        },

        userLogIn(state, fetchedUser){
            console.log(fetchedUser);
            state.user = fetchedUser;
        },

        // for getting the logged User with the jwt token
        getLoggedUser(state) {

            // get the token from localstorage
            const token = localStorage.getItem("token");
            try {
                // decode token here and attach to the user object
                const decoded = VueJwtDecode.decode(token);

                // delete the unnecessary properties
                delete decoded.alg;
                delete decoded.typ;

                // save in our store
                state.user = decoded;      
            } catch (error) {
                console.log(error, 'error from decoding token in getLoggedUser Mutation')
            }
        },

        setErrorMessage(state, message) {
            state.errormessage = message;
        }
    },
})

export default store;

