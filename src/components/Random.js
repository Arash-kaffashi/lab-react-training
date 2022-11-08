export default function Random({ min, max }) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="border">
      <p>
        Random value between {min} and {max} =&gt; {random}
      </p>
    </div>
  );
}
