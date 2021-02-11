const form: any = document.getElementById('main-form')!;

window.addEventListener('load', () => removeLoader());

//@ts-ignore
function removeLoader() {
  document.querySelector('.ctn-loader')!.classList.add('ocult');
  setTimeout(() => {
    document.querySelector('.ctn-nav')!.classList.add('active');
    document.querySelector('.form-ctn')!.classList.add('active');
    const abs = document.querySelectorAll('.abstract-image');
    for (let i = 0, n = abs.length; i < n; i++) abs[i].classList.add('active');
  }, 1900);
  const cards = document.querySelectorAll('.load-card');
  for (let i = 0, n = cards.length; i < n; i++) cards[i].classList.add('active');
}

form.addEventListener('submit', validateAndSendForm);
function isEmpty(string: string) {
  return string === '';
}
function isValidString(string: string) {
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

function isEmail(email: string) {
  let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
}

interface ReplyValidation {
  isValid: boolean;
  message?: string;
}

class Message {
  name: string;
  email: string;
  phoneNumber: string | null;
  message: string;
  constructor(name: string, email: string, phoneNumber: string | null, message: string) {
    this.name = name.trim();
    this.email = email.trim();
    this.phoneNumber = typeof phoneNumber === 'string' ? phoneNumber.trim() : null;
    this.message = message.trim();
  }
  async validation(): Promise<ReplyValidation> {
    return new Promise((resolved: any, reject: any) => {
      if (
        isEmpty(this.email) ||
        isEmpty(this.name) ||
        isEmpty(this.message) ||
        !isValidString(this.email) ||
        !isValidString(this.name) ||
        !isValidString(this.message)
      ) {
        let reply: ReplyValidation = {
          isValid: false,
          message:
            'Please fill in the required fields correctly and do not use illegal symbols.',
        };
        resolved(reply);
        return;
      }
      if (!isEmail(this.email)) {
        let reply: ReplyValidation = {
          isValid: false,
          message: 'the email entered is invalid.',
        };
        resolved(reply);
        return;
      }
      let reply: ReplyValidation = {
        isValid: true,
      };
      resolved(reply);
    });
  }
}

async function validateAndSendForm(e: MouseEvent) {
  e.preventDefault();
  let message = new Message(
    form.name.value,
    form.email.value,
    form.phone.value,
    form.message.value
  );
  let response: ReplyValidation = await message.validation();
  if (!response.isValid) {
    console.log(response.message);
    return;
  }
  console.log('todo correcto !');
  const formData = new FormData();
}
