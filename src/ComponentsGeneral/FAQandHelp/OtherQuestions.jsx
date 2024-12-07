import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './FAQandHelp.css';

// npm i @emailjs/browser

const OtherQuestions = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znvej0f",
        "template_j3eszds",
        form.current,
        "JlsFN8d0J5Fj_5ezw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="OtherQuestions-container">
      <form className="form-OtherQuestions" ref={form} onSubmit={sendEmail}>
        <label className="label-OtherQuestions">NIC</label>
        <input className="input-OtherQuestions" type="text" name="user_NIC" />
        <label className="label-OtherQuestions" >Email</label>
        <input className="input-OtherQuestions" type="email" name="user_email" />
        <label className="label-OtherQuestions" >Question</label>
        <textarea className="textarea-OtherQuestions" name="message" />
        <input className="input-OtherQuestions" type="submit" value="Post Questions" />
      </form>
    </div>
  );
};

export default OtherQuestions;