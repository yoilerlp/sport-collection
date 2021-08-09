import { API } from '../util/axios'

export async function getAllUsers(){
    return await API.get('/users')
}

export async function createUser(userData){
    return await API.post('/users/register', userData)
}

export async function updateUser(userId, userData){
    return await API.put(`users/update-user/${userId}`, userData)
}

export async function deleteUser(userId,) {
    return await API.delete(`users/delete-user/${userId}`)
}

export async function loginUser(userData){
    return await API.post('/users/login', userData)
}