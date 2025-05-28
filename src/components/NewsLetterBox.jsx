import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subcribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Subscribe Now and Step Up Your Game! Don’t miss out on this exclusive
        offer! Sign up for our newsletter today and get 20% off your first pair
        of sneakers. Be the first to hear about the latest drops, special
        promotions, and exciting updates straight to your inbox. This is your
        chance to grab exclusive deals and save big on premium sneakers.
        Hurry—this offer won’t last forever! Subscribe now and take your first
        step toward style and savings. 🏆👟
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
