import React from 'react'
import './Contact.css'
import {AiFillMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l6hkgdh', 'template_xmysr1o', form.current, 'JYrqj7jD9HhDf5Xwo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact__option'>
              <AiFillMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>rajshriyanshu@gmail.com</h5>
              <a href='mailto:rajshriyanshu@gmail.com' target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <BsMessenger className='contact__option-icon'/>
              <h4>Shriyanshu Raj</h4>
              <h5></h5>
              <a href='https://m.me/shriyanshu.raj.3' target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              {/* <h5>+91 6206133718</h5> */}
              <a href='https://api.whatsapp.com/send?phone=+916206133718' target='_blank'>Send a message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact