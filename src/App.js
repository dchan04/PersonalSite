import "./App.css";
import HeaderComponent from "./Header";
import Home from "./Home";
import AboutMe from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <HeaderComponent />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
