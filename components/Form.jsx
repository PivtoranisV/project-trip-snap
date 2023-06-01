import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineFileImage } from 'react-icons/ai';

const Form = ({ onAddTrip, submitting, trip }) => {
  const CLOUD_NAME = 'dsjipyfjy';
  const UPLOAD_PRESET = 'trip_snap_project';

  const [photo, setPhoto] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    country: '',
    date: '',
    hotel: '',
    details: '',
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const imageUrl = await uploadImage();

    const tripData = { ...formData, image: imageUrl };

    onAddTrip(tripData);
  };

  const uploadImage = async () => {
    if (!photo) return;
    const formData = new FormData();
    formData.append('file', photo);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      const imageUrl = data['secure_url'];
      return imageUrl;
    } catch (error) {
      console.log(error);
    }
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
          name="title"
          type="text"
          placeholder="Short name of yor trip"
          id="title"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          value={formData.title || trip?.title}
          onChange={changeHandler}
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
          name="country"
          type="text"
          id="country"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          value={formData.country || trip?.country}
          onChange={changeHandler}
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
          name="date"
          type="date"
          id="date"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          value={formData.date || trip?.date}
          onChange={changeHandler}
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
          name="hotel"
          type="text"
          placeholder="Hotel, Guesthouse, etc."
          id="hotel"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          value={formData.hotel || trip?.hotel}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label
          htmlFor="image"
          className="font-satoshi font-semibold text-base text-gray-700 cursor-pointer flex gap-3 items-center"
        >
          Upload Photo from your Trip{' '}
          <AiOutlineFileImage className="w-6 h-6 text-gray-500" />
        </label>
        <input
          name="image"
          type="file"
          id="image"
          required
          className="hidden"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </div>

      <div>
        <label
          htmlFor="details"
          className="font-satoshi font-semibold text-base text-gray-700"
        >
          Memorable details of your Trip
        </label>
        <textarea
          name="details"
          placeholder="Tell us about your trip"
          id="details"
          className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0"
          value={formData.details || trip?.details}
          onChange={changeHandler}
        />
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
