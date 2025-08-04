import { useState } from "react";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";
import UserCard from "./UserCard";

export default function EditProfile({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addUser(res.data.data));
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center items-center m-14">
        <div className="card  card-dash bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div className="">
              <label className="form-control w-full max-w-xs">
                <div className="label my-3">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="firstName"
                  className="input input-bordered max-w-xs"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full  max-w-xs ">
                <div className="label my-3">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="lastName"
                  className="input input-bordered max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full  max-w-xs ">
                <div className="label my-3">
                  <span className="label-text">PhotoURL</span>
                </div>
                <input
                  type="text"
                  placeholder="photoURL"
                  className="input input-bordered max-w-xs"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>
              <label className="form-control w-full  max-w-xs ">
                <div className="label my-3">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  placeholder="age"
                  className="input input-bordered max-w-xs"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label my-3">
                  <span className="label-text">Gender</span>
                </div>
                <select
                  className="select select-bordered max-w-xs"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="form-control w-full  max-w-xs ">
                <div className="label my-3">
                  <span className="label-text">About</span>
                </div>
                <input
                  type="text"
                  placeholder="about"
                  className="input input-bordered max-w-xs"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={saveProfile}>
                SaveEdit
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
    </div>
  );
}
