import { API } from '../util/axios';

export async function getAllProducts() {
   return await API.get('/products')
}

export async function createProduct(productData) {
    return await API.post('/products/create-product', productData)
}

export async function updateProduct(productId, productData) {
    return await API.put(`products/update-product/${productId}`, productData)
}

export async function deleteProduc(productId) {
    return await API.delete(`/products/delete-product/${productId}`)
} 