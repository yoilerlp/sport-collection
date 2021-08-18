import { API } from '../util/axios';

export async function getBestSellingProducts() {
    return await API.get('/statistics/get-best-selling-products')
}

export async function getSellersMostSales() {
    return await API.get('/statistics/get-sellers-most-sales')
}