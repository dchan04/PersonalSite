import "./Home.css";

function HomePage() {
    return (
        <div className="HomeContainer">
            <div className="intro">Hello, My Name is Darren Chan</div>
            <div className="description">I am a Junior Developer</div>
            <div className="overviewButton">Go To Overview</div>
            <div className="homePic">
                <div className="redButton" />
                <div className="yellowButton" />
                <div className="greenButton" />
                <div className="url">DarrenChan.ca</div>
                <div className="education">
                    <p className="purpleText">Education</p>
                    <p className="whiteText">{`{`}</p>
                    <p className="category">Profession:</p>
                    <p className="category">Languages:</p>
                    <p className="endBracket">{`}`}</p>
                </div>
                <div className="aboutMe">
                    <p className="purpleText">About Me</p>
                    <p className="whiteText">{`{`}</p>
                    <p className="category">Education:</p>
                    <p className="endBracket">{`}`}</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;