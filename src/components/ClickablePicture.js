import { useState } from 'react';
export default function ClickablePicture({ img, imgClicked }) {
  let [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="clickable-picture">
      <img
        onClick={handleClick}
        src={clicked ? imgClicked : img}
        alt="maxence"
      />
    </div>
  );
}
