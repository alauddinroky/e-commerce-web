import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get the id from the route parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Access the items from Redux store
  const items = useSelector((state) => state.item.items);

  useEffect(() => {
    // Log values to debug
    // Find the product in the items
    const foundProduct = items.find((item) => item.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error("Product not found");
    }

    setLoading(false);
  }, [id, items]); // Depend on `id` and `items`

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>Price: ${product.price}</p>
      {/* Render more product details as needed */}
    </div>
  );
};

export default ProductDetails;
