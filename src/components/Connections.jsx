import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

export default function Connections() {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await axios.get(BASE_URL + "/user/connections", {
          withCredentials: true,
        });
        dispatch(addConnections(res.data.data));
      } catch (error) {
        console.error("Failed to fetch connections", error);
      }
    };

    fetchConnections();
  }, [dispatch]);

  if (!connections || connections.length === 0)
    return (
      <h1 className="text-center mt-10 text-xl text-white">
        No Connections Found
      </h1>
    );

  return (
    <div className="text-center"><h1 className="text-bold text-3xl">Connections</h1>
    <div className="flex flex-wrap justify-center items-start gap-6 p-6">
      
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className="bg-gray-800 text-white w-80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-4">
              <img
                src={photoUrl || "https://via.placeholder.com/80"}
                alt={`${firstName} ${lastName}`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {firstName} {lastName}
                </h2>
                {age && gender && (
                  <p className="text-sm text-gray-300 capitalize">
                    {gender}, {age} yrs
                  </p>
                )}
              </div>
            </div>
            {about && (
              <p className="text-sm text-gray-400">
                {about.length > 100 ? about.slice(0, 100) + "..." : about}
              </p>
            )}
          </div>
        );
      })}
    </div>
    </div>
  );
}
