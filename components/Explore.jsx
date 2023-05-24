'use client';
import { useState, useEffect } from 'react';
import TripList from './TripList';
import Search from './Search';

const Explore = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch('/api/trip');
      const data = await response.json();
      setTrips(data);
    };
    fetchTrips();
  }, []);

  console.log(trips);
  return (
    <section className="mt-16 mx-auto w-full max-w-7xl flex justify-center items-center flex-col gap-2">
      <Search />
      <TripList data={trips} />
    </section>
  );
};

export default Explore;
