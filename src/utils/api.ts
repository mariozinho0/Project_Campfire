import axios from 'axios'

const api = axios.create({
    baseURL: "http://www.campingfire.ga:8080/v1/"
})

export default api