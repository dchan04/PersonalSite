import "./About.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "react-bootstrap";
function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="AboutContainer" id="AboutMe">
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
				<motion.p>About Me</motion.p>
			</motion.div>
			<motion.div
				className="main-container"
				style={{
					transform: isInView
						? "translateZ(0) translateY(0)"
						: "translateZ(-700px) translateY(200px)",
					opacity: isInView ? 1 : 0,
					transition:
						"all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s",
				}}
			>
				<motion.div
					className="Description"
					style={{
						transform: isInView
							? "translateZ(0) translateY(0)"
							: "translateZ(-700px) translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition:
							"all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.2s",
					}}
				>
					<p>
						Hello, I'm Darren Chan, a highly motivated and
						results-oriented professional. I graduated from the
						University of Guelph with a Bachelor of Computing,
						specializing in Computer Science and minoring in
						Business Economics.
					</p>

					<p>
						Throughout my academic journey, my passion for web
						development took center stage, driving me to delve
						deeper into this field. I have acquired strong
						proficiency in <span id="reactLogoColor">React.js</span>{" "}
						for front-end development, enabling me to create
						interactive and visually appealing user interfaces.
						Additionally, I have honed my skills in{" "}
						<span id="aspLogoColor">ASP.NET</span> for back-end
						development, empowering me to build robust and scalable
						server-side functionalities.
					</p>

					<p>
						I am currently seeking new job opportunities where I can
						apply my expertise, contribute to exciting projects, and
						further expand my skill set. I possess a strong
						eagerness to learn and grow in a dynamic professional
						environment. If you believe that you have an opportunity
						that aligns with my skill set and ambitions, I would be
						delighted to connect with you. Please feel free to reach
						out to me!
					</p>
					<Button
						className="contactButton"
						href="mailto:darrenchan1123@gmail.com"
						target="_blank"
					>
						Contact
					</Button>
				</motion.div>
				<motion.div
					className="skill-container"
					style={{
						transform: isInView
							? "translateZ(0) translateY(0)"
							: "translateZ(-700px) translateY(200px)",
						opacity: isInView ? 1 : 0,
						transition:
							"all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.4s",
					}}
				>
					<h1 className="skill-title">Skills and Technologies</h1>
					<ul className="skill-list">
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
								alt="html icon"
							/>
							<span>HTML5</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
								alt="css icon"
							/>

							<span>CSS3</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
								alt="javscript icon"
							/>
							<span>JavaScript</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
								alt="C# icon"
							/>
							<span>C#</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
								alt="react icon"
							/>
							<span>React.js</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
								alt="node.js icon"
							/>
							<span>Node.js</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
								alt="Asp.net icon"
							/>
							<span>ASP.NET</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
								alt="vscode icon"
							/>
							<span>VS Code</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
								alt="MySQL icon"
							/>
							<span>MySQL</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
								alt="Bootstrap icon"
							/>
							<span>Bootstrap</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
								alt="Docker icon"
							/>
							<span>Docker</span>
						</li>
						<li className="skill-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
								alt="Git icon"
							/>

							<span>Github</span>
						</li>
					</ul>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default About;
