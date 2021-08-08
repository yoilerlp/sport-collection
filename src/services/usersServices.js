import { API } from '../util/axios'

export async function getAllUsers(){
    return await API.get('/user')
}

export async function createUser(userData){
    return await API.post('/user/create-user', userData)
}

export async function updateUser(userId, userData){
    return await API.put(`user/update-user/${userId}`, userData)
}

export async function deleteUser(userId,) {
    return await API.delete(`user/delete-user/${userId}`)
}