import Explore from '@components/Explore';

const Home = () => {
  return (
    <section className="max-w-2xl">
      <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Share & Explore
        <br />
        <span className="bg-gradient-to-r from-blue-500 via-amber-300 to-yellow-400 bg-clip-text text-transparent text-center">
          Welcome to TripSnap!
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-500 sm:text-xl lg:text-2xl max-w-2xl text-center">
        It&apos;s the perfect place to share and discover amazing travel
        experiences from all over the world. Whether you&apos;re a frequent
        traveler or just love to read about travel, TripSnap lets you create
        your own travel story. Share your exciting adventures, from thrilling
        trips to peaceful getaways, and inspire others to go on their own
        unforgettable journeys.
      </p>

      <Explore />
    </section>
  );
};

export default Home;
