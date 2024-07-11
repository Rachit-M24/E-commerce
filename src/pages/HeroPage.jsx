import React from "react";
import { Link } from "react-router-dom";
const HeroPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[90.3vh] flex justify-center items-center"
        style={{
          backgroundImage: "url(https://picsum.photos/2000/1000) ",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center text-white">
          <h1
            className="text-4xl p-3 font-bold"
            title="refresh if you're unable to read"
          >
            Welcome to Our Humble E-દુકાન
          </h1>
          <p className="text-2xl p-3" title="refresh if you're unable to read">
            Explore our latest collection of products
          </p>
          <Link
            to="/shop"
            className="bg-orange-500 hover:bg-orange-700 w-fit text-white font-bold py-2 px-4 rounded"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
