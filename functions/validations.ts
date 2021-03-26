const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default {
  isEmpty: (...strings: string[]): boolean => {
    return strings.some(str => str.trim() === '');
  },

  isEmail: (mail: string): boolean => {
    return regex.test(mail);
  },
};
