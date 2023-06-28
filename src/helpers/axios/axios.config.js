import axios from 'axios';

const AxiosReq = axios.create({
    baseURL: 'http://localhost:8300/api'
})

export default AxiosReq;