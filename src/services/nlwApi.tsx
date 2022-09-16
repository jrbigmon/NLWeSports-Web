import axios from "axios"

const nlwApi = axios.create({
    baseURL: "http://localhost:3000/nlw/api"
})

export default nlwApi