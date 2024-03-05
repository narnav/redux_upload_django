import axios from 'axios'
const MY_SERVER = "http://127.0.0.1:8000/products";

export function getProds() {
    return axios.get(MY_SERVER)
}

export function addProd(prod) {
    return axios.post(MY_SERVER,prod)
}