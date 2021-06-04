import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { sendMessage } from '@context/actions/database.actions';

import { initContactState } from '@utils/states';

import { objectError } from '@utils/variables';

import validate from '@functions/validations';

import { AppCtx } from '@interfaces';

import { FormDiv, Title } from './ContactForm.styles';

const ContactForm = () => {
  const [data, setData] = useState(initContactState);
  const { name, mail, message } = data;

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const { firebase, lng } = useSelector((state: AppCtx) => state.database);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validar
    if (validate.isEmpty(name, mail, message)) {
      Swal.fire('Error!', 'Please fill in all the fields', 'error');
      return;
    }

    if (!validate.isEmail(mail)) {
      Swal.fire('Error!', 'Please enter a valid email', 'error');
      return;
    }

    //pasar al context principal
    dispatch(sendMessage({ ...data, date: Date.now() }, firebase));
    setData(initContactState);
  };

  return (
    <>
      <Title className="title" id="contact-section">
        {lng['contactMe']}
      </Title>
      <FormDiv>
        <object data="/static/icons/profile.svg" type="image/svg+xml">
          {objectError}
        </object>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{lng['name']}:</label>
            <input
              type="text"
              placeholder={`${lng['enterYour']} ${lng['name']}`}
              id="name"
              onChange={handleChange}
              value={name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mail">{lng['mail']}:</label>
            <input
              type="text"
              placeholder={`${lng['enterYour']} ${lng['mail']}`}
              id="mail"
              onChange={handleChange}
              value={mail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{lng['message']}:</label>
            <textarea
              id="message"
              placeholder={`${lng['enterYour']} ${lng['message']}`}
              onChange={handleChange}
              value={message}
            ></textarea>
          </div>

          <input type="submit" value={`${lng['send']} ${lng['message']}`} />
        </form>
      </FormDiv>
    </>
  );
};

export default ContactForm;
