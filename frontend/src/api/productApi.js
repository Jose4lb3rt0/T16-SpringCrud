import api from "../api"

export const fetchProducts = async () => {
    const response = await api.get('/listar')
    return response.data
}

export const getProductById = async (id) => {
    const response = await api.get(`/ver/${id}`)
    return response.data
}

export const createProduct = async (productData) => {
    await api.post('/crear', productData)
}

export const updateProduct = async (id, productData) => {
    await api.put(`/editar/${id}`, productData)
}

export const deleteProduct = async (id) => {
    await api.delete(`/eliminar/${id}`)
}