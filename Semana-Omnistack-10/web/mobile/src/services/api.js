import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.8:42069',
})

export default api;