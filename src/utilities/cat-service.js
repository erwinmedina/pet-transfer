import { sendRequest } from "./send-request";

const BASE_URL = "https://api.thecatapi.com/v1/breeds";

export default {
    getAll,
}

export async function getAll() {
    return fetch(BASE_URL)
        .then((res) => {
            console.log(res)
            return res.json()})
        .then((data) => console.log(data));
}