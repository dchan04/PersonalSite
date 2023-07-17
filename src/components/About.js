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
					specializing in Computer Science and minoring in Business
					Economics.
				</p>

				<p>
					Throughout my academic journey, my passion for web
					development took center stage, driving me to delve deeper
					into this field. I have acquired strong proficiency in{" "}
					<span id="reactLogoColor">React.js</span> for front-end
					development, enabling me to create interactive and visually
					appealing user interfaces. Additionally, I have honed my
					skills in <span id="aspLogoColor">ASP.NET</span> for
					back-end development, empowering me to build robust and
					scalable server-side functionalities.
				</p>

				<p>
					I am currently seeking new job opportunities where I can
					apply my expertise, contribute to exciting projects, and
					further expand my skill set. I possess a strong eagerness to
					learn and grow in a dynamic professional environment. If you
					believe that you have an opportunity that aligns with my
					skill set and ambitions, I would be delighted to connect
					with you. Please feel free to reach out to me!
				</p>
				<div>
					<Button
						href="mailto:darrenchan1123@gmail.com"
						target="_blank"
					>
						Contact
					</Button>
				</div>
			</motion.div>
			<motion.div
				className="skillContainer"
				style={{
					transform: isInView
						? "translateZ(0) translateY(0)"
						: "translateZ(-700px) translateY(200px)",
					opacity: isInView ? 1 : 0,
					transition:
						"all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.4s",
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
						<span className="categoryText">
							MySql + SQLite + MongoDB;
						</span>{" "}
					</div>
					<div className="category">
						Others =<span className="categoryText">Git;</span>{" "}
					</div>
					<p className="endBracket">{`}`}</p>
				</div>
			</motion.div>
		</div>
	);
}

export default About;
