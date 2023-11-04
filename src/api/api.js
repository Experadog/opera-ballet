import axios from 'axios'

export const BASE_API_URL = 'https://operaballet.pythonanywhere.com/api/v1/'

export const axiosRequest = axios.create({
    baseURL: BASE_API_URL,
})
