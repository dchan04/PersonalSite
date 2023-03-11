import "./Home.css";
import githubIcon from "./assets/github-mark.png"
import linkedInIcon from "./assets/linkedin.png"
import Image from 'react-bootstrap/Image'

function HomePage() {
    return (
        <div className="HomeContainer">
            <div className="intro">Hello, My Name is Darren Chan</div>
            <div className="description">I'm a software developer with fundamental knowledge of Web Development using React and ASP.Net.</div>
            <button size="lg" variant="link" className="rounded-Button">
                <Image className="linkIcons" src={githubIcon} ></Image>
            </button>
            <button size="lg" variant="link" className="rounded-Button2">
                <Image className="linkIcons" src={linkedInIcon} ></Image>
            </button>
            <div className="homePic">
                <div className="redButton" />
                <div className="yellowButton" />
                <div className="greenButton" />
                <div className="url">DarrenChan.ca</div>
                <div className="skillsCategory">
                    <div className="purpleText">Skills</div> 
                    <div className="firstBracket">{`{`}</div>
                    <div className="category">Languages =<span className="categoryText">HTML + CSS + JavaScript + C# + +jQuery + SQL;</span> </div> 
                    <div className="category">Frameworks =<span className="categoryText">React.JS + .Net Framework + Bootstrap 5 + Node.js;</span> </div> 
                    <div className="category">Databases =<span className="categoryText">MySql + SQLite + MongoDB;</span> </div> 
                    <p className="endBracket">{`}`}</p>
                </div>
                <div className="educationCategory">
                    <div className="purpleText">Education</div>
                    <div className="firstBracket">{`{`}</div>
                    <div className="category">Degree =<span className="categoryText">Bachelor of Computing;</span></div>
                    <div className="category">Major =<span className="categoryText">Computer Science;</span></div>
                    <div className="category">Minor =<span className="categoryText">Business Economics;</span></div>
                    <div className="endBracket">{`}`}</div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;