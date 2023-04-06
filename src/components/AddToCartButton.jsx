import React from "react";

function AddToCartButton({ product, addToCart }) {
  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 p-2 rounded-lg hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
