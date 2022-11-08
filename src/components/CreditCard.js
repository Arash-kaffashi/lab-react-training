import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.svg';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
      <img src={type === 'Visa' ? visa : master} alt="card provider" />
      <p className="card-n">{'•••• •••• •••• ' + number.slice(-4)}</p>
      <div className="card-info">
        <span>
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span>{bank}</span>
        <span>{owner}</span>
      </div>
    </div>
  );
}
