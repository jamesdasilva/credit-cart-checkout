import axios from 'axios';
let base = ' http://localhost:3000/'
export const makePayment = (data) => {
    return axios.post(base + 'payments', data);
}