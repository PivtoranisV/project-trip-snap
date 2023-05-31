import Trip from '@models/trip';
import { connectDB } from '@utils/database';

export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const trip = await Trip.findById(params._id).populate('traveler');
    return new Response(JSON.stringify(trip), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch detail trip', { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { title, country, date, hotel, image, details } = await req.json();

  try {
    await connectDB();

    const existingTrip = await Trip.findById(params._id);
    existingTrip.title = title;
    existingTrip.country = country;
    existingTrip.date = date;
    existingTrip.hotel = hotel;
    existingTrip.image = image;
    existingTrip.details = details;

    await existingTrip.save();
    return new Response(JSON.stringify(existingTrip), { status: 200 });
  } catch (error) {
    return new Response('Failed to update trip', { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();

    await Trip.findByIdAndRemove(params._id);

    return new Response('Trip deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to delete Trip', { status: 500 });
  }
};
