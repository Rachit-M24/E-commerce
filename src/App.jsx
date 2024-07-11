import React from "react";
import { Outlet, Link, NavLink, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 py-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-lg text-white font-bold hover:text-orange-500 hover:cursor-pointer"
          >
            Routing Trivia
          </Link>
          <ul className="flex items-center">
            <li className="mr-6">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "p-2 font-bold bg-white text-orange-500 rounded-lg text-center"
                    : "text-white";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/shop"
                className={({ isActive }) => {
                  return isActive
                    ? "p-2 font-bold bg-white text-orange-500 rounded-lg text-center"
                    : "text-white";
                }}
              >
                Shop
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "p-2 font-bold bg-white text-orange-500 rounded-lg text-center"
                    : "text-white";
                }}
              >
                About
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? "p-2 font-bold bg-white text-orange-500 rounded-lg text-center"
                    : "text-white";
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => {
                  return isActive
                    ? "p-2 font-bold bg-white text-orange-500 rounded-lg text-center"
                    : "text-white";
                }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />

      <Routes>
        <Route path="" element={<HeroPage />} />
      </Routes>
    </div>
  );
};

export default App;
