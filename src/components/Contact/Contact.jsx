import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; 

const Contact = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

    const serviceId = 'service_dt7qvd9';
    const templateId = 'template_7cj14i7';
    const apikey = 'p7TxsLapQc5uOGrQ1';

    emailjs
        .sendForm(serviceId, templateId, refForm.current, apikey)
        .then((result) => {
            console.log(result.text);                
        alert('Your mail has been sent!'); // Mostrar la alerta de confirmación
        })
        .catch((error) => console.log(error));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };
    
return (
    <div className="contact-container">
        <form className="contact-form" ref={refForm} action="" onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
            <div>
                <h2>Contact us</h2>
                <p>Fill this form</p>
            </div>
            <fieldset>
                <label htmlFor="username">Name</label>
                <input name="username" type="text" placeholder="Write your name" required />
            </fieldset>
            <fieldset>
                <label className="symbol-require" htmlFor="email">
                    Email
                </label>
                <input name="email" type="email" placeholder="Write your email" id="email" required />
            </fieldset>
            <fieldset>
                <label htmlFor="message">Message</label>
                <textarea maxLength="1000" placeholder="Type your message" name="message" id="message" required />
            </fieldset>
            <button type="submit">Send</button>
        </form>
    </div>
    );
};

export default Contact;
