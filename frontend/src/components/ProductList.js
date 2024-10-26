import React, { useState, useEffect } from 'react'
import api from '../api'
import AddProduct from './AddProduct'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await api.get('/listar')
      setProducts(response.data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/eliminar/${id}`)
      setProducts(products.filter(product => product.id !== id))
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  return (
    <div>
      <h2>Product List</h2>
      <AddProduct fetchProducts={fetchProducts} /> {/* Pasamos fetchProducts como prop */}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.nombre} - ${product.precio}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
