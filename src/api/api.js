import axios from 'axios'

export const BASE_API_URL = 'http://3.110.196.105/api/v1/'

export const axiosRequest = axios.create({
    baseURL: BASE_API_URL,
})
