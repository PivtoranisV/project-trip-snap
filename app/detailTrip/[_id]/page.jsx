'use client';
import DetailTrip from '@components/DetailTrip';
import { useState, useEffect } from 'react';

const DetailPage = ({ params }) => {
  const [trip, setTrip] = useState('');

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trip/${params._id}`);
      const data = await response.json();
      setTrip(data);
    };
    fetchTrip();
  }, [params?._id]);

  return <DetailTrip trip={trip} />;
};

export default DetailPage;
