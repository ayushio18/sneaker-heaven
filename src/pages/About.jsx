import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our sneaker haven! We are committed to delivering the
            best online shopping experience for sneaker enthusiasts. Our mission
            is to offer a wide range of premium sneakers at competitive prices,
            ensuring you find the perfect pair to match your style and needs.
          </p>
          <p>
            Our team is passionate about your comfort and style. We work
            tirelessly to source the finest sneakers from trusted brands and
            ensure they reach your doorstep promptly. Whether you’re looking for
            the latest designs, performance-driven pairs, or timeless classics,
            we’ve got you covered.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Thank you for choosing us as your go-to destination for premium
            sneakers. We’re excited to serve you and make your shopping
            experience seamless and enjoyable. If you have any questions or need
            assistance, our dedicated customer support team is always here to
            help you every step of the way.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At SneakerHaven, we ensure every pair is crafted with premium
            materials and tested for durability, comfort, and performance. Shop
            confidently, knowing quality is our priority!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className="text-gray-600">
            At SneakerHaven, enjoy easy browsing, secure payments, and fast
            delivery—making your sneaker shopping experience simple and
            hassle-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service:</b>
          <p className="text-gray-600">
            At SneakerHaven, we're dedicated to providing you with top-notch
            customer service. Our team is always ready to assist you with any
            questions or concerns, ensuring a smooth and enjoyable shopping
            experience.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
