import Introduction from "./Introduction";
import Profile from "./Profile";
import Project1 from "./Project1";
import Header from "./Header";
const Body = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-5/6">
        <Introduction className="z-0 absolute" />
        <Profile className="z-10 absolute" />
      </div>
      <Project1 />
    </div>
  );
};

export default Body;
