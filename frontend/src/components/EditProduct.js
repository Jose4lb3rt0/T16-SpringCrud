import React, { useState, useEffect } from 'react'
import { getProductById, updateProduct } from '../api/productApi'

function EditProduct({ productId, fetchProducts, onClose }) {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(productId)
      setNombre(product.nombre)
      setPrecio(product.precio)
    }
    fetchProduct()
  }, [productId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProduct(productId, { nombre, precio })
    fetchProducts() 
    onClose() 
  }

  return (
    <form onSubmit={handleSubmit} className='p-6 bg-white shadow-lg rounded-lg max-w-md w-full mb-8'>
      <h2 className='text-xl font-semibold text-center text-gray-700 mb-4'>Editar Producto</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className='w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        placeholder="Nombre del Producto"
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
        className='w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        placeholder="Precio del Producto"
      />
      <button
        type="submit"
        className='w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
      >
        Actualizar Producto
      </button>
    </form>
  )
}

export default EditProduct
