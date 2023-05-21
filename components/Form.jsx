import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Form = ({ onAddTrip, submitting }) => {
  const router = useRouter();

  const titleRef = useRef();
  const countryRef = useRef();
  const dateRef = useRef();
  const hotelRef = useRef();
  const detailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const tripData = {
      title: titleRef.current.value,
      country: countryRef.current.value,
      date: dateRef.current.value,
      hotel: hotelRef.current.value,
      details: detailRef.current.value,
    };

    onAddTrip(tripData);
    router.push('/');
  };

  return (
    <form
      className="rounded-xl border border-gray-200 bg-sky-300/10 shadow-inner p-5 mt-10 flex flex-col gap-7"
      onSubmit={submitHandler}
    >
      <div>
        <label
          htmlFor="title"
          className="font-satoshi font-semibold text-base text-gray-700"
        >
          Title
        </label>
        <input
          ref={titleRef}
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
          ref={countryRef}
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
          ref={dateRef}
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
          Place where you stayed
        </label>
        <input
          ref={hotelRef}
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
          Memorable details of your Trip
        </label>
        <textarea
          ref={detailRef}
          name="description"
          placeholder="Tell us about your trip"
          id="description"
          className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0"
        ></textarea>
      </div>
      <div className="mx-3 mb-5 flex justify-end items-center gap-4">
        <Link
          href="/"
          className="text-gray-600 text-sm shadow-xl p-1.5 rounded-lg"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="text-gray-600 text-sm shadow-xl px-5 py-1.5 rounded-lg bg-gradient-to-r from-blue-400/50 hover:from-yellow-400/50"
          disabled={submitting}
        >
          {submitting ? 'Sharing' : 'Share'}
        </button>
      </div>
    </form>
  );
};

export default Form;
