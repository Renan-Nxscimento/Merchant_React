import axios from 'axios'

const fetchApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api/',
    headers: {
        "Content-Type": "application/json"
    }
})

export default fetchApi
