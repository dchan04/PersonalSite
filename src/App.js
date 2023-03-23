import './App.css';
import HeaderComponent from './Header';
import Home from './Home';
import AboutMe from './About';

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <Home/>
            <AboutMe/>
        </div>
    );
}

export default App;
