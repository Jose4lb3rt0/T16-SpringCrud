import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditClick = (id) => {
    setEditingProductId(id);
  };

  return (
    <div className='w-full min-h-screen p-8 bg-gray-100 flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>CRUD de Productos</h1>

      <ProductList />

      {editingProductId && (
        <EditProduct
          productId={editingProductId}
          onProductUpdated={() => setEditingProductId(null)}
        />
      )}
    </div>
  );
}

export default App;
