import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import ReactPlayer from 'react-player'


const Contact = () => {

  const demo ="https://www.youtube.com/watch?v=XsJiVGubcjk"
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Votre message a bien été envoyé.")
    emailjs.sendForm('service_jktf1yk', 'template_qzrsewr', form.current, '1Sq8JHlMS-famfuMK')
      .then((result) => {console.log(result.text);
      } ,
      (error) => {console.log(error.text);
      });
  }


  return (
    <div name="contact" className="contact">
      
        <h2>Contact</h2>
        <p>Remplissez le formulaire ci-dessous pour me contacter directement</p>

        <div className="contact-container">
          <div className="input-container">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Votre nom"/>
              <input type="text" name="email" placeholder="Votre email"/>
              <textarea
                name="message"
                placeholder="Ecrivez votre message"
                rows="8"
              ></textarea>
              <div className="btn-container">
                <button className="sendButton" onSubmit={sendEmail}>Ecrivez-moi</button>
              </div>
            </form>
          </div>
          <div className='video-wrapper'>
          <ReactPlayer            
            playing url={demo} 
            controls={true}
            style={{borderradius:'5px'}}
            width="100%"
          />
          </div>
      </div>
    </div>
  );
};

export default Contact;
