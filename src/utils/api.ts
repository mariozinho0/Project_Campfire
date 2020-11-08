import axios from 'axios'

const url = "http://192.168.1.7:3000"

const api = axios.create({
    baseURL: `${url}/v1/`
})

export default api