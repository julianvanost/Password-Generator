const passwordGenerator = function (len) {
  let charAmt = prompt("How many characters would you like (must be 32 characters or less)?")
  var length = (len) ? (len) : (charAmt);
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  var crunch = true;
  while (password.length < length) {
    entity1 = Math.ceil(string.length * Math.random() * Math.random());
    entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
    entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
    hold = string.charAt(entity1);
    hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
    character += hold;
    character += numeric.charAt(entity2);
    character += punctuation.charAt(entity3);
    password = character;
  }
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
  return password.substr(0, len);
}

console.log(passwordGenerator);
document.getElementById('generate-pwd').addEventListener("click", function () {
  console.log(passwordGenerator);

  document.getElementById('password').textContent = passwordGenerator()
})