import React from "react";
import "../styles/Contact.css";
import ContactImage from '../assets/contact.jpeg';
function Contact(){
    return(
        <div className="contact">
            <div className="leftSide" style={{
                backgroundImage: `url(${ContactImage})`
            }}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST" >
                    <label htmlFor='name'>Full Name</label>
                    <input name="name" type="text" placeholder="Enter your name"/>
                    <label htmlFor='email'>Email</label>
                    <input name="email" type="email" placeholder="Enter your email"/>
                    <label htmlFor='message'>Message</label>
                    <textarea name="message" rows="7" placeholder="Enter your message"></textarea>
                    <button type="submit">Send</button>
                    

                </form>
            </div>
        </div>
    )
}

export default Contact;