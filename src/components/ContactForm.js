import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const navigate = useNavigate();

  const [state, handleSubmit] = useForm("xwkjlvny");
  if (state.succeeded) {
    navigate("/thanks");
  }
  return (
    <div className="contact_wrapper" data-aos="zoom-out-up">
      <h2>GET IN TOUCH</h2>
      <h3>DO YOU WANT TO WORK TOGETHER? FEEL FREE TO TEXT ME.</h3>

      <form className="contact_form_wrapper" onSubmit={handleSubmit}>
        <div className="contact_input_wrapper">
          <input
            className="contact_input"
            type="text"
            name="name"
            placeholder="Your full name*"
            required
          />
          <input
            className="contact_input"
            id="email"
            type="email"
            name="email"
            placeholder="Your Email*"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="contact_input_wrapper">
          <input
            className="contact_input"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject*"
            required
          />
          <input
            className="contact_input"
            id="phone"
            type="phone number"
            name="phone"
            placeholder="Phone number*"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            className="contact_textArea"
            placeholder="Your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className="contact_button"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
