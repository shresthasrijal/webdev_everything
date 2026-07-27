let email = "freecodecamp@example.com";

function maskEmail(email) {
  const [username, domain] = email.split("@");
  return `${username[0]}${"*".repeat(username.length - 2)}${username[username.length - 1]}@${domain}`;
}

console.log(maskEmail(email));
