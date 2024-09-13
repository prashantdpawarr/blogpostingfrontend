import React from "react";

const Signup = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="rounded-[8px] flex gap-[35px] flex-col shadow-sm py-[51px] px-[50px] border">
        <div className="flex flex-col gap-3">
          <h2 className="text-center font-bold text-3xl">Sign Up</h2>
          <p className="text-center font-normal text-lg">Let's get started </p>
        </div>
        <div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Name
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
