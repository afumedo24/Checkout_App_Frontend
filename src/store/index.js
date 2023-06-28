
import { createStore } from 'vuex'
import AxiosReq from '../helpers/axios/axios.config'
import router from '@/router';
import VueJwtDecode from 'vue-jwt-decode';


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

        /* 
            this function sends a axios request to the backend to
            get all devices in respsone so that we can trigger
            the mutation showAllDevices to alter our store with the 
            response.data
        */
        async showAllDevices(context) {
            await AxiosReq.get('/devices')            
            .then( response => {
                // firing the showAllDevices mutations , so it can save the data in our store
                context.commit('showAllDevices', response.data );      
            }).catch(error => {
                console.log(error);
            })
        },


        /* 
            write something here ////////
        */

        // get a single device from api
        async showSingleDevice(context, deviceID) {
            await AxiosReq.get(`/devices/${deviceID}`)
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

        ////////// the function for the form
        // update a the device from api
        async borrowDevice(context, data ) {
            await AxiosReq.post('/device/borrow', data )
            .then(response => {
                router.push("/borrow/" + data.deviceid); 
                context.commit('borrowDevice', response.data);
                
            }).catch(error => {
                console.log(error);
            }) 
        },
   
        // login  user with jwt token
        async Login(context, chipID ) {   

            await AxiosReq.post('/users/login', {"chipID": chipID})
                .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token );

                context.commit('userLogIn', response.data.user);
            }).catch((error) => {
                console.error(error.message);
                console.error(error); 
            });  

        },

        // for user logout
        userLogout(context) {
            context.commit('userLogIn', null );
            localStorage.removeItem('token');
        }
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

        borrowDevice(state, data){
            //vllt kann ich da nochmal fetchen ?????
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

