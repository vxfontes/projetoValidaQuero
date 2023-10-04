import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.0.125:3003',
    timeout: 15000
})