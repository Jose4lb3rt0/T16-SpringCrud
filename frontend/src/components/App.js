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
    <div>
      <h1>Product Management</h1>
      <AddProduct />
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
