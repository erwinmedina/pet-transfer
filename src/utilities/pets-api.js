import sendRequest from "./send-request";

const BASE_URL = "/api/pets";

export function createPet(newPetData) {
    // console.log(newPetData);
    return sendRequest(BASE_URL, 'POST', newPetData);
}