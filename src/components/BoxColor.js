export default function BoxColor({ r, g, b }) {
  return (
    <div
      className="border"
      style={{ backgroundColor: `rgb(${[r, g, b].join(',')})` }}
    >
      <p className="text-center">
        <span>
          rgb({r}, {g}, {b})
        </span>
        <br />
        <span>
          #
          {[r, g, b].reduce(
            (acc, color) => (acc += color.toString(16).padStart(2, '0')),
            ''
          )}
        </span>
      </p>
    </div>
  );
}
