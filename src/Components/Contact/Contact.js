import React ,{useState}from "react";
import classes from "./Contact.module.css";
import mobile from "../Material/mobile.png";
import uemail from "../Material/email.png";
import address from "../Material/Address.png";
import contact from "../Material/contact.png";
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const { username, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    // eslint-disable-next-line
    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };
  };
  return (
    <React.Fragment>
      <div className={classes.Maincontainer}>
        <div className={classes.topTitle}>Contact With Us</div>
          <div className={classes.app__footer_cards}>
            <div className={classes.app__footer_card}>
              <img src={uemail} alt="email" />
              <a href="mailto:asadyasin68@gmail.com">nomanarshad1352@gmail.com</a>
            </div>
            <div className={classes.app__footer_card}>
              <img src={mobile} alt="phone" />
              <a href="tel:+92 (306) 415-3657">+92 (320) 481-2119</a>
            </div>
            <div className={classes.app__footer_card}>
              <img src={address} alt="phone" />
              <a href="https://maps.google.com/?q=Govt Graduate College of Science"target="_blank" rel="noopener noreferrer">Govt Graduate College of Science</a>
            </div>
          </div>
        <div className={classes.container}>
          <div className={classes.formContainer}>
            <form>
              <label className={classes.label} htmlFor="fname">
                Your Name
              </label>
              <input
                type="text"
                id="fname"
                value={username}
                name="firstname"
                placeholder="Your name.."
                onChange={handleChangeInput}
              />

              <label className={classes.label} htmlFor="email">
                Your Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                name="email"
                placeholder="Your Email.."
                onChange={handleChangeInput}
              />

              <label className={classes.label} htmlFor="message">
                Your Message
              </label>
              <textarea
                id={classes.message}
                name="message"
                value={message}
                placeholder="Your Message.."
                style={{height: 100 + "px"}}
                onChange={handleChangeInput}
              ></textarea>
              <div className={classes.btn1}>
                <button className={classes.btn} onClick={handleSubmit}>Send Message</button>
              </div>
            </form>
          </div>
          <div className={classes.imgcontainer}>
            <img src={contact} alt="Contact" />
          </div>
        </div>
        <div className={classes.bottomTitle}>We care about your suggestion</div>
      </div>
    </React.Fragment>
  );
}
