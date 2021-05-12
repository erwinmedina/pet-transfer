import sendRequest from "./send-request";

const BASE_URL = "/api/pets";

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createPet(newPetData) {
    return sendRequest(BASE_URL, 'POST', newPetData);
}

// export function myPets() {
//     return sendRequest(BASE_URL);
// }
