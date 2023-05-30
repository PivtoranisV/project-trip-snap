'use client';
import DetailTrip from '@components/DetailTrip';
import { useState, useEffect } from 'react';

const DetailPage = ({ params }) => {
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    console.log('run use effect');
    const fetchTrip = async () => {
      const response = await fetch(`/api/trip/${params._id}`);
      const data = await response.json();
      setTrip(data);
    };
    fetchTrip();
  }, [params?._id]);

  console.log(trip);

  return <DetailTrip trip={trip} />;
};

export default DetailPage;
