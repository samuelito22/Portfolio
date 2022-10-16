import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export default function Contact(props) {
    
    const form = useRef();

    useEffect(() => {
        document.addEventListener("mousedown",(event) => {        
            try {
              if(!form.current.contains(event.target)){  
                props.setOpenContactForm(false)  
                form.reset()          
              }
            } catch (e) {
              //pass;
            }
        })
    })

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o8t117p', 'template_rwk8ufl', form.current, 'arfiu07edXP7ZSs4G')
        .then((result) => {
            console.log(result.text);
            props.setOpenContactForm(false)
            e.target.reset()
        }, (error) => {
            console.log(error.text);

        });
    };
  
    return (
        <div id="overlay">
      <form ref={form} onSubmit={sendEmail} className='contact'>
        <label className='inputName'>Name</label>
        <input type="text" name="user_name" className='inputField' placeholder='e.g. Matthew, John,...' required />
        <label className='inputName'>Email</label>
        <input type="email" name="user_email" className='inputField' placeholder='e.g. youremail@hotmail.com' required/>
        <label className='inputName'>Message</label>
        <textarea name="message" className='inputField' placeholder='Message...' style={{"height":"100px","overflow":"auto","resize":"none"}} required/>
        <input type="submit" value="Send" className='btn'/>
      </form>
      </div>
    );
}
