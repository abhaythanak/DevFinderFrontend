import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/Constants";

export default function Login() {
  const [emailId, setEmailId] = useState("vijay@gmail.com");
  const [password, setPassword] = useState("Gta@2015");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center m-14">
      <div className="card  card-dash bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="">
            <label className="form-control w-full max-w-xs">
              <div className="label my-3">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full  max-w-xs ">
              <div className="label my-3">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
