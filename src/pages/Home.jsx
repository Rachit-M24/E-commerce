import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
    <div className="flex-1 h-fit ">

      {/* Featured Products */}
      <div className="bg-white">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
              <img src="https://picsum.photos/200/300" alt="Product 1" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold">Product 1</h3>
              <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
              <Link to="/products/1" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded">
                View Details
              </Link>
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
              <img src="https://picsum.photos/200/305" alt="Product 2" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold">Product 2</h3>
              <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
              <Link to="/products/2" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded">
                View Details
              </Link>
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
              <img src="https://picsum.photos/200/302" alt="Product 3" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold">Product 3</h3>
              <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
              <Link to="/products/3" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded">
                View Details
              </Link>
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
              <img src="https://picsum.photos/200/303" alt="Product 2" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold">Product 4</h3>
              <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
              <Link to="/products/2" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded">
                View Details
              </Link>
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
              <img src="https://picsum.photos/200/306" alt="Product 2" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold">Product 5</h3>
              <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
              <Link to="/products/2" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded">
                View Details
              </Link>
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
              <img src="https://picsum.photos/200/301" alt="Product 2" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold">Product 6</h3>
              <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
              <Link to="/products/2" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded">
                View Details
              </Link>
            </div>
            <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4">
              <img src="https://picsum.photos/200/299" alt="Product 2" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-bold">Product 7</h3>
              <p className="text-gray-600 pb-2">Lorem ipsum dolor sit amet</p>
              <Link to="/products/2" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 text-sm px-2 rounded">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-200 py-12">
         <div className="container mx-auto p-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Start Shopping?</h2>
          <p className="text-gray-600">Explore our collection of products and start shopping today!</p>
          <Link to="/products" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
    </div>  
  )
}

export default Home