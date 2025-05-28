import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            ABC Tower, 4th Floor, <br />
            MG Road, Sector 29, <br />
            Gurugram, Haryana 122001, <br />
            India
          </p>
          <p className="text-gray-500">
            +91-9876543210 <br />
            <a
              href="mailto:support@dummyindia.com"
              className="text-blue-500 hover:underline"
            >
              support@dummyindia.com
            </a>
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
