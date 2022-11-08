import Rating from './Rating';

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <div className="driver-img">
        <img src={img} alt="profile" />
      </div>
      <div className="driver-info">
        <span>{name}</span>
        <Rating>{rating}</Rating>
        <span>{Object.values(car).join(' - ')}</span>
      </div>
    </div>
  );
}
