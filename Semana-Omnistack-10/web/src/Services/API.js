import axios from 'axios';

const API = axios.create(
    {
        baseURL: 'http://localhost:42069'
    }
)

export default API;