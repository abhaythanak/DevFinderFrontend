export default function UserCard({ user }) {
  console.log(user);
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title justify-center">
          {firstName + " " + lastName}
          {age && gender && (
            <div className="badge badge-secondary">{age + " " + gender}</div>
          )}
        </h2>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline bg-red-700">Ignore</div>
          <div className="badge badge-outline bg-green-800">Send Request</div>
        </div>
      </div>
    </div>
  );
}
