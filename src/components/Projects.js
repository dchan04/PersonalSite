import "./Projects.css";
import Card from "react-bootstrap/Card";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "react-bootstrap";

function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="projects-container" id="Projects">
			<motion.div
				className="title"
				ref={ref}
				style={{
					transform: isInView
						? "translateZ(0) translateY(0)"
						: "translateZ(-700px) translateY(200px)",
					opacity: isInView ? 1 : 0,
					transition:
						"all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
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
						<div className="project-name">
							Little Legends Tracker
						</div>
						<div className="project-description">
							Based around a game called Teamfight Tactics. The
							goal of this project is to provide simple statistics
							on "Little Legend" pick rates.
						</div>
						<div className="project-techstack">
							<span>React.js</span>
							<span>.NET 6</span>
							<span>C#</span>
							<span>MUI</span>
							<span>Docker</span>
						</div>
						<div className="project-links">
							<Button>Live Demo</Button>
							<Button
								href="https://github.com/dchan04/Legends"
								target="_blank"
							>
								Git
							</Button>
						</div>
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
						<div className="project-name">ChatGPT Clone</div>
						<div className="project-description">*Description*</div>
						<div className="project-techstack">
							<span>React.js</span>
							<span>.NET 7</span>
							<span>C#</span>
							<span>Docker</span>
						</div>
						<div className="project-links">
							<Button
								href="https://dchan04aiapp.onrender.com"
								target="_blank"
							>
								Live Demo
							</Button>
							<Button
								href="https://github.com/dchan04/OpenAI_Project"
								target="_blank"
							>
								Git
							</Button>
						</div>
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
							"all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s",
					}}
				>
					<Card className="project-card3">
						<div className="project-pic"></div>
						<div className="project-name">
							Bionic Text Converter
						</div>
						<div className="project-description">
							A simple bionic text converter that can take a file
							(pdf, txt, docx), extract the text, and convert it
							into bionic text.
						</div>
						<div className="project-techstack">
							<span>React.js</span>
							<span>.NET 7</span>
							<span>react-bootstrap</span>
						</div>
						<div className="project-links">
							<Button
								href="https://dchan04.github.io/BionicReader/"
								target="_blank"
							>
								Live Demo
							</Button>
							<Button
								href="https://github.com/dchan04/BionicReader"
								target="_blank"
							>
								Git
							</Button>
						</div>
					</Card>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Projects;
