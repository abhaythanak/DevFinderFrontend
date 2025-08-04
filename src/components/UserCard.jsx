export default function UserCard({ user }) {
  const { firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="card w-full max-w-sm bg-base-200 shadow-md mx-auto">
      <figure className="h-60 overflow-hidden">
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-lg md:text-xl">
          {firstName + " " + lastName}
          {age && gender && (
            <div className="badge badge-secondary text-xs">{`${age} ${gender}`}</div>
          )}
        </h2>
        <p className="text-center text-sm">{about}</p>
        <div className="card-actions justify-center mt-3 gap-4">
          <span className="badge badge-outline bg-red-700 text-white px-4 py-2 cursor-pointer hover:bg-red-800">
            Ignore
          </span>
          <span className="badge badge-outline bg-green-700 text-white px-4 py-2 cursor-pointer hover:bg-green-800">
            Send Request
          </span>
        </div>
      </div>
    </div>
  );
}
