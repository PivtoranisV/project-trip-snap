import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';

const DetailTrip = ({ trip, handleEdit, handleDelete }) => {
  const { data: session } = useSession();

  const tripDate = new Date(trip?.date);
  const year = tripDate.toLocaleString('en-GB', {
    year: 'numeric',
  });
  const month = tripDate.toLocaleString('en-GB', {
    month: 'long',
  });

  return (
    <div className="rounded-lg border border-gray-300 bg-white/20 pb-4 h-fit">
      {trip && (
        <div className="flex flex-col gap-5 h-full">
          <div className="flex gap-3 p-3">
            <Image
              src={trip.traveler.image}
              alt="user image"
              width={44}
              height={44}
              className="rounded-full object-contain"
            />

            <div className="flex flex-col flex-1">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {trip.traveler.username}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                {trip.traveler.email}
              </p>
            </div>
            {session?.user.id === trip.traveler._id && (
              <span className="flex gap-2 sm:gap-6 text-gray-500">
                <AiOutlineEdit
                  size="2em"
                  className="cursor-pointer hover:text-blue-700"
                  onClick={handleEdit}
                />
                <AiOutlineDelete
                  size="2em"
                  className="cursor-pointer hover:text-blue-700"
                  onClick={handleDelete}
                />
              </span>
            )}
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="bg-gradient-to-r from-sky-500 to-yellow-400 bg-clip-text text-transparent text-center text-4xl font-extrabold px-4">
              {trip.title}
            </h1>
            <Image
              src={trip?.image}
              width={850}
              height={850}
              alt={trip?.country}
              className="object-contain shadow-2xl"
            />
            <p className="text-lg text-gray-500 sm:text-xl lg:text-2xl max-w-2xl px-4">
              {trip?.details}
            </p>
          </div>
          <div className="flex flex-col items-end p-6">
            <p className="">
              My trip was to{' '}
              <span className="font-satoshi font-semibold text-gray-900">
                {trip.country}
              </span>
            </p>
            <p>
              I stay in{' '}
              <span className="font-satoshi font-semibold text-gray-900">
                {trip.hotel}
              </span>
            </p>
            <p>
              Trip was in{' '}
              <span className="font-satoshi font-semibold text-gray-900">
                {month} {year}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTrip;
