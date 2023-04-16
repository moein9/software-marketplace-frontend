import React from "react";
import { Link } from "react-router-dom";
import { useGetProductQuery } from "../redux/services/apiSlice";

function Products() {
  const { data: products, isLoading, error } = useGetProductQuery();

  if (isLoading) {
    return (
      <div className="text-center mt-20">
        <p className="text-gray-600 text-lg animate-pulse">
          <span className="inline-block mr-1">Loading</span>
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-1"></span>
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-1"></span>
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-300 py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Software Products</h2>
          <p className="text-gray-600 mb-8">
            Browse our collection of software products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-600 font-bold">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
