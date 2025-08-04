import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/Constants";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { useEffect } from "react";
import UserCard from "./UserCard";

export default function Feed() {
  const feedData = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feedData) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    feedData && (
      <div className="flex justify-center items-center my-10">
        <UserCard user={feedData[0]} />
      </div>
    )
  );
}
