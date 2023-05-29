import Trip from '@models/trip';
import { connectDB } from '@utils/database';

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const trips = await Trip.find({ _id: params._id }).populate('traveler');
    return new Response(JSON.stringify(trips), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all trips', { status: 500 });
  }
};
