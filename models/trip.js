import { Schema, models, model } from 'mongoose';

const TripSchema = new Schema({
  traveler: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  hotel: {
    type: String,
    required: [true, 'Hotel is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  details: {
    type: String,
    required: [true, 'Details are required'],
  },
});

const Trip = models.Trip || model('Trip', TripSchema);

export default Trip;
