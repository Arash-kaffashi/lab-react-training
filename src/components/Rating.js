export default function Rating({ children }) {
  let num_stars = Math.round(Number(children));
  return (
    <div className="rating">
      {'★'.repeat(num_stars) + '☆'.repeat(5 - num_stars)}
    </div>
  );
}
