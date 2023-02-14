import axios from "axios";

export const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 7000,
})

export const handleToken = (id) => {
    return api.get("/users/" + id)
        .then(data => { console.log(data); return true })
        .catch(err => { console.log(err); localStorage.clear(); return false })
}