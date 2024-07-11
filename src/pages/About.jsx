import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-md p-4">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
          <p className="text-lg mb-4">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
            Back to Home
          </Link>
        </div>
      </div>)
}

export default About