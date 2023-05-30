import Image from 'next/image';

const DetailTrip = ({ trip }) => {
  const tripDate = new Date(trip?.date);
  const year = tripDate.toLocaleString('en-GB', {
    year: 'numeric',
  });
  const month = tripDate.toLocaleString('en-GB', {
    month: 'long',
  });

  return (
    <div className="rounded-lg border border-gray-300 bg-white/20 pb-4 h-fit">
      <div className="flex flex-col gap-5 h-full">
        <div className="flex gap-3 cursor-pointer p-6">
          <Image
            src={trip?.traveler?.image}
            alt="user image"
            width={44}
            height={44}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col flex-1">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {trip?.traveler?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {trip?.traveler?.email}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="bg-gradient-to-r from-sky-500 to-yellow-400 bg-clip-text text-transparent text-center text-4xl font-extrabold px-4">
            {trip?.title}
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
              {trip?.country}
            </span>
          </p>
          <p>
            I stay in{' '}
            <span className="font-satoshi font-semibold text-gray-900">
              {trip?.hotel}
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
    </div>
  );
};

export default DetailTrip;
