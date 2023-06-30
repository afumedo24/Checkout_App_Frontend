
// import the createStore from Vuex
import { createStore } from 'vuex'
// import the axios config file wwith the baseurl
import AxiosRequest from '../helpers/axios/axios.config'
// import the jsonwebtoken decoding library
import VueJwtDecode from 'vue-jwt-decode';


// Create a new store instance and import it in the root file(main.ts) 
// so that every component can access it 
const store = createStore({
    
    /*
        State is a collection of data at a given time. This state can be 
        changed with user interactions via dispatch and commit methods,
        when the user modifies data, a dispatch event is executed, which 
        passes data to a mutation and updates the state object

        Vuex stores are reactive, so if you want to retrieve the state from 
        it, you will need to access it from within a computed property 
        (look in the Pages for examples)

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
        getters help us to retrieve the current state of our store
        for our components, if you want to access a stored state you 
        will have to define a getter
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
            -----------------Get All Devices-----------------------
            this function sends a axios request to the server to
            get all devices in the database, so that we can trigger
            the mutation showAllDevices() to commit to our store 
            with the fetched devices in response.data
        */
        async getAllDevices(context) {
            // axios get request at baseurl/devices
            await AxiosRequest.get('/devices')            
            .then( response => {
                // calling the showAllDevices() mutations , so it can commit the data in our store
                context.commit('saveAllDevices', response.data );      
            }).catch(error => {
                console.log(error);
            })
        },


        /* 
            ----------------Get a single Device by their ID------------------
            here we are fetching a single device by their id with a axios get 
            request from our server,  and then we call the saveSingleDevice() 
            mutation to commit it 
            and also we give the user  feedback if the deviceID isnt found
        */
        async showSingleDevice(context, deviceID) {
            // axios get request at baseurl/devices/$deviceID
            await AxiosRequest.get(`/devices/${deviceID}`)
            .then( response => {
                // calling the showSingleDevice() mutation, to commit the device
                context.commit('saveSingleDevice', response.data);       
            }).catch( error => {
               
                /* 
                    here a feedback function for the User when scanning the QR-Code
                    we can add more cases here to give the user more support while 
                    scanning a QR-code
                */

                if(error.response.statusText === 'Not Found')
                {
                    // calling the setErrorMessage() mutation, to commit it, so that 
                    // it can be displayed in the BaseCard Component (ScannerPage)
                    context.commit('setErrorMessage', "Error: Device not Found" ); 
                }
                console.error(error);

            })
        },

        /*
            -----------------Borrow/Return a Device------------------------
            this here will a axios post request to borrow/return the device 
            all the data from the form component will be send to the server 
            and then it will update the database based on if you borrow/return
            also we have to pass the context as a parameter here because else 
            it wont treat the data parameter as a payload 
        */
        async borrowDevice(context, data ) {
            /* 
                axios post request at baseurl/devices/borrow 
                and the data is being passed in the body
            */
            await AxiosRequest.post('/device/borrow', data )
            .then(response => {
                // we dont commit the data here because we just get back a success message 
                // or a error in worst case
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            }) 
        },
   
        /*
            -----------------------User Login------------------------------
            after scanning the nfc chip, we will send a axios post request to 
            the server with the scanned chipID in the body, then the server will send us 
            a jsonwebtoken, where the user information is stored, and this we save in our 
            sessionstorage so that we can identify the user later,
            we are doing it like this because as you now the store is reactive so whenever you 
            reload the app it will also refresh the store so our logged user will be lost but 
            with the user token we save it in our sessionstorage and it will be saved there till we
            manually delete it(Logout) or the App is closed
        */
        async Login(context, chipID ) {   
            /* 
                axios post request at baserl/users/login 
                and the chipID is being passed in the body
            */
            await AxiosRequest.post('/users/login', {"chipID": chipID})
                .then((response) => {
                // save the token in the sessionstorage with the key as user
                sessionStorage.setItem('user', response.data.token );
                // saveUser() mutation, to commit the user
                context.commit('saveUser', response.data.user);
            }).catch((error) => {
                console.error(error); 
            });  

        },

        /*
            -----------------------User Logout------------------------------
            this is a simple function it will just call the saveUser() mutation 
            to set the user as null and delete the user token from the sessionstorage
        */
        userLogout(context) {
            context.commit('saveUser', null );
            sessionStorage.removeItem('user');
        },

        /*
            --------------------Get All the User------------------------
            this action will be called when the admin is logged and wants to 
            borrow/return a device for other users, it sends a axios get request 
            to get all the users from the database and then commit it to our store
        */
        async showAllUsers(context){
            // axios get request at baseurl/users
            await AxiosRequest.get('/users')
                .then((response) => {
                    // saveAllUsers() mutation, commits all the retrieved users
                    context.commit('saveAllUsers', response.data);
                }).catch((error) => {
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

        // for saving only one device
        saveSingleDevice(state, fetchedDevice) {
            state.singledevice = fetchedDevice;
        },

        // for saving the fetched user as our current logged user
        saveUser(state, fetchedUser){
            state.user = fetchedUser;
        },

        // for getting the logged User Information from the user token in our sessionStorage
        getLoggedUser(state) {

            // get the user token from sessionstorage
            const token = sessionStorage.getItem("user");
            
            try {
                // decode token here and attach to the user object
                const decodeduser = VueJwtDecode.decode(token);

                // delete the unnecessary properties
                delete decodeduser.alg;
                delete decodeduser.typ;

                // save it in our store
                state.user = decodeduser;      
            } catch (error) {
                console.log(error, 'error from decoding token in getLoggedUser Mutation')
            } 
        }, 

        // for saving all the users 
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

// export the store
export default store;

