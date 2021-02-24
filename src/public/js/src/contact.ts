const form: any = document.getElementById('main-form')!;

window.addEventListener('load', () => removeLoader());

form.addEventListener('submit', validateForm);

class Message {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  constructor(name: string, email: string, phoneNumber: string, message: string) {
    this.name = name.trim();
    this.email = email.trim();
    this.phoneNumber = phoneNumber.trim();
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
        !isValidString(this.message) ||
        !isValidString(this.phoneNumber)
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
          message: 'The email entered is invalid.',
        };
        resolved(reply);
        return;
      }
      let reply: ReplyValidation = {
        isValid: true,
        message: '',
      };
      resolved(reply);
    });
  }
}

//--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*
//FUNCTIONS
//--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*

async function validateForm(e: MouseEvent) {
  e.preventDefault();
  const newMessage = new Message(
    form.name.value,
    form.email.value,
    form.phone.value,
    form.message.value
  );
  let response: ReplyValidation = await newMessage.validation();
  if (!response.isValid) {
    //@ts-ignore
    Swal.fire('¡Error!', response.message, 'error');
    return;
  }
  //@ts-ignore
  const loadingPopup: any = Swal.fire({
    title: `Loading`,
    didOpen: () => {
      //@ts-ignore
      Swal.showLoading();
    },
  });
  const formData: FormData = new FormData();
  formData.append('name', newMessage.name);
  formData.append('email', newMessage.email);
  formData.append('phone', newMessage.phoneNumber);
  formData.append('message', newMessage.message);
  sendForm(loadingPopup, formData);
}

async function sendForm(loadingPopup: any, formData: FormData) {
  fetch('/contact', {
    method: 'POST',
    //@ts-ignore
    body: new URLSearchParams(formData),
  })
    .then((response: Response) => {
      return response.json();
    })
    .then((data: BackendResponse) => {
      loadingPopup.close();

      if (!data.error) {
        cleanForm();
        //@ts-ignore
        Swal.fire({
          title: data.title,
          content: data.message,
          icon: 'success',
          didClose: () => {
            window.location.href = '/';
          },
        });
        return;
      }
      //@ts-ignore
      Swal.fire(data.title, data.message, 'error');
    })
    .catch((err: ErrorConstructor) => {
      loadingPopup.close();
      //@ts-ignore
      Swal.fire('¡Error!', 'Something has gone wrong, please try again', 'error');
    });
}

//@ts-ignore
function removeLoader() {
  document.querySelector('.ctn-loader')!.classList.add('ocult');
  setTimeout(activeAllElements, 1900);
  const cards = document.querySelectorAll('.load-card');
  for (let i = 0, n = cards.length; i < n; i++) cards[i].classList.add('active');
}

function activeAllElements() {
  document.querySelector('.ctn-nav')!.classList.add('active');
  document.querySelector('.form-ctn')!.classList.add('active');
  const abs = document.querySelectorAll('.abstract-image');
  for (let i = 0, n = abs.length; i < n; i++) abs[i].classList.add('active');
  setTimeout(() => {
    document.querySelector('body')!.style.overflowY = 'auto';
  }, 900);
}

function cleanForm() {
  form.name.value = '';
  form.email.value = '';
  form.phone.value = '';
  form.message.value = '';
}

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

//--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*
//INTERFACES
//--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*--*

interface ReplyValidation {
  isValid: boolean;
  message?: string;
}

interface BackendResponse {
  error: boolean;
  message: string;
  title: string;
}
