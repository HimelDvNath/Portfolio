import React from "react";
import shopnity from "../../assets/shopnity.png";

const Shopnity = () => {
  return (
    <div className="card bg-base-100 image-full overflow-hidden shadow-lg rounded-xl  border-l-5 border-t-3 border-orange-500 hover:shadow-2xl transition-all duration-300 max-w-lg card-lg">
      <figure>
        <img src={shopnity} alt="Shopnity homepage" className="object-cover" />
      </figure>

      <div className="card-body text-white">
        <h2 className="card-title text-xl flex justify-center items-center pt-5 mb-3 font-bold">
          Shopnity E-commerce Website
        </h2>

        <p className="text-sm leading-relaxed text-justify opacity-90">
          Shopnity is a full-stack e-commerce platform built with React, Tailwind,
          Node.js, Express, and MongoDB. It features secure authentication,
          product browsing, wishlist & cart management, order tracking, and a
          powerful admin dashboard for full control of products, categories, and
          orders.
        </p>

        <div className="card-actions justify-end mt-2">
          <a
            href="https://shopnity-e-commerce-website.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm px-4"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shopnity;
