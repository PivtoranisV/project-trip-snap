'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import TripList from './TripList';
import Search from './Search';

const Explore = () => {
  const [trips, setTrips] = useState([]);
  const { data: session } = useSession();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch('/api/trip');
      const data = await response.json();
      setTrips(data.reverse());
    };
    fetchTrips();
  }, []);

  return (
    <section className="mt-16 mx-auto w-full max-w-7xl flex justify-center items-center flex-col gap-2">
      {session ? (
        <>
          <Search searchText={searchText} setSearchText={setSearchText} />
          <TripList data={trips} search={searchText} />
        </>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-sky-300/10 shadow-inner p-5">
          <p className="text-lg text-gray-500 sm:text-xl lg:text-2xl max-w-2xl text-center">
            To Explore you need to Sign In
          </p>
        </div>
      )}
    </section>
  );
};

export default Explore;
