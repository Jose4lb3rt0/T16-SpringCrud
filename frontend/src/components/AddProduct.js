import React, { useState } from 'react'
import api from '../api'

function AddProduct({ fetchProducts }) { 
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/crear', { nombre, precio })
      setNombre('')
      setPrecio('')
      fetchProducts() 
    } catch (error) {
      console.error("Error creating product:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  )
}

export default AddProduct
