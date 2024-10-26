import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9050/api/productos',
})

export default api;