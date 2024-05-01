import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

function Contact() {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      return true;
    }
  };

  useEffect(() => {
    const valid = validate();
    setIsValid(valid);
    // eslint-disable-next-line
  }, [name, email, message]);

  const notify = () =>
    toast.success('Message sent!', {
      icon: '🔥',
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2ert3gb', 'template_o36rdwn', form.current, {
        publicKey: '9MruXoCBWj0b0nSg7',
      })
      .then(
        () => {
          // e.target.reset();
          setName('');
          setEmail('');
          setMessage('');
          notify();
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contactForm mx-auto">
      <h1 className="contactHead mb-4">Say Hello</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group mb-4">
          <label for="exampleInputEmail1" className="mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="user_name"
            // placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-4">
          <label for="exampleInputPassword1" className="mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            name="user_email"
            // placeholder="Password"
          />
        </div>
        <div className="form-group mb-4">
          <label for="exampleFormControlTextarea1" className="mb-1">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="btn">
          <button type="submit" disabled={!isValid} className="btn btn-primary">
            Send
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Contact;
