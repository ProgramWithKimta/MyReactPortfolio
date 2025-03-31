import "../App.css";
import Footer from "../components/Footer";
import NavBarPages from "../components/NavBarPages.jsx";

function Contact() {
    return <> <NavBarPages />
    <div className="contact">
        <header className="header-pages">Contact Me</header>
        <form className="form-table">
            <label htmlFor="name">Your Name</label>
            <input type="text" />
            <br></br>
            <label htmlFor="email">Email Address</label>
            <input type="email" />
            <br></br>
            <label htmlFor="description">Describe Your Inquiry</label>
            <input type="text" />
            <br></br>
            <button className="btn" type="submit">Let's Connect!</button>
        </form>
    </div>
    <Footer />
    </>
}

export default Contact;