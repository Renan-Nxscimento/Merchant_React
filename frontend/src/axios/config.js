import axios from 'axios'

const fetchApi = axios.create({
    baseURL: 'https://merchant-backend-6w1j.onrender.com/api',
    headers: {
        "Content-Type": "application/json"
    }
})

export default fetchApi