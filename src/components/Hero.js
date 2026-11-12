import resumeFile from "../assets/resume.pdf";

const Hero = () => (
  <header className="station" id="top">
    <div className="nameboard">
      <span className="post" aria-hidden="true"></span>
      <span className="post" aria-hidden="true"></span>
      <span className="hi js-hi" lang="hi">नमस्ते दुनिया</span>
      <h1>
        <span className="js-hello">Hello</span> <span className="js-world">World.</span>
      </h1>
    </div>
    <div className="intro js-intro">
      <p className="who">Harsh Patadia · Full-Stack Developer</p>
      <p>
        I’m Harsh Patadia, a Full-Stack Developer at Resilient Tech with a passion for coding and
        web development. I’ve contributed 22 merged pull requests to Frappe and ERPNext, and I
        enjoy transforming ideas into impactful, real-world solutions.
      </p>
      <a className="ticket" href={resumeFile} download="HarshKPatadia_resume.pdf">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M12 3v13m0 0-5-5m5 5 5-5M4 21h16" />
        </svg>
        Get resume
      </a>
    </div>
  </header>
);

export default Hero;
