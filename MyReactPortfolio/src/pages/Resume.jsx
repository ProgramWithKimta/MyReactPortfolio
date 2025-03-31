import "../App.css";
import Footer from "../components/Footer";
import NavBarPages from "../components/NavBarPages.jsx";

function Resume() {
    return <> <NavBarPages />
    <div className="resume">
        <header className="header-pages">Resume</header>
        <p className="resume-name">Panda Nguyen</p>
        <p className="professional-sum">New to Software Developing, but joining the industry with a passion for learning and developing full-stack applications. Eager to contribute to innovative projects while expanding my skills in building full-stack solutions.</p>
        <p className="tech-skills-title">Technical Skills</p>
        <p className="skills-list">
            Javascript, HTML, CSS, Postgres, SQL, Express, GitHub, Visual Studio Code</p>
        <p className="education-title">Education</p>
        <p className="education">
            IN PROGRESS: Full Stack Web Development Certificate — UofM EdEx</p>
        <p className="additional">Additional Info</p>
        <a href="https://github.com/ProgramWithKimta" className="github-link">Click Here to view my github</a>
    </div>
    <Footer />
    </>
}

export default Resume;