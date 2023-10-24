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
							Created a web application centered around statistics
							on "Little Legend" pick rates in a game called
							Teamfight Tactics. This application offers a fun way
							for players to explore dynamic trends in 'Little
							Legend' popularity.
						</div>
						<div className="project-techstack">
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
									alt="react icon"
								/>{" "}
								React.js
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
									alt="Asp.net icon"
								/>{" "}
								.NET 6
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
									alt="C# icon"
								/>{" "}
								C#
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
									alt="mui icon"
								/>{" "}
								MUI
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
									alt="Docker icon"
								/>{" "}
								Docker
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
									alt="Bootstrap icon"
								/>{" "}
								Bootstrap
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
									alt="sqlite icon"
								/>{" "}
								SQLite
							</span>
						</div>
						<div className="project-links">
							<Button
								href="https://dchan04.github.io/Legends/"
								target="_blank"
							>
								Live Demo
							</Button>
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
						<div className="project-description">
							Developed an intelligent chatbot on the browser
							using artificial intelligence API. Users interact
							with the chatbot by sending messages and receiving
							AI-generated responses.
						</div>
						<div className="project-techstack">
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
									alt="react icon"
								/>{" "}
								React.js
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
									alt="Asp.net icon"
								/>{" "}
								.NET 7
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
									alt="C# icon"
								/>{" "}
								C#
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
									alt="Bootstrap icon"
								/>{" "}
								Bootstrap
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
									alt="Docker icon"
								/>{" "}
								Docker
							</span>
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
							The Bionic Text Converter is a user-friendly tool
							that extracts text from PDF, TXT, and DOCX files and
							converts it into Bionic Text.
						</div>
						<div className="project-techstack">
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
									alt="react icon"
								/>{" "}
								React.js
							</span>
							<span>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
									alt="Bootstrap icon"
								/>{" "}
								Bootstrap
							</span>
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
