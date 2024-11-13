import TechStack from "./TechStack";
import resumeFile from "../assets/resume.pdf";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen justify-center content-start flex flex-wrap w-full absolute z-50 bg-white xl:h-full xl:justify-center xl:content-start xl:flex xl:flex-wrap xl:w-full xl:absolute xl:z-50 xl:bg-white"
    >
      <div className="basis-full flex justify-center items-start">
        <h1 className="text-[9vw] font-dm-sans mt-6 mb-2 xl:text-5xl xl:mb-4 xl:font-dm-sans xl:mt-10">
          Tech Stack
        </h1>
      </div>
      <TechStack />
      <div className="w-11/12 rounded-full border-black border-2 mt-10 xl:w-11/12 xl:rounded-full xl:border-black xl:border-2 xl:mt-12"></div>
      <div className="flex justify-center basis-full flex-wrap mt-5 xl:flex xl:justify-center xl:basis-full xl:flex-wrap xl:mt-5">
        <div className="flex items-center leading-10 justify-center mr-3 space-x-2 mt-2 ml-4 w-full xl:flex xl:items-center xl:leading-10 xl:justify-center xl:mr-3 xl:space-x-2 xl:mt-2 xl:ml-4 xl:w-full">
          <a href="https://harshkp-portfolio.netlify.app/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-[16vw] h-[16vw] xl:w-20 xl:h-20 mr-1 cursor-pointer"
            >
              <g transform="translate(20, 70)">
                <text
                  x="-7"
                  y="-29"
                  fontFamily="Arial"
                  fontWeight="700"
                  fontSize="45"
                  fill="#323232"
                  fontStyle="italic"
                >
                  H
                </text>
                <text
                  x="14"
                  y="-16"
                  transform="rotate(17)"
                  fontFamily="Arial"
                  fontWeight="100"
                  fontSize="80"
                  fill="#323232"
                >
                  /
                </text>
                <text
                  x="43"
                  y="-7"
                  fontFamily="Arial"
                  fontWeight="700"
                  fontSize="45"
                  fill="#323232"
                  fontStyle="italic"
                >
                  P
                </text>
              </g>
            </svg>
          </a>
          <pre className="text-[13vw] pt-1 pb-2 font-extralight text-[#323232] mb-4 font-dm-sans xl:text-[3.5rem] xl:pt-1 xl:pb-3 xl:font-extralight  xl:text-[#323232] xl:mb-4 xl:font-dm-sans">
            |{" "}
          </pre>
          <a
            id="name"
            href="https://harshkp-portfolio.netlify.app/"
            className="text-[10vw] ml-3 pt-1 pb-3 font-extralight text-[#323232] mb-4 cursor-pointer font-dm-sans border-t-[3px] border-transparent xl:text-5xl  xl:ml-3 xl:pt-1 xl:pb-3 xl:font-extralight xl:text-[#323232] xl:mb-4 xl:cursor-pointer xl:font-dm-sans xl:border-t-[3px] xl:border-transparent"
          >
            Harsh Patadia
          </a>
        </div>
        <div className="flex flex-wrap items-center w-full justify-center mt-1 xl:flex xl:flex-wrap xl:items-center xl:w-full xl:justify-center xl:mt-2">
          <a
            href="https://github.com/harshp4114"
            target="_blank"
            className="text-black text-[5vw] ml-12 mr-12 font-dm-sans hover:text-gray-700 xl:text-black xl:text-xl xl:mt-0 xl:ml-12 xl:mr-12 xl:hover:text-[2rem] xl:transition-all duration-1s xl:font-dm-sans xl:hover:text-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-patadia-a677a4289/"
            target="_blank"
            className="text-black text-[5vw] ml-12 mr-12 font-dm-sans hover:text-gray-700 xl:text-black xl:text-xl xl:mt-0 xl:ml-12 xl:mr-12 xl:hover:text-[2rem] xl:transition-all duration-1s xl:font-dm-sans xl:hover:text-gray-700"
          >
            Linkedin
          </a>
          <a
            href="mailto:harshpatadia4114@gmail.com"
            target="_blank"
            className="text-black text-[5vw] ml-12 mr-12 mt-4 font-dm-sans hover:text-gray-700 xl:text-black xl:text-xl xl:ml-12 xl:mt-0 xl:mr-12 xl:hover:text-[2rem] xl:transition-all duration-1s xl:font-dm-sans xl:hover:text-gray-700"
          >
            Gmail
          </a>
          <a
            href={resumeFile}
            download="HarshKPatadia_resume.pdf"
            className="text-black text-[5vw] ml-12 mr-12 mt-4 font-dm-sans hover:text-gray-700 xl:text-black xl:text-xl xl:ml-12 xl:mr-12 xl:mt-0 xl:hover:text-[2rem] xl:transition-all duration-1s xl:font-dm-sans xl:hover:text-gray-700"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
