
import { createStore } from 'vuex'
import axios from 'axios';
import router from '../router/index'

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
        getSingleDevice(state){
            return JSON.parse(JSON.stringify(state.singledevice));
        },

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
        async showAllDevices() {
            await axios.get(apiUrl)            
            .then(response => {
                this.commit('showAllDevices', response.data );      // firing the showAllDevices mutations
            }).catch(error => {
                console.log(error);
            })
        },


        /*  
            i dont know why but in this case you need the commit 
            deconstruction there as a parameter or else it will 
            treat deviceID as a Object and not send the request 
            to the right address
        */
        // get a single device from api
        async showSingleDevice({commit}, deviceID) {
            await axios.get(apiUrl + `/${deviceID}`)
            .then(response => {
                commit('showSingleDevice', response.data);      // firing the showSingleDevice mutation 
                
            }).catch(error => {
                // here a feedback function for the User when scanning the QR-Code
                if(error.response.statusText === 'Not Found')
                {
                    commit('setErrorMessage', "Error: Device not Found" );      // firing the setErrorMessage mutation
                }
                console.error(error);

            })
        },

        // update a single device from api
        async updateDeviceStatus( context,  device ) {
  
            const newstatus = device.status == 2 ? 1 : 2;
          
            await axios.put( (apiUrl + `/${device.id}`), { status: newstatus })
            .then(response => {
                console.log(response.data);
                router.push({ path: `borrow/${device.id}`});   
                context.commit('updateDeviceStatus', newstatus);

            }).catch(error => {
                console.log(error);
            }) 
        },

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

        userLogIn(state, fetchedUser){
            state.user = fetchedUser;
        },

        setErrorMessage(state, message) {
            state.errormessage = message;
        }
    },
})

export default store;

