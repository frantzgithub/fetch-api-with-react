import axios from "axios";

const fruitApi = axios.create({
    baseURL: "https://fruit-fake-api.onrender.com",
    timeout: 5 * 1000
})
const blogApi = axios.create({
    baseURL: "https://blog-fake-api.onrender.com",
    timeout: 10 * 1000
})

export { fruitApi, blogApi}