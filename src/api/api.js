import axios from 'axios'

export const BASE_API_URL = 'http://3.110.196.105/api/v1/'

export const axiosRequest = axios.create({
    baseURL: BASE_API_URL,
})

// axiosRequest.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('accessToken')

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }

//         return config
//     },
//     error => Promise.reject(error),
// )
