import profiles from '../data/berlin.json';

function FacebookId({ firstName, lastName, country, img, isStudent }) {
  return (
    <div
      className="idCard-border border facebook-id"
      key={firstName + lastName}
    >
      <img src={img} alt="profile pic" />
      <p>
        <strong>First name</strong>: {firstName}
        <br />
        <strong>Last name</strong>: {lastName}
        <br />
        <strong>Country</strong>: {country}
        <br />
        <strong>Type</strong>: {isStudent ? 'Student' : 'Teacher'}
      </p>
    </div>
  );
}

export default function Facebook() {
  return <div className="facebook">{profiles.map(FacebookId)}</div>;
}
