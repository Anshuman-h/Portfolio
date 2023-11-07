import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
// for emailjs
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  // for emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ubyy6uk', 'template_go76o6a', form.current, '8ciTYjXPWBXnKZRXs')
    // phr se placeholder aa jayega reset se
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
           <div className="contact__options">
                <article className="contact__option">
                 <MdOutlineEmail className='contact__option-icon'/>
                 <h4>Email</h4>
                 <h5>anshumangvns@gmail.com</h5>
                 {/* to directly send a mail */}
                 <a href="mailto:anshumangvns@gmail.com" target="_blank">Send a message</a>
                </article>
                {/* <article className="contact__option">
                 <FiTwitter className='contact__option-icon'/>
                 <h4>Twitter</h4>
                 <h5>@Prashan12169094</h5> */}
                 {/* to directly send a message on insta*/}
                 {/* <a href="https://twitter.com/messages/compose?recipient_id=1676243587108052993" target="_blank">Send a message</a>
                 </article> */}
                 <article className="contact__option">
                  <BsWhatsapp className='contact__option-icon'/>
                  <h4>Whatsapp</h4>
                  <h5>+91 6386692392</h5>
                   {/* to directly send a message on wp*/}
                  <a href="http://wa.me/+916386692392" target="_blank">Send a message</a>
                  </article>
           </div> 
           {/* END OF CONTACT OPTIONS*/}
           {/* onsubmit pe sendemail func h jo emailjs react se aaya h */}
           <form ref={form} onSubmit={sendEmail}>
             {/* required is used to make it compulsory */}
             <input type="text" name='name' placeholder='Your Full Name' required />
             <input type="email" name='email' placeholder='Your Email' required />
             <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
             <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
           {/* submit kre koi form to sidhe mere mail pe aaye isk liye
           phle emailjs pe account bnaye phr template bnaye jis format me chahiye 
           usk bad terminal pe npm install emailjs-com --save */}
      </div>
    </section>
  )
}

export default Contact
