import axios from 'axios'

const productFetch = axios.create({
    baseURL: 'http://localhost:4000/products',
    headers: {
        "Content-Type": "application/json"
    }
})

export default productFetch