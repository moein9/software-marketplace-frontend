import React from "react";
import { Link } from "react-router-dom";
import { useGetProductQuery } from "../redux/services/apiSlice";
import { useState } from "react";
import Pagination from "../components/Pagination.jsx";

function Products() {
  const { data: products, isLoading, error } = useGetProductQuery();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [{ id: 1, name: "accounting" }];

  const filteredProducts = products
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    products && filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  function CategoryPanel({ categories }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/categories/${category.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="bg-gray-300 py-20">
      <div className="container mx-auto">
        <div className="w-1/4 mr-8">
          <CategoryPanel categories={categories} />
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Software Products</h2>
          <p className="text-gray-600 mb-8">
            Browse our collection of software products.
          </p>
        </div>
        <div className="flex items-center pb-8 justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-1/3 p-2  rounded-lg mr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products &&
            currentItems.map((product) => (
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
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
      />
    </section>
  );
}

export default Products;
