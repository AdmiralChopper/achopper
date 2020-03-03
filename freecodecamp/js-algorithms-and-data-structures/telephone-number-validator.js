function telephoneCheck(str) {
  // Good luck!
  let phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)(\d{3})([\s\-]?)(\d{4})$/;

  return phoneRegex.test(str);
  }


console.log(telephoneCheck("555-555-5555"));