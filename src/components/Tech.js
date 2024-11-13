const Tech = (props) => {
  const { path, url } = props;
  return (
    <div id="tech" className=" rounded-lg h-1/5 w-1/5 opacity-100 bg-blend-lighten bg-black">
      <a href={url} className="h-full w-full"  target="_blank">
        <img
          src={path}
          className="animated-link h-full p-[0.5rem] transition-all duration-4s hover:p-1 w-full rounded-lg  border-2 border-white object-cover xl:h-full xl:p-4 xl:transition-all duration-4s xl:hover:p-1 xl:w-full xl:rounded-lg  xl:border-2 xl:border-white xl:object-cover"
        ></img>
      </a>
    </div>
  );
};

export default Tech;
