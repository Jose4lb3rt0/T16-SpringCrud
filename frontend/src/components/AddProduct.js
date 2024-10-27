import React, { useState } from 'react'
import { createProduct } from '../api/productApi'

function AddProduct({ fetchProducts }) {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createProduct({ nombre, precio })
    setNombre('')
    setPrecio('')
    fetchProducts()  
  }

  return (
    <form onSubmit={handleSubmit} className='p-4 mb-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm'>
      <h2 className='text-xl font-semibold text-center text-gray-700 mb-4'>Agregar Producto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        className='w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
        className='w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'
      />
      <button
        type="submit"
        className='w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors'
      >
        Agregar Producto
      </button>
    </form>
  )
}

export default AddProduct
