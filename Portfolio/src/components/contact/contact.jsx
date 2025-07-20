import React, { useRef, useState } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import p from "../../img/phone.png";
import g from "../../img/gmail.png";
import l from "../../img/linkedin.png";

const Contact = () => {
    const formRef = useRef()
    const [done, setdone] = useState(false)

    const handleSubmit =(e) =>{
        e.preventDefault();
        emailjs.sendForm('service_y06osce', 'template_porp6nu', formRef.current, 'fwg-iJ4all_4fpjnD')
            .then((result) => {
                console.log(result.text);
                setdone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
  return (
    <div className="c"><div className='c-wrapper'>

              <div className="c-bg">
              </div>
              <div className="c-left">
                  <h1 className="c-title">Contact Me</h1>
                  <div className="c-info">
                      <div className="c-info-items"><a href="tel:+917007695443">
                          <img src={p} alt="" className="c-icons" />&nbsp;&nbsp;&nbsp;+91 7007695443</a>
                      </div>
                      <div className="c-info-items"><a classNmae='b1' href="mailto:abhishekpratapsingh1234@gmail.com">
                          <img src={g} alt="" className="c-icons" />&nbsp;&nbsp;&nbsp;abhishekpratapsingh1234@gmail.com</a>
                      </div>
                      <div className="c-info-items"><a className='b1' href='https://www.linkedin.com/in/abhishek-pratap-singh-88523a207/'>
                        <img src={l} alt="" className="c-icons" />&nbsp;&nbsp; Abhishek Pratap Singh</a>
                      </div>
                  </div>
              </div>
              <div className="c-right">
                  <form ref={formRef} onSubmit={handleSubmit}>
                      <input type="text" placeholder='Name' name='user_name' />
                      <input type="text" placeholder='Subject' name='user_subject' />
                      <input type="text" placeholder='Email' name='user_email' />
                      <textarea rows="5" placeholder="Message" name="message" />
                      <button>Submit</button>{done && "Thank You"}
                  </form>
              </div>

          </div></div>
  )
}

export default Contact