import sendRequest from "./send-request";

const BASE_URL = "https://dog.ceo/api/breeds/list/all";

export function getAll(){
    return fetch(BASE_URL)
        .then((res) => {return res.json()})
}