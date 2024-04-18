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

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

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
