function maskEmail(email) {
  let index = email.indexOf("@");
  let userName = email.slice(0, index);
  let domain = email.slice(index);
  let emailFirstCharacter = userName.slice(0, 1);
  let emialLastCharacter = userName.slice(-1);	
  let userNameLength = userName.length;
  let astrics = "*".repeat( userNameLength - 2 );

  return emailFirstCharacter + astrics + emialLastCharacter + domain;
};

const email = "dusty@ferrumred.com";

console.log(maskEmail(email));