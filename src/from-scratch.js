/** FEEDBACK: Great job passing all test cases! */
const helloWorldRegex = (strHelloWorld) => /hello\s+world/i.test(strHelloWorld)

const hasAVowel = (vowel) => {
  const hasVowel = /[aeiou]/gi
  return hasVowel.test(vowel)
}

const hasCatsOrDogs = (catDog) => {
  const catOrDog = /(cats)|(dogs)/gi
  return catOrDog.test(catDog)
};

const hasVowelStart = (startWithVowels) => {
  const startingVowels = /^a|^e|^i|^o|^u/gi
  return startingVowels.test(startWithVowels)
};;

const hasPunctuationEnd = (peridoOrNotToPeriod) => {
  const punctuation = /\W$/g
  return punctuation.test(peridoOrNotToPeriod)
};

const hasNothingOrDigits = (strDigits) => {
  const digits = /^\d+$|^$/g
  return digits.test(strDigits)
};


const hasNoFlippers = (strFlip) => {
  const filp = /^[^BCcDEHIKOoXxl]*$/
  return filp.test(strFlip)
};

const isValidEmail = (strEmail) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return isEmail.test(strEmail)
};

const isValidPhoneNumber = (strNum) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(strNum)

const matchAllNumbers = (strMatch) => {
  // let emptyArr = [];
  // if (typeof strMatch === null) return emptyArr <-- tried doing a guard clause, did not work :(
  const matchNum = /\d\d|\d/g
  let matching = strMatch.match(matchNum) || [] //<--- def was unaware that you could just use operators like this
  return matching

};

const matchAllNumbersAsNumbers = (matchNumStr) => {
  const matchNum = /\d\d|\d/g
  let matching = matchNumStr.match(matchNum) || []
  let numberArray = matching.map(Number)
  return numberArray
};

const matchAllWords = (strWordMatch) => {
  let wordMatch = /[a-z']+/gi
  return strWordMatch.match(wordMatch) || []
};

const replaceAllNumbers = (strReplace) => {
  let replace = /[^a-z\s".,]+/gi
  return strReplace.replace(replace, '???')
};

const fixFileName = (strFile) => {
  let file = /\s+/g ///\s\s+/g please work
  return strFile.replace(file, '_')
};

const nameRedacter = (strRedact) => {
  const redact = /\b[A-Z]{2,}\b/g //man the website i was using was still hitting "ZO" but whatever
  return strRedact.replace(redact, 'REDACTED')
}

const camelToSnakeCase = (strCamel) => {
  const upperCase = /[A-Z]/g
  function upperToSnake(match, offset, string) {
    return (offset > 0 ? '_' : "") + match.toLowerCase()
  }
  return strCamel.replace(upperCase, upperToSnake)
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
