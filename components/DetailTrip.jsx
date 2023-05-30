import Image from 'next/image';

const DetailTrip = ({ trip }) => {
  console.log(trip);
  return (
    <div className="rounded-lg border border-gray-300 bg-white/20 p-6 pb-4 h-fit">
      <div className="flex flex-col gap-5 h-full">
        <div className="flex gap-3 cursor-pointer">
          <Image
            src={trip[0]?.traveler?.image}
            alt="user image"
            width={44}
            height={44}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col flex-1">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {trip[0]?.traveler?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {trip[0]?.traveler?.email}
            </p>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src={trip[0]?.image}
            width={850}
            height={850}
            alt={trip[0]?.country}
            className="object-contain shadow-2xl"
          />
        </div>
        <h3 className="bg-gradient-to-r from-sky-500 to-yellow-400 bg-clip-text text-transparent text-center text-4xl font-extrabold">
          {trip[0]?.country}
        </h3>
      </div>
    </div>
  );
};

export default DetailTrip;
