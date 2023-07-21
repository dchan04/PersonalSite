import "./Contact.css";
import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [status, setStatus] = useState("Submit");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		let response = await fetch(
			"https://dchan04mailbackend.onrender.com/contact",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				},
				body: JSON.stringify(details),
			}
		);
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	};
	return (
		<div className="ContactContainer" id="Contact">
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
				<motion.p>Contact</motion.p>
			</motion.div>
			<motion.div
				style={{
					transform: isInView
						? "translateZ(0) translateY(0)"
						: "translateZ(-700px) translateY(200px)",
					opacity: isInView ? 1 : 0,
					transition:
						"all 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s",
				}}
			>
				<Form className="contact-form" onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							as="input"
							type="text"
							placeholder="Enter Your Name"
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							as="input"
							type="email"
							placeholder="Enter Your Email"
						/>
					</Form.Group>
					<Form.Group className="mb-4" controlId="message">
						<Form.Label>Message</Form.Label>
						<Form.Control
							as="textarea"
							rows={8}
							placeholder="Enter Your Message"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						{status}
					</Button>
				</Form>
			</motion.div>
		</div>
	);
}
export default Contact;
