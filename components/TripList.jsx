import Trip from './Trip';

const TripList = ({ data }) => {
  return (
    <div className="space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
      {data.map((trip) => (
        <Trip
          key={trip.traveler}
          image={trip.image}
          title={trip.title}
          country={trip.country}
          date={trip.date}
          hotel={trip.hotel}
          details={trip.details}
        />
      ))}
    </div>
  );
};

export default TripList;
