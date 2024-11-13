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
    <div className="w-full flex h-full xl:h-3/4 justify-center xl:justify-end items-center">
      <img
        id="profile"
        src="https://avatars.githubusercontent.com/u/142822496?v=4"
        alt="profile text"
        className="h-[52vw] w-[52vw] fixed top-[5.5rem] mb-24 mt-2 xl:h-[29rem] xl:mb-0 xl:w-[29rem] xl:mt-16 xl:static xl:mr-20 rounded-lg"
      ></img>
    </div>
  );
};

export default Profile;
