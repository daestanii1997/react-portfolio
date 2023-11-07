import { useState } from 'react';


export default function Contact() {

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {

  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue)
  } else {
    setMessage(inputValue)
  }
};

const handleFormSubmit = (e) => {
 e.preventDefault();

  if (!validateEmail(email)) {
    setErrorMessage('Email is invalid');
    return;
  }
  if (!name || !message) {
    setErrorMessage('You are missing a required field');
    return;
  }

  setName('');
  setEmail('');
  setMessage('');

}

  return (
    <div className='form-container'>
      <h1>Contact Page</h1>
      <form id='contact-form' onSubmit={handleFormSubmit}>
        <input
          className='contact-input'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          className='contact-input'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          className='contact-input'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="submit">Send</button>
      </form>
      {errorMessage && (
        <div className='error-container'>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
