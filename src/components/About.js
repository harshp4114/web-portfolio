import TechStack from "./TechStack";
import resumeFile from "../assets/resume.pdf"
const About = () => {
  return (
    <div id="about" className="h-full justify-center content-start flex flex-wrap w-full absolute z-50 bg-white">
        <div className="basis-full flex justify-center items-start">

        <h1 className="text-5xl mb-4 font-dm-sans mt-9">Tech Stack</h1>
        </div>
        <TechStack />
        <div className="w-11/12 rounded-full border-black border-2 mt-10"></div>
      <div className="flex justify-center basis-full flex-wrap">
        <div className="flex items-center justify-center mr-3 space-x-2 mt-2 ml-4 w-full">
          <a href="http://localhost:1234/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20 mr-1 cursor-pointer"
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
          <pre className="text-[3.5rem] pt-1 pb-3 font-extralight text-[#323232] mb-4 font-dm-sans">
            |{" "}
          </pre>
          <a
            id="name"
            href="http://localhost:1234/"
            className="text-5xl ml-3 pt-1 pb-3 font-extralight text-[#323232] mb-4 cursor-pointer font-dm-sans border-t-[3px] border-transparent hover:border-gray-500 transition-all duration-300 ease-in-out"
          >
            Harsh Patadia
          </a>
        </div>
        <div className="flex items-center w-full justify-center">
          <a
            href="https://github.com/harshp4114"
            className="text-black text-xl ml-12 mr-12 hover:text-[2rem] transition-all duration-1s font-dm-sans hover:text-gray-700 "
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-patadia-a677a4289/"
            className="text-black text-xl ml-12 mr-12 hover:text-[2rem] transition-all duration-1s font-dm-sans hover:text-gray-700 "
          >
            Linkedin
          </a>
          <a
            href="mailto:harshpatadia4114@gmail.com"
            className="text-black text-xl ml-12 mr-12 hover:text-[2rem] transition-all duration-1s font-dm-sans hover:text-gray-700 "
          >
            Gmail
          </a>
          <a
            href={resumeFile} download="HarshKPatadia_resume.pdf"
            className="text-black text-xl ml-12 mr-12 hover:text-[2rem] transition-all duration-1s font-dm-sans hover:text-gray-700 "
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
