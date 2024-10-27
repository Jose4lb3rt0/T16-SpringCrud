import React, { useEffect } from 'react'
import { deleteProduct } from '../api/productApi'

function ProductList({ products, onEditClick, fetchProducts }) {
  const handleDelete = async (id) => {
    await deleteProduct(id)
    fetchProducts()  
  }

  return (
    <div className='p-6 bg-white shadow-lg rounded-lg max-w-lg w-full mb-8'>
      <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>Lista de Productos</h2>
      <ul className='mt-6 space-y-4'>
        {products.map(product => (
          <li
            key={product.id}
            className='flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm'
          >
            <span className='text-lg font-medium text-gray-700'>
              {product.nombre} - <span className='text-gray-500'>${product.precio}</span>
            </span>
            <div className="space-x-2">
              <button
                onClick={() => onEditClick(product.id)}
                className='px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className='px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
