import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-64" alt="" />
          <p className="w-full md:w-100 text-gray-600">
            At SneakerHaven, we believe in crafting sneakers that blend style,
            performance, and quality. Our collection is designed with precision
            to redefine your every step and elevate your style to the next
            level. Explore timeless designs that bring comfort and flair to
            every occasion.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink to="/about">
              <li>ABOUT US</li>
            </NavLink>
            <NavLink to="/orders">
              <li>DELIVERY</li>
            </NavLink>
            <NavLink>
              <li>PRIVACY POLICY</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 222 334 9876</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ sneakerheaven.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
