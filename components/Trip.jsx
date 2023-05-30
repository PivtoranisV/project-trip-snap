import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Trip = ({ trip }) => {
  return (
    <Link
      href={`/detailTrip/${trip._id}`}
      className="rounded-lg border border-gray-300 bg-white/20 pb-4 h-fit cursor-pointer"
    >
      <div className="flex flex-col gap-5 h-full">
        <div className="flex gap-3 px-4 pt-4">
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
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src={trip.image}
            width={250}
            height={250}
            alt={trip.country}
            className="object-contain shadow-2xl"
          />
        </div>
        <h3 className="bg-gradient-to-r from-sky-500 to-yellow-400 bg-clip-text text-transparent text-center text-4xl font-extrabold">
          {trip.country}
        </h3>
      </div>
    </Link>
  );
};

export default Trip;
