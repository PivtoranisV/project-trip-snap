'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const UpdateTrip = ({ params }) => {
  const [submitting, setSubmitting] = useState(false);
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

  const addTripHandler = async (userInput) => {
    // setSubmitting(true);
    // try {
    //   const response = await fetch('/api/trip/new', {
    //     method: 'POST',
    //     body: JSON.stringify({ ...userInput, userId: session?.user.id }),
    //   });
    //   if (response.ok) {
    //     router.push('/');
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setSubmitting(false);
    // }
  };

  return (
    <section className="flex flex-col">
      <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
          Update Your Trip
        </span>
      </h1>
      <Form onAddTrip={addTripHandler} submitting={submitting} />
    </section>
  );
};

export default UpdateTrip;
