import React, { useState, useEffect } from 'react'
import api from '../api'

function EditProduct({ productId, onProductUpdated }) {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/ver/${productId}`)
        setNombre(response.data.nombre)
        setPrecio(response.data.precio)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }
    fetchProduct()
  }, [productId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.put(`/editar/${productId}`, { nombre, precio })
      onProductUpdated()  // Refresh the list or perform any other necessary action
    } catch (error) {
      console.error("Error updating product:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <button type="submit">Update Product</button>
    </form>
  )
}

export default EditProduct
