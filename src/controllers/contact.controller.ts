import {Request, Response} from 'express';
import {PoolConnection} from 'mysql2/promise';
import {connect} from '../database';

export const mainView = (req: Request, res: Response) => {
  try {
    res.status(200).render('contact', {
      title: 'JG - Contact',
      styles: [{style: `<link rel="stylesheet" href="/styles/contact.min.css">`}],
      scripts: [
        {
          script: `<script src="/librarys/package/dist/sweetalert2.all.min.js" defer></script>`,
        },
        {script: `<script src="/js/contact/contact.js" defer></script>`},
      ],
    });
  } catch (e) {}
};

export const addNewMessage = async (req: Request, res: Response) => {
  try {
    const {name, email, phone, message} = req.body;
    if (
      isEmpty(name) ||
      isEmpty(email) ||
      isEmpty(message) ||
      !isValidString(name) ||
      !isValidString(email) ||
      !isValidString(phone) ||
      !isValidString(message)
    ) {
      res.json({
        title: '¡Error!',
        error: true,
        message: `Please fill in the required fields correctly and do not use illegal symbols.`,
      });
      return;
    }
    if (!isEmail(email)) {
      res.json({
        title: '¡Error!',
        error: true,
        message: `The email entered is invalid.`,
      });
      return;
    }
    const conn: PoolConnection = await connect();
    await conn.query('INSERT INTO messages SET ?', {
      userName: name,
      email,
      phoneNumber: phone,
      message,
    });
    res.json({
      title: '¡Message sent!',
      error: false,
      message: `your message has been sent successfully
      `,
    });
  } catch (e) {
    console.log(e);
  }
};

//FUNCTIONS
function isEmpty(string: string): Boolean {
  return string.trim() === '';
}
function isValidString(string: string): Boolean {
  if (
    string.includes('|') ||
    string.includes('}') ||
    string.includes('{') ||
    string.includes('$') ||
    string.includes('%') ||
    string.includes('`') ||
    string.includes('<') ||
    string.includes('>')
  ) {
    return false;
  }
  return true;
}
function isEmail(email: string): Boolean {
  let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
}
