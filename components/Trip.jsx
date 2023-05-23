import Image from 'next/image';
import React from 'react';

const Trip = ({ image, country }) => {
  return (
    <div className="rounded-lg border border-gray-300 bg-white/20 p-6 pb-4 md:w-[360px] w-[300px] h-fit">
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 cursor-pointer">
          <Image
            src="/logo2.png"
            alt="user_image"
            width={30}
            height={30}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              Volodymyr Pivtoranis
            </h3>
            <p className="font-inter text-sm text-gray-500">
              pivtorani87@gmail.com
            </p>
          </div>
        </div>
        <div>
          <Image
            src={image}
            width={250}
            height={250}
            alt={country}
            className="object-contain shadow-2xl mx-auto"
          />
        </div>
        <h3 className="bg-gradient-to-r from-sky-500 to-yellow-400 bg-clip-text text-transparent text-center text-4xl font-extrabold">
          {country}
        </h3>
      </div>
    </div>
  );
};

export default Trip;
