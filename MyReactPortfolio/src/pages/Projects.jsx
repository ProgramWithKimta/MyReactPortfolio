import "../App.css";
import Footer from "../components/Footer";
import NavBarPages from "../components/NavBarPages.jsx";

function Projects() {
    return <> <NavBarPages />
    <div className="projects"> 
        <header className="header-pages">My Projects</header>
        <p className="project-intro">Majority of my projects are not deployed, but click on the image and it will take you to my respective GitHub repo!</p>

        <p className="project-panda">
            <a href="https://github.com/ProgramWithKimta/PROJECT-REPO"><img src="https://img.freepik.com/premium-vector/cute-panda-silhouette_655829-81.jpg?w=740" alt="project-1" className="project-photos" /></a>
            My first group project where created a simple application that housed recipes and can be accessed from the web.</p>

        <p className="project-panda">
            <a href="https://github.com/ProgramWithKimta/Mod7Challenge2"><img src="https://img.freepik.com/premium-vector/panda-silhouette-vector-illustration-art_1186924-649.jpg?w=996" alt="project-1" className="project-photos" /></a>
             This project challenge was to create a professional README file using the command line application.</p>

        <p className="project-panda">
            <a href="https://github.com/ProgramWithKimta/ModChallenge8"><img src="https://img.freepik.com/premium-vector/panda-head-logo_681147-481.jpg?w=740" alt="project-3" className="project-photos" /></a>
            This project challenge is to build a car that can perform various actions using the Typescript command line application.</p>

        <p className="project-panda">
            <a href="https://github.com/ProgramWithKimta/WeatherForecastDash"><img src="https://img.freepik.com/premium-vector/panda-graphic-illustration-flat-minimalist-logo_1113360-491.jpg?w=740" alt="project-4" className="project-photos" /></a>
            This was a hard one. This challenge project required me to build a weather dashboard using the 5-day weather forecast API and deploy the page on Render.</p>

        <p className="project-panda">
            <a href="https://github.com/ProgramWithKimta/EmployeeTracker"><img src="https://img.freepik.com/free-vector/vector-black-white-character-panda-logo_474888-2950.jpg?t=st=1743377279~exp=1743380879~hmac=07e39523d0aa0b351d1f4211d3a5278e171b65f236e111f6ae6477953a4befe1&w=740" alt="project-5" className="project-photos" /></a>
            This project challenge is to create an employee tracker that can perform various actions using Typescript command line application. The application prompts users to view and update tables.</p>

        <p className="project-panda">
            <a href="https://github.com/ProgramWithKimta/MyReactPortfolio"><img src="https://img.freepik.com/premium-vector/cute-panda-eating-banboo-icon_1076610-45418.jpg?w=740" alt="project-6" className="project-photos" /></a>
            This project challenge is to create a React portfolio that is a single page application which allows users to click through various pages.</p>

    </div>
    <Footer />
    </>
}

export default Projects;    