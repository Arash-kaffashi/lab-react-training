function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  let date = new Date(birth).toUTCString().split(' 00:')[0];

  return (
    <div className="idCard-border">
      <img src={picture} alt="profile pic" />
      <div>
        <p>
          <strong>First name</strong>: {firstName}
          <br />
          <strong>Last name</strong>: {lastName}
          <br />
          <strong>Gender</strong>: {gender}
          <br />
          <strong>Height</strong>: {height / 100}m
          <br />
          <strong>Birth</strong>: {date}
          <br />
        </p>
      </div>
    </div>
  );
}

export default IdCard;
