import {history} from "app/pages/Routes"
import axios from "axios"

const httpClient = axios.create({
  baseURL: process.env.BASE_URL,
})

httpClient.interceptors.request.use(
  (config) => {
    // add token here if it's required
    // const token = sessionStorage.getItem("token")
    // config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error),
)

httpClient.interceptors.response.use(
  (res) => {
    return res
  },
  (res) => {
    switch (res.response.status) {
      case 401:
        history.push("/login")
        return Promise.reject(res.response)
      case 404:
        history.push("/page-not-found")
        return Promise.reject(res.response)
      case 500:
        return Promise.reject(res.response)
      default:
        return Promise.reject(res.response)
    }
  },
)

export default httpClient
