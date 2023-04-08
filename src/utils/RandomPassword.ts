const alphabet = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

type PasswordOptions = {
  passwordLength: number
  includeLowercase: boolean
  includeUppercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

function getRandomPassword(options: PasswordOptions): string {
  const { passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols } = options

  const allowedChars = [
    includeLowercase ? alphabet : "",
    includeUppercase ? alphabet.toUpperCase() : "",
    includeNumbers ? numbers : "",
    includeSymbols ? symbols : "",
  ].join("")

  if (allowedChars.length === 0) {
    return ""
  }

  const generatedPassword = Array(passwordLength)
    .fill("")
    .map((x) => {
      return allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
    })
    .join("")

  return generatedPassword
}

export { getRandomPassword, type PasswordOptions }
