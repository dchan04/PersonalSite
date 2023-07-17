import "./Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

const Footer = () => (
	<footer className="page-footer">
		<Container fluid={true} className="footer-container">
			<Row className="pt-3">
				<Col>
					<h5 className="text-uppercase">Darren Chan</h5>
					<p>
						I am a Web Developer with expertise in both Front-end
						and Back-end development. I am passionate about staying
						up-to-date with the latest industry trends and
						technologies to ensure that the websites I create are
						not only visually appealing but also optimized for
						performance and usability.
					</p>
				</Col>
				<Col>
					<h5 className="text-uppercase">Links</h5>
					<ul className="list-unstyled">
						<li>
							<a href="#!">
								<Icon.EnvelopeAt color="#fffcf2" />
							</a>
						</li>
						<li>
							<a href="#!">
								<Icon.Github color="#fffcf2" />
							</a>
						</li>
						<li>
							<a href="#!">
								<Icon.Linkedin color="#fffcf2" />
							</a>
						</li>
						<li>
							<a href="#resume">
								<Icon.FileEarmarkText color="#fffcf2" />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
			<div className="footer-copyright text-center py-3">
				© 2023 Copyright: Made by Darren Chan
			</div>
		</Container>
	</footer>
);
export default Footer;
