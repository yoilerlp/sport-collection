import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://mintic-ciclo4-backend.herokuapp.com'
})


export const setAuthToken = (token) => {
    if (token) {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};
