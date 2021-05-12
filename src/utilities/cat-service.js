// import sendRequest from "./send-request";

const BASE_URL = "https://api.thecatapi.com/v1/breeds";

export function getAll(){
    return fetch(BASE_URL)
        .then((res) => {return res.json()})
}