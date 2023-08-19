import React from "react";
import "./contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xld9b0i', 'template_djhpqbd', form.current, 'gNea2ED1i5o5T7lg4')
      .then((result) => {
          console.log(result.text);
          console.log("berhasil dikirim")
          alert("email telah terkirim!")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
    };
    return(
        <section className="contact container section" id="contact">
            <h2 className="section_title">Hit Me Here!</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk about everything!</h3>
                    <p className="contact-details">Don't like forms! Send me an email!</p>
                </div>
                    <form ref={form} action="" className="contact_form" onSubmit={sendEmail}>
                        <div className="contact_form-group">
                            <div className="contact_form-div">
                                <input type="text" className="contact_form-input" name="from_name" placeholder="Insert your name"/>
                            </div>

                            <div className="contact_form-div">
                                <input type="email" className="contact_form-input" name="email" placeholder="Insert your email"/>
                            </div>
                        </div>

                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input" name="subject" placeholder="Insert your subject"/>
                        </div>

                        <div className="contact_form-div contact_form-area">
                            <textarea name="message" id="" cols="30" rows="10" className="contact_form-input" placeholder="write your message here..."></textarea>
                        </div>

                        <button className="btn">Send Meesage</button>
                    </form>
            </div>
        </section>
    )
}