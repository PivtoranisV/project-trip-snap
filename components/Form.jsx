import React from 'react';

const Form = () => {
  return (
    <form className="rounded-xl border border-gray-200 bg-sky-300/10 shadow-inner p-5 mt-10 flex flex-col gap-7">
      <div>
        <label
          htmlFor="title"
          className="font-satoshi font-semibold text-base text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          placeholder="Short name of yor trip"
          id="title"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
        />
      </div>
      <div>
        <label
          htmlFor="country"
          className="font-satoshi font-semibold text-base text-gray-700"
        >
          Country you visited
        </label>
        <input
          type="text"
          id="country"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
        />
      </div>
      <div>
        <label
          htmlFor="date"
          className="font-satoshi font-semibold text-base text-gray-700"
        >
          Date of your trip
        </label>
        <input
          type="date"
          id="date"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
        />
      </div>
      <div>
        <label
          htmlFor="hotel"
          className="font-satoshi font-semibold text-base text-gray-700"
        >
          Place where you stay
        </label>
        <input
          type="text"
          placeholder="Hotel, Guesthouse, etc."
          id="hotel"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="font-satoshi font-semibold text-base text-gray-700"
        >
          Description
        </label>
        <textarea
          name="description"
          placeholder="Tell us about your trip"
          id="description"
          className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0"
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
