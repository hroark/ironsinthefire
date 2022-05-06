import "./index.css";
import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";


  export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_16ydpkm', 'template_qxxc3jo', form.current, '-IYo-pn6QjBeNYf7T')
     .then(function(response) {
        alert("Thank you!!!");
       e.target.reset();
     }, function(error) {
        console.log('FAILED...', error);
     });
    };
  

//  render() {
    return (
      
      <form ref={form} onSubmit={sendEmail}>
      <label for="name" className = "FormLabels center">Name</label>
      <input className = "center" name="name" type="text" required placeholder="John Doe"/>

      <label for="email" className = "FormLabels center">Email</label>
      <input className = "center" name="email" type="email" required placeholder="you@domain.com"/>

      <label for="message" className = "FormLabels center">Message</label>
      <textarea className = "center" name="message" cols="55" rows="10" placeholder="Enter your message here ..." required> </textarea>
      <div class="center">
        <br />
        <input type="submit" className="btn btn-primary mr-1" value="Submit"/>
      </div>
    </form>	
    );
  }
//}
export default ContactUs;
