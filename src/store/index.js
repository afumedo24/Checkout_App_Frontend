
import { createStore } from 'vuex'
import AxiosRequest from '../helpers/axios/axios.config'
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
            allusers: '',
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
        // give all stored devices back
        getAllDevices(state) {
            return JSON.parse(JSON.stringify(state.devices));   
        },
        // give the stored device back
        getDevice(state){
            return JSON.parse(JSON.stringify(state.singledevice));
        },
        
        // give stored user back 
        getUser(state) {
            return JSON.parse(JSON.stringify(state.user));
        }, 

        //give back all users
        getAllUsers(state) {
            return JSON.parse(JSON.stringify(state.allusers));
        },

        // give the errormessage back
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
            you can dispatch a action in your required code and then
            it makes the api calls and commits to the mutation with 
            the data as the payload, so that it can change the data
    */ 
    actions: {

        /* 
            this function sends a axios request to the backend to
            get all devices in respsone so that we can trigger
            the mutation showAllDevices() to alter our store with the 
            fetched devices in response.data
        */
        async getAllDevices(context) {
            await AxiosRequest.get('/devices')            
            .then( response => {
                // firing the showAllDevices() mutations , so it can commit the data in our store
                context.commit('saveAllDevices', response.data );      
            }).catch(error => {
                console.log(error);
            })
        },


        /* 
            write something here ////////
        */

        // get a single device from api
        async showSingleDevice(context, deviceID) {
            await AxiosRequest.get(`/devices/${deviceID}`)
            .then( response => {
                // firing the showSingleDevice() mutation
                context.commit('saveSingleDevice', response.data);       
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
            await AxiosRequest.post('/device/borrow', data )
            .then(response => {
                context.commit('borrowDevice', response.data);             
            }).catch(error => {
                console.log(error);
            }) 
        },
   
        // login  user with jwt token
        async Login(context, chipID ) {   

            await AxiosRequest.post('/users/login', {"chipID": chipID})
                .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('user', response.data.token );

                context.commit('saveUser', response.data.user);
            }).catch((error) => {
                console.error(error.message);
                console.error(error); 
            });  

        },

        // for user logout
        userLogout(context) {
            context.commit('saveUser', null );
            sessionStorage.removeItem('user');
        },

        // get all user 
        async showAllUsers(context){
            await AxiosRequest.get('/users')
                .then((response) => {
                    console.log(response.data);
                    context.commit('saveAllUsers', response.data);
                }).catch((error) => {
                    console.error(error.message);
                    console.error(error); 
                })
        }
    },


    /*
        mutations are the only store hook that are allowed to change 
        the data in our store, every data manipulation is done here
    */ 
    mutations: {

        // for saving all fetched devices to the our store
        saveAllDevices(state, fetchedDevices) {
            state.devices = [...state.devices, ...fetchedDevices];
        },

        // saving only one device
        saveSingleDevice(state, fetchedDevice) {
            state.singledevice = fetchedDevice;
        },

        /////////// i think we will delete i tlater ////////////
        borrowDevice(state, data){
            console.log(data);
        },

        
        // for setting the fetched user as our current user
        saveUser(state, fetchedUser){
            console.log(fetchedUser);
            state.user = fetchedUser;
        },

        // for getting the logged User from the jwt token
        getLoggedUser(state) {

            // get the token from localstorage
            const token = sessionStorage.getItem("user");
            
            try {
                // decode token here and attach to the user object
                const decoded = VueJwtDecode.decode(token);

                // delete the unnecessary properties
                delete decoded.alg;
                delete decoded.typ;

                // save it in our store
                state.user = decoded;      
            } catch (error) {
                console.log(error, 'error from decoding token in getLoggedUser Mutation')
            } 
        }, 

        // save all users 
        saveAllUsers(state, fetchedUser) {
            console.log(fetchedUser);
            state.allusers = fetchedUser;
        },


        // for setting error messages in our store
        setErrorMessage(state, message) {
            state.errormessage = message;
        }
    },
})

export default store;

