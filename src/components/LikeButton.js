import { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

export default function LikeButton() {
  let [times, setTimes] = useState(0);

  function handleClick() {
    setTimes(times + 1);
  }

  return (
    <button
      className="like-button"
      style={{ backgroundColor: colors[times % colors.length] }}
      onClick={handleClick}
    >
      {times} Likes
    </button>
  );
}
