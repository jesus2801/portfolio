export default {
  isEmpty: function (...strings: string[]): Boolean {
    return strings.some(str => str.trim() === '');
  },

  isValidString: function (string: string): Boolean {
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
  },

  isEmail: function (email: string): Boolean {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
  },
};
