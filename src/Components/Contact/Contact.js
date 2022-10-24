import React from 'react'
import classes from './Contact.module.css';
export default function Contact() {
  return (
    <React.Fragment>
      <div className={classes.topTitle}>Good to contact us</div>
    <div className={classes.container}>

      <div className={classes.formContainer}>

        <form>

          <label className={classes.label} htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label className={classes.label}  htmlFor="lname">Last Name</label>
          <input type="text" id='lname' name="lastname" placeholder="Your last name.." />

          <label className={classes.label}  htmlFor="country">Country</label>
          <select  id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label className={classes.label}  htmlFor="subject">Subject</label>
          <textarea id={classes.subject} name="subject" placeholder="Write something.." style={{}}></textarea>

          <input type="submit" value="Submit" />

        </form>
      </div>
      <div className={classes.msg}>
        <div className={classes.title}>Email Us</div>
        <div className={classes.content}></div>
        <div  className={classes.content}>Email@nomanArshad</div>
        <div className={classes.content}>email@asadyasin</div>
        <div className={classes.title}>Contact Num</div>
        <div className={classes.content}>03088566978</div>
        <div className={classes.content}>03088566978</div>
        <div className={classes.title}>Address</div>
        <div className={classes.content}>Govt College Of Science Wahdat Road Lahore</div>
      </div>

    </div>
    <div className={classes.bottomTitle}>We care about your Suggestion</div>
  </React.Fragment>

  )
}
