import "../App.css";
import Footer from "../components/Footer";
import NavBarPages from "../components/NavBarPages.jsx";

function AboutMe() {
    return <> <NavBarPages />
    <div className="about-me">
        <header className="header-pages">About Panda</header>
        <p className="content-wrap"><img src="https://img.freepik.com/free-vector/hand-drawn-cartoon-panda-illustration_52683-115676.jpg?t=st=1743384985~exp=1743388585~hmac=d37c022df50761da0ff281ee5a239dd0226f68a431efb01b5b8c5fded3c85c01&w=740" alt="Photo of Panda" className="about-me-img" />
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
    </div>
    <Footer />
    </>
}
    
export default AboutMe;