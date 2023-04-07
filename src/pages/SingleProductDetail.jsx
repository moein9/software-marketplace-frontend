import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "/src/services/data/products.json";
import { useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";

function SingleProductDetail({ onAddToCart }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <p className="text-gray-600 text-lg">Product not found!</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-200 py-20 h-screen">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-8">{product.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Product Details:</h3>
            <ul>
              <li>
                <strong>Price:</strong> ${product.price}
              </li>
              <li>
                <strong>Category:</strong> {product.category}
              </li>
              <li>
                <strong>Brand:</strong> {product.brand}
              </li>
              <li>
                <strong>Availability:</strong>{" "}
                {product.inStock ? "In Stock" : "Out of Stock"}
              </li>
            </ul>
            <div className="flex items-center mt-4">
              <label htmlFor="quantity" className="mr-2 font-bold">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                className="border border-gray-500 px-2 py-1 w-16 rounded-lg"
                min="1"
                max={product.inStock}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
            <button
              onClick={() => dispatch(increment(quantity))}
              className="bg-blue-500 text-white px-4 p-2 rounded-lg hover:bg-blue-600 mt-4"
              disabled={!product.inStock}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductDetail;
