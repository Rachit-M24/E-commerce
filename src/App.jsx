import React from 'react';
import { Outlet ,NavLink, Link} from 'react-router-dom';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
    {/* Navbar */}
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg text-white font-bold">Routing Trivia</h1>
        <ul className="flex items-center">
          <li className="mr-6">
            <NavLink to="/home"  className="text-white hover:text-gray-200">
              Shop
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/about" className="text-white hover:text-gray-200">
              About
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/contact" className="text-white hover:text-gray-200">
              Contact
            </NavLink>
          </li>
          <li>
            <Link to="/blog" className="text-white hover:text-gray-200">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet/>
         {/* Hero Section */}
         <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{
       backgroundImage: 'url(https://picsum.photos/2000/1000) ',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover" }}>
        <div className="container mx-auto flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl p-3 font-bold">Welcome to Our E-commerce Store</h1>
          <p className="text-2xl p-3">Explore our latest collection of products</p>
          <Link to="/home" className="bg-orange-500 hover:bg-orange-700 w-fit text-white font-bold py-2 px-4 rounded">
            Shop Now
          </Link>
        </div>
      </div>
</div>
  )
}

export default App