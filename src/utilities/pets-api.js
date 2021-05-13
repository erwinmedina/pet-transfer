import sendRequest from "./send-request";

const BASE_URL = "/api/pets";

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createPet(newPetData) {
    return sendRequest(BASE_URL, 'POST', newPetData);
}

export function updatePet(petData) {
    return sendRequest(`${BASE_URL}/${petData._id}`, "PUT", petData);
}

export function deletePet(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE")
}