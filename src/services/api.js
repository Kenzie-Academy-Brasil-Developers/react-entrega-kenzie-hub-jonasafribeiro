import axios from "axios";

export const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 10000,
})

export const handleToken = (id) => {
    return api.get("/users/" + id)
        .then(data => { return true })
        .catch(err => { localStorage.clear(); return false })
}