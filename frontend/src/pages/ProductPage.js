import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../api/productApi'
import ProductList from '../components/ProductList'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const [editingProductId, setEditingProductId] = useState(null)

  const loadProducts = async () => {
    const productsData = await fetchProducts()
    setProducts(productsData)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className='w-full min-h-screen p-8 bg-gray-100 flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>CRUD de Productos</h1>

      <AddProduct fetchProducts={loadProducts} />

      <ProductList products={products} onEditClick={setEditingProductId} fetchProducts={loadProducts} />

      {editingProductId && (
        <EditProduct
          productId={editingProductId}
          fetchProducts={loadProducts}
          onClose={() => setEditingProductId(null)}
        />
      )}
    </div>
  )
}

export default ProductsPage
