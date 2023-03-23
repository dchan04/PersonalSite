import "./About.css"

function About() {
    return (
        <div className="AboutContainer">
            <div className="Title">
                About Me
            </div>
            <div className="Description">
            filler
            </div>
            <div className="skillContainer">
                <div className="redButton" />
                <div className="yellowButton" />
                <div className="greenButton" />
                <div className="url">DarrenChan.ca</div>
                <div className="skillsCategory">
                    <div className="purpleText">Skills</div>
                    <div className="firstBracket">{`{`}</div>
                    <div className="category">Languages =<span className="categoryText">HTML + CSS + JavaScript + C# + SQL;</span> </div>
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

export default About;