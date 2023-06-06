import Trip from './Trip';

const TripList = ({ data, search }) => {
  let trips = data;
  if (search) {
    trips = data.filter((trip) =>
      trip.country.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {trips.map((trip) => (
        <Trip key={trip._id} trip={trip} />
      ))}
    </div>
  );
};

export default TripList;
