import React from 'react';
import { objectError } from '../../utils/variables';

import Styles from '../../styles/layout/home/ContactForm';

const ContactForm = () => {
  return (
    <>
      <Styles.Title className="title">Contac Me</Styles.Title>
      <Styles.Form>
        <object data="/static/icons/profile.svg" type="">
          {objectError}
        </object>

        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Enter your name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="mail">Mail:</label>
            <input type="text" placeholder="Enter your email" id="mail" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <input type="submit" value="Send Message" />
        </form>
      </Styles.Form>
    </>
  );
};

export default ContactForm;
