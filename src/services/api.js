import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 7000,
})

export const handleToken = (id) => {
    return api.get("/users/" + id)
        .then(data => { return true })
        .catch(err => { localStorage.clear(); return false })
}