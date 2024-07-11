// NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
