import { useState } from "react";
import { send } from "emailjs-com";

export default function Contact() {
  // validating email address
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setToSend({ ...toSend, [inputType]: inputValue });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //  Setting error messages if no input value
    if (!validateEmail(toSend.reply_to)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!toSend.from_name || !toSend.message) {
      setErrorMessage("You are missing a required field");
      return;
    }

    send("service_90uogfh", "template_75imtx9", toSend, "PiPlz6GHBdSn9SnTQ")
      .then((response) => {
        console.log(response);
        setSuccessMessage(
          "I have received your email successfully, I will get back to you soon."
        );
      })
      .catch((err) => {
        console.log(err);
      });

    // Setting input fields back to an empty string
    setToSend({
      from_name: "",
      reply_to: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <h1 className="contact-title">Contact Me</h1>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <input
          className="contact-input"
          value={toSend.from_name}
          name="from_name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <input
          className="contact-input"
          value={toSend.reply_to}
          name="reply_to"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          className="contact-input"
          value={toSend.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="submit">Send</button>
      </form>
      {errorMessage && (
        <div className="error-container">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div className="success-container">
          <p className="success-message">{successMessage}</p>
        </div>
      )}
    </div>
  );
}
