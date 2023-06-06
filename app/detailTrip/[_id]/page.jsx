'use client';
import DetailTrip from '@components/DetailTrip';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DetailPage = ({ params }) => {
  const [trip, setTrip] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trip/${params._id}`);
      const data = await response.json();
      setTrip(data);
    };
    fetchTrip();
  }, [params?._id]);

  const handleEdit = () => {
    router.push(`/trip-update/${params._id}`);
  };
  const handleDelete = async () => {
    const hasConfirm = confirm('Are you sure you want to delete this Trip?');

    if (hasConfirm) {
      try {
        const response = await fetch(`/api/trip/${params._id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <DetailTrip
      trip={trip}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default DetailPage;
