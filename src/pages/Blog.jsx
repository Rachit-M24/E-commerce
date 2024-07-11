import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <Link to="/post1" className="text-blue-600 hover:text-blue-900">
            <h2 className="text-lg font-bold">Post 1: Introduction to React</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/post2" className="text-blue-600 hover:text-blue-900">
            <h2 className="text-lg font-bold">
              Post 2: Building a Todo List App
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/post3" className="text-blue-600 hover:text-blue-900">
            <h2 className="text-lg font-bold">Post 3: Using React Hooks</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Link>
        </li>
      </ul>
      <p className="text-gray-600">No more posts to show.</p>
    </div>
  );
};

export default Blog;
