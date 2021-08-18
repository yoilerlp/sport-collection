import { API } from '../util/axios';

export async function getAllSales( ){
    return await API.get('/sales')
}