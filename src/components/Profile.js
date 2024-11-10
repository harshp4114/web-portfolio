import gsap from "gsap";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    gsap.from(
      "#profile",
      {
        x: 70,
        y: 0,
        opacity: 0,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <div className="w-full flex h-[34rem] justify-end items-center">
      <img
        id="profile"
        src="https://avatars.githubusercontent.com/u/142822496?v=4"
        alt="profile text"
        className="h-[29rem] w-[29rem] mr-20 rounded-lg"
      ></img>
    </div>
  );
};

export default Profile;
