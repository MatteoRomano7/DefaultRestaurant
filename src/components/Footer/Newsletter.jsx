import React, { useState } from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Grazie per esserti iscritto alla nostra newsletter!');
        setEmail('');
      } else {
        setMessage('Si è verificato un errore. Per favore, riprova più tardi.');
      }
    } catch (error) {
      setMessage('Si è verificato un errore. Per favore, riprova più tardi.');
    }
  };

  return (
    <div className="appNewsletter">
      <div className="appNewsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="appNewsletter-input flexCenter">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className="customButton" onClick={handleSubmit}>
          Subscribe
        </button>
      </div>
      {message && <p className="p__opensans" style={{marginTop: '1rem', textAlign: 'center'}}>{message}</p>}
    </div>
  );
};

export default Newsletter;