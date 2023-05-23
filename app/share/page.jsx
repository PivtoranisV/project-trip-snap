'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';

const NewTrip = () => {
  const [submitting, setSubmitting] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const addTripHandler = async (userInput) => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/trip/new', {
        method: 'POST',
        body: JSON.stringify({ ...userInput, userId: session?.user.id }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col">
      <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
          Share Your Trip
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-500 sm:text-xl lg:text-2xl max-w-2xl text-center">
        Traveling is all about discovering amazing places, breathtaking views,
        and exciting adventures. We want to hear about your trip and inspire
        other adventurers to embark on their own extraordinary journeys. <br />
        Whether you found hidden gems, explored stunning landscapes, or had
        thrilling experiences, share the details with us. Your story can ignite
        the wanderlust in others and encourage them to create their own
        unforgettable memories.
      </p>
      <Form onAddTrip={addTripHandler} submitting={submitting} />
    </section>
  );
};

export default NewTrip;
