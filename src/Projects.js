import "./Projects.css";
import Card from "react-bootstrap/Card";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="projects-container">
      <motion.div
        className="title"
        ref={ref}
        style={{
          transform: isInView
            ? "translateZ(0) translateY(0)"
            : "translateZ(-700px) translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        }}
      >
        <motion.p>Projects</motion.p>
      </motion.div>
      <motion.div className="main-container">
        <motion.div
          className="card-container"
          style={{
            transform: isInView
              ? "translateZ(0) translateY(0)"
              : "translateZ(-700px) translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition:
              "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s",
          }}
        >
          <Card className="project-card1">
            <div className="project-pic"></div>
            <div className="project-name">Project 1</div>
          </Card>
        </motion.div>
        <motion.div
          className="card-container"
          style={{
            transform: isInView
              ? "translateZ(0) translateY(0)"
              : "translateZ(-700px) translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition:
              "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.75s",
          }}
        >
          <Card className="project-card2">
            <div className="project-pic"></div>
            <div className="project-name">Project 2</div>
          </Card>
        </motion.div>
        <motion.div
          className="card-container"
          style={{
            transform: isInView
              ? "translateZ(0) translateY(0)"
              : "translateZ(-700px) translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s",
          }}
        >
          <Card className="project-card3">
            <div className="project-pic"></div>
            <div className="project-name">Project 3</div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
