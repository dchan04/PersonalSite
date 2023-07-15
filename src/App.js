import "./App.css";
import AnimatedBg from "./components/AnimatedBg";
import HeaderComponent from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<AnimatedBg />
			<HeaderComponent />
			<Home />
			<AboutMe />
			<Projects />
			<Contact/>
		</div>
	);
}

export default App;
