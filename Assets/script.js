const passwordGenerator = function (passLength) {
  let charAmt = ""
  let includeUpper = undefined
  let includeLower = undefined
  let includeNumbers = undefined
  let includeSpecial = undefined

  charAmt = prompt("How many characters would you like? It must be between 8 & 32 characters (128 bits max)?")
  while (charAmt < 8 || charAmt > 128) {
    charAmt = prompt("Password must be between 8 & 32 characters!")
  }
  console.log("After while loop : " + charAmt)

  includeUpper = confirm("Include Uppercase Characters? Ok for Yes, cancel for No.")
  console.log("Include Uppercase : " + includeUpper)
  includeLower = confirm("Include Lowercase Characters? Ok for Yes, cancel for No.")
  console.log("Include Lowercase : " + includeLower)
  includeNumbers = confirm("Include Numbers? Ok for Yes, Cancel for No.")
  console.log("Include Numbers : " + includeNumbers)
  includeSpecial = confirm("Include Special Characters? Ok for Yes, Cancel for No.")
  console.log("Include Special : " + includeSpecial)

  if (charAmt)
    if (includeLower === false
      && includeNumbers === false
      && includeUpper === false &&
      includeSpecial === false) {
      passwordGenerator()
    }

  var len = (passLength) ? (passLength) : (charAmt)
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = '0123456789'
  let special = '~!@#$%^&*()|}{[]_+?<>,./-='
  let password = ''
  let content = ''
  let characters = ''
  while (password.length < len) {
    if (includeUpper === true) {
      generateUpper = Math.floor(upper.length * Math.random())
      characters += upper.charAt(generateUpper)
    }
    if (includeLower === true) {
      generateLower = Math.floor(lower.length * Math.random())
      characters += lower.charAt(generateLower)
    }
    if (includeNumbers === true) {
      generateNumber = Math.floor(number.length * Math.random())
      characters += number.charAt(generateNumber)
    }
    if (includeSpecial === true) {
      generateSpecial = Math.floor(special.length * Math.random())
      characters += special.charAt(generateSpecial)
    }
    password = characters
  }
  password = password.split('').sort(function () {
    return 0.5 - Math.random()
  }).join('')
  return password.substr(0, charAmt)
}

// console.log(passwordGenerator.length)
document.getElementById('generate-pwd').addEventListener("click", function () {
  document.getElementById('password').textContent = passwordGenerator()
})