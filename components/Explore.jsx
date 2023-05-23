import React from 'react';
import TripList from './TripList';
import Search from './Search';

const DUMMY_TRIPS = [
  {
    traveler: 't1',
    image:
      'https://www.golivegotravel.nl/wp-content/uploads/2020/05/Virmenska-Lviv.jpeg',
    title: 'A First Trip',
    country: 'Ukraine',
    date: '12.12.2020',
    hotel: 'Home',
    details: 'This is first trip!',
  },
  {
    traveler: 't2',
    image:
      'https://www.golivegotravel.nl/wp-content/uploads/2020/05/Virmenska-Lviv.jpeg',
    title: 'A Second Trip',
    country: 'Poland',
    date: '12.12.2020',
    hotel: 'Home',
    details: 'This is second trip!',
  },
];

const Explore = () => {
  return (
    <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
      <Search />
      <TripList data={DUMMY_TRIPS} />
    </section>
  );
};

export default Explore;
