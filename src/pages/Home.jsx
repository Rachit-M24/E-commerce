import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Add logic to handle search functionality here
    console.log("Search term:", searchTerm);
    // For demo purposes, let's assume we have a search API that returns results
    const searchResults = [
      { id: 1, title: "Result 1", description: "This is result 1" },
      { id: 2, title: "Result 2", description: "This is result 2" },
      { id: 3, title: "Result 3", description: "This is result 3" },
    ];
    setSearchResults(searchResults);
  };

  return (
    <>
      <div className="flex-1 h-screen w-full flex flex-col justify-between ">
        {/* Featured Products */}
        <div className="bg-white">
          <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
                <img
                  src="https://picsum.photos/200/300"
                  alt="Product 1"
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold">Product 1</h3>
                <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
                <Link
                  to="/products/1"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded"
                >
                  View Details
                </Link>
              </div>
              <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
                <img
                  src="https://picsum.photos/200/265"
                  alt="Product 2"
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold">Product 2</h3>
                <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
                <Link
                  to="/products/2"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded"
                >
                  View Details
                </Link>
              </div>
              <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
                <img
                  src="https://picsum.photos/200/302"
                  alt="Product 3"
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold">Product 3</h3>
                <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
                <Link
                  to="/products/3"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded"
                >
                  View Details
                </Link>
              </div>
              <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
                <img
                  src="https://picsum.photos/200/303"
                  alt="Product 2"
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold">Product 4</h3>
                <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
                <Link
                  to="/products/2"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 sm:text-[10px] text-sm px-2 rounded"
                >
                  View Details
                </Link>
              </div>
              <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
                <img
                  src="https://picsum.photos/200/306"
                  alt="Product 2"
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold">Product 5</h3>
                <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
                <Link
                  to="/products/2"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded"
                >
                  View Details
                </Link>
              </div>
              <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
                <img
                  src="https://picsum.photos/200/299"
                  alt="Product 2"
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-bold">Product 6</h3>
                <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
                <Link
                  to="/products/2"
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-200 pt-5 pb-2 flex items-center">
          <div className="container flex  flex-col justify-center items-center gap-3  text-center">
            <h2 className="text-3xl font-bold">Ready to Start Shopping?</h2>
            <p className="text-gray-600">
              Explore our collection of products and start shopping today!
            </p>
            <div className="flex flex-col justify-start">
              <div className="flex-1 h-screen w-full flex flex-col justify-center">
                {/* Search Bar */}
                <div className="bg-gray-200 pt-5 p-3 flex items-center">
                  <div className="container flex flex-col justify-center items-center gap-3 text-center">
                    <form
                      onSubmit={handleSearch}
                      className="flex items-center m-2"
                    >
                      <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className="bg-white rounded-lg py-2 px-4 w-64 mx-2"
                      />
                      <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>

                {/* Search Results */}
                <div className="bg-white py-5">
                  <div className="container mx-auto p-4">
                    <h2 className="text-3xl font-bold">Search Results</h2>
                    <ul className="list-none mb-0  flex gap-10">
                      {searchResults.map((result) => (
                        <li
                          key={result.id}
                          className="py-4 border-b border-gray-200 flex flex-col justify-evenly"
                        >
                          <h3 className="text-lg font-bold">{result.title}</h3>
                          <p className="text-gray-600">{result.description}</p>
                          <Link
                            to={`/products/${result.id}`}
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-2  rounded-lg"
                          >
                            View Details
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
