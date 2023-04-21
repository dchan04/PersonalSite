import "./App.css";
import AnimatedBg from "./components/AnimatedBg";
import HeaderComponent from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <AnimatedBg />
      <HeaderComponent />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
