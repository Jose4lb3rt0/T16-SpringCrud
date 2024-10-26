import React, { useState, useEffect } from 'react';
import api from '../api';
import AddProduct from './AddProduct';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/listar');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/eliminar/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className='p-6 bg-white shadow-lg rounded-lg max-w-lg w-full mb-8'>
      <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>Lista de Productos</h2>
      <AddProduct fetchProducts={fetchProducts} /> 

      <ul className='mt-6 space-y-4'>
        {products.map(product => (
          <li
            key={product.id}
            className='flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm'
          >
            <span className='text-lg font-medium text-gray-700'>
              {product.nombre} - <span className='text-gray-500'>${product.precio}</span>
            </span>
            <button
              onClick={() => deleteProduct(product.id)}
              className='px-4 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors'
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
