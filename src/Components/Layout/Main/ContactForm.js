import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Susisiekite su mumis</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();

          fetch("https://backend.tenisopartneris.lt/v1/sendmail/contactform", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname: e.target.firstname.value,
              lastname: e.target.lastname.value,
              email: e.target.email.value,
              message: e.target.message.value,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Jūsų žinutė buvo sėkmingai išsiųsta!");
              setTimeout(() => {
                window.location.reload();
              }, 500);
            });
        }}
      >
        <div className="input-group">
          <label htmlFor="firstname">Jūsų vardas:</label>
          <input
            type="text"
            name="firstname"
            className="firstname"
            tabIndex="1"
            placeholder="Vardas"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Jūsų pavardė:</label>
          <input
            type="text"
            name="lastname"
            className="lastname"
            tabIndex="2"
            placeholder="Pavardė"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Jūsų el.pašto adresas:</label>
          <input
            type="email"
            name="email"
            className="email"
            tabIndex="3"
            placeholder="El.paštas"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="message" className="textmessage">
            Jūsų žinutė:
          </label>
          <textarea
            name="message"
            className="message"
            tabIndex="4"
            placeholder="Jūsų žinutė"
            required
          />
        </div>
        <div className="sendbtn">
          <button type="submit" className="submitbtn">
            Siųsti
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
