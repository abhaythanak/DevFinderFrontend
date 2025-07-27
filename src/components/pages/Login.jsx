import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    axios.post("http://localhost:3000/login", {
      emailId,
      password,
    });
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
