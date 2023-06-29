//import axios 
import axios from 'axios';

// create a instance with the baseUrl for every request
const AxiosRequest = axios.create({
    baseURL: 'http://localhost:8300/api'
})

export default AxiosRequest;