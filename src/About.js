import "./About.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div className="AboutContainer">
            <motion.div
                className="Title"
                ref={ref}
                style={{
                    transform: isInView ? "translateZ(0) translateY(0)" : "translateZ(-700px) translateY(500px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s"
                }}>
                <motion.span>
                    About Me
                </motion.span>
            </motion.div>
            <div className="Description">
            filler
            </div>
            <div className="skillContainer">
                <div className="redButton" />
                <div className="yellowButton" />
                <div className="greenButton" />
                <div className="url">DarrenChan.ca</div>
                <div className="skillsCategory">
                    <div className="purpleText">Skills</div>
                    <div className="firstBracket">{`{`}</div>
                    <div className="category">Languages =<span className="categoryText">HTML + CSS + JavaScript + C# + SQL;</span> </div>
                    <div className="category">Frameworks =<span className="categoryText">React.JS + .Net Framework + Bootstrap 5 + Node.js;</span> </div>
                    <div className="category">Databases =<span className="categoryText">MySql + SQLite + MongoDB;</span> </div>
                    <p className="endBracket">{`}`}</p>
                </div>
                <div className="educationCategory">
                    <div className="purpleText">Education</div>
                    <div className="firstBracket">{`{`}</div>
                    <div className="category">Degree =<span className="categoryText">Bachelor of Computing;</span></div>
                    <div className="category">Major =<span className="categoryText">Computer Science;</span></div>
                    <div className="category">Minor =<span className="categoryText">Business Economics;</span></div>
                    <div className="endBracket">{`}`}</div>
                </div>
            </div>
        </div>
  );
}

export default About;