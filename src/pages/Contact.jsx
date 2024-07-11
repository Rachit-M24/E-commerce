import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container h-screen  flex flex-col justify-between">
      <h1 className="text-3xl font-bold mb-4 p-2">Get in Touch</h1>
      <p className="text-lg mb-6 p-2">
        Have a question or just want to say hi? Fill out the form below and I'll
        get back to you soon!
      </p>
      <form className="max-w-md p-2">
        <label className="block mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 pl-10 text-sm text-gray-700"
          placeholder="Your Name"
          autoComplete="off"
        />
        <label className="block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 pl-10 text-sm text-gray-700"
          placeholder="your@email.com"
          autoComplete="off"
        />
        <label className="block mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="w-full p-2 pl-10 text-sm text-gray-700"
          placeholder="Your message..."
          rows="4"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>

      {/* Socials */}
      <h3 className="text-lg mt-6 flex flex-col justify-center items-center bg-gray-600 h-16 w-[100vw]">
        You can also reach me through social media:
        <ul className="list-none mb-0 flex gap-3 text-xl pb-2 w-fit h-fit">
          <li>
            <Link to="*" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-x-twitter"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/Rachit-M24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-github"></i>
            </Link>
          </li>
          <li>
            <Link to="*" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/rachit-mahida-a62524255"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
        </ul>
      </h3>
    </div>
  );
};

export default Contact;
