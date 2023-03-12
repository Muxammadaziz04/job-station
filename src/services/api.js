import axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies()

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: `Bareer ${cookies?.token}`
    }
})

export default api