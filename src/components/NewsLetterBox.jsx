import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-500">
        Subscribe now & get 10% off
      </p>
      <p className="text-gray-400 mt-3">
        Be the first to know about our new arrivals and exclusive offers.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex flex-col items-center gap-3 mx-auto my-6"
      >
        <input
          className="w-full sm:flex-1 py-2 text-center border-b border-gray-500 focus:outline-none focus:border-black"
          type="email"
          placeholder="E-mail address"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-10 py-4 mt-4 w-40 cursor-pointer hover:bg-chocolateBrown transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
