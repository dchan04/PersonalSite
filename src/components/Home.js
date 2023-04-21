import "./Home.css";
import githubIcon from "./assets/github-mark.png";
import linkedInIcon from "./assets/linkedin.png";
import resumeIcon from "./assets/resume.png";
import avatar from "./assets/dcAvatar.png";
import Image from "react-bootstrap/Image";

function HomePage() {
  return (
    <div className="HomeContainer">
      <div className="introContainer">
        <div className="intro">
          Hello
          <div className="delayedText">
            <span className="intro2">
              , My Name is <span id="name">Darren</span>
            </span>
          </div>
        </div>
        <div className="description">
          <p>
            I'm a Software Developer from Canada. I have a passion for all
            things technology and design, from Software Engineering to UI/UX.
          </p>
        </div>
        <div className="picContainer">
          <Image className="dcAvatar" src={avatar}></Image>
        </div>
        <div className="social-links">
          <div id="linkedin" className="social-btn flex-center">
            <Image className="linkIcons" src={linkedInIcon}></Image>{" "}
            <span>LinkedIn</span>
          </div>

          <div id="github" className="social-btn flex-center">
            <Image className="linkIcons" src={githubIcon}></Image>{" "}
            <span>GitHub</span>
          </div>
          <div id="resume" className="social-btn flex-center">
            <Image className="linkIcons" src={resumeIcon}></Image>{" "}
            <span>Download Resume</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
