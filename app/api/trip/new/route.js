import Trip from '@models/trip';
import { connectDB } from '@utils/database';

export const POST = async (req) => {
  const { userId, title, country, date, hotel, details } = await req.json();

  try {
    await connectDB();

    const newTrip = new Trip({
      traveler: userId,
      title,
      country,
      date,
      hotel,
      details,
    });
    await newTrip.save();

    return new Response(JSON.stringify(newTrip), { status: 201 });
  } catch (error) {
    return new Response('Failed to create new Trip', { status: 500 });
  }
};
