import sendRequest from "./send-request";

const BASE_URL = "/api/pets";

export function userSave() {
    return sendRequest(`${BASE_URL}/getAll`);
}