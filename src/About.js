import "./About.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "react-bootstrap";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="AboutContainer">
      <motion.div
        className="Title"
        ref={ref}
        style={{
          transform: isInView
            ? "translateZ(0) translateY(0)"
            : "translateZ(-700px) translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        }}
      >
        <motion.p>About Me</motion.p>
      </motion.div>
      <motion.div
        className="Description"
        style={{
          transform: isInView
            ? "translateZ(0) translateY(0)"
            : "translateZ(-700px) translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s",
        }}
      >
        <p>
          Hello, my name is Darren Chan. I completed my Bachelor of Computing at
          University of Guelph, Majoring in Computer Science and Minoring in
          Business Economics.
        </p>

        <p>
          After University, I began leaning more towards Web Development. This
          interest led me to learning <span id="reactLogoColor">React.js</span>{" "}
          for front-end development and <span id="aspLogoColor">ASP.NET</span>{" "}
          for back-end development.
        </p>

        <p>
          I'm open to all Job opportunities where I can contribute, learn and
          grow. If you think you have an opportunity that I would be best suited
          for, feel free to contact me!
        </p>
        <div>
          <a href="" className="contact-button">
            Contact
          </a>
        </div>
      </motion.div>
      <motion.div
        className="skillContainer"
        style={{
          transform: isInView
            ? "translateZ(0) translateY(0)"
            : "translateZ(-700px) translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.4s",
        }}
      >
        <div className="redButton" />
        <div className="yellowButton" />
        <div className="greenButton" />
        <div className="url">DarrenChan.ca</div>
        <div className="skillsCategory">
          <div className="purpleText">Skills</div>
          <div className="firstBracket">{`{`}</div>
          <div className="category">
            Languages =
            <span className="categoryText">
              HTML + CSS + JavaScript + C# + SQL;
            </span>{" "}
          </div>
          <div className="category">
            Frameworks =
            <span className="categoryText">
              React.JS + .Net Framework + Bootstrap + Node.js;
            </span>{" "}
          </div>
          <div className="category">
            Databases =
            <span className="categoryText">MySql + SQLite + MongoDB;</span>{" "}
          </div>
          <div className="category">
            Others =<span className="categoryText">Git;</span>{" "}
          </div>
          <p className="endBracket">{`}`}</p>
        </div>
        <div className="educationCategory">
          <div className="purpleText">Education</div>
          <div className="firstBracket">{`{`}</div>
          <div className="category">
            Degree =<span className="categoryText">Bachelor of Computing;</span>
          </div>
          <div className="category">
            Major =<span className="categoryText">Computer Science;</span>
          </div>
          <div className="category">
            Minor =<span className="categoryText">Business Economics;</span>
          </div>
          <div className="endBracket">{`}`}</div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
