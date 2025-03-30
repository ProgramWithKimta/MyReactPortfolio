import "../App.css";
import Footer from "../components/Footer";
import NavBarPages from "../components/NavBarPages.jsx";

function AboutMe() {
    return <div className="about-me">
        <header className="header-pages">About Panda</header>
        <NavBarPages />
        <p className="content-wrap"><img src="https://img.freepik.com/premium-photo/giant-panda-ailuropoda-melanoleuca-white-isolated_191971-12208.jpg?w=740" alt="Photo of Panda" className="about-me-img" />
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <Footer />
    </div>
}
    
export default AboutMe;