import "../App.css";
import Footer from "../components/Footer";
import NavBarPages from "../components/NavBarPages.jsx";
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

    const [errors, setErrors] = useState({
        name:'',
        email:'',
        message:''      
    });

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleBlur = () => {
        if (!formData) {
            setErrors('Field cannot be left blank');
        } else {
            setErrors('');
        }
    };

    return <> <NavBarPages />
    <div className="contact">
        <header className="header-pages contact-title">Contact Me</header>
        <form className="form-table">

            <label htmlFor="name">Your Name</label>
            <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur} />

            <br></br>

            <label htmlFor="email">Email Address</label>
            <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur} />

            <br></br>

            <label htmlFor="description">Message</label>
            <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur} />

            <br></br>

            <button className="btn" type="submit">Let's Connect!</button>
        </form>
    </div>
    <Footer />
    </>
}

export default Contact;

