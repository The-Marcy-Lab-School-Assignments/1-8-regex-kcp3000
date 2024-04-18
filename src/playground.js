const helloWorldRegex = (strHelloWorld) => /hello\s+world/i.test(strHelloWorld)


//console.log(helloWorldRegex("sup hello"))

const hasAVowel = (vowel) => {
    const hasVowel = /[aeiou]/gi
    return hasVowel.test(vowel)
}

// console.log(hasAVowel("a")); // true
// console.log(hasAVowel("AHHHHHH!")); // true
// console.log(hasAVowel("HEY")); // true
// console.log(hasAVowel("wow")); // true
// console.log(hasAVowel("")); // false
// console.log(hasAVowel("xzy")); // false
// console.log(hasAVowel("y")); // false

const hasCatsOrDogs = (catDog) => {
    const catOrDog = /(cats)|(dogs)/gi
    return catOrDog.test(catDog)
};

// console.log(hasCatsOrDogs("Gosh, I love having so many cats!")); // true
// console.log(hasCatsOrDogs("Wow, I have a lot of dogs!")); // true
// console.log(hasCatsOrDogs("Cats rule!")); // true
// console.log(hasCatsOrDogs("I do not care for that dog.")); // false
// console.log(hasCatsOrDogs("Cat? No way.")); // false
// console.log(hasCatsOrDogs("Cat? No, but I have a ton of dogs.")); // true

const hasVowelStart = (startWithVowels) => {
    const startingVowels = /(^a)|(^e)|(^i)|(^o)|(^u)/gi
    return startingVowels.test(startWithVowels)
};

// console.log(hasVowelStart("a")); // true
// console.log(hasVowelStart("A")); // true
// console.log(hasVowelStart("ab")); // true
// console.log(hasVowelStart("Ab")); // true
// console.log(hasVowelStart("ba")); // false
// console.log(hasVowelStart("Ba")); // false
// console.log(hasVowelStart("")); // false


const hasPunctuationEnd = (peridoOrNotToPeriod) => {
    const punctuation = /\W$/g
    return punctuation.test(peridoOrNotToPeriod)
};

// console.log(hasPunctuationEnd("a.")); // true
// console.log(hasPunctuationEnd("a!")); // true
// console.log(hasPunctuationEnd("a?")); // true
// console.log(hasPunctuationEnd("a")); // false
// console.log(hasPunctuationEnd("a!a")); // false
// console.log(hasPunctuationEnd("a?b")); // false
// console.log(hasPunctuationEnd("")); // false

const hasNothingOrDigits = (strDigits) => {
    const digits = /^\d+$|^$/g
    return digits.test(strDigits)
};

// console.log(hasNothingOrDigits("")); // true
// console.log(hasNothingOrDigits("123")); // true
// console.log(hasNothingOrDigits("abc")); // false
// console.log(hasNothingOrDigits("123abc")); // false
// console.log(hasNothingOrDigits("abc123")); // false

const hasNoFlippers = (strFlip) => {
    const filp = /^[^BCcDEHIKOoXxl]*$/
    return filp.test(strFlip)
};

// console.log(hasNoFlippers("Z")); // true
// console.log(hasNoFlippers("Zabdabbq")); // true
// console.log(hasNoFlippers("")); // true
// console.log(hasNoFlippers("abd")); // true
// console.log(hasNoFlippers("B")); // false
// console.log(hasNoFlippers("BC")); // false
// console.log(hasNoFlippers("oao")); // false
// console.log(hasNoFlippers("abdefo")); // false

const isValidEmail = (strEmail) => {
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return isEmail.test(strEmail)
};

const isValidPhoneNumber = (strNum) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(strNum)

const matchAllNumbers = (strMatch) => {
    // let emptyArr = [];
    // if (typeof strMatch === null) return emptyArr
    const matchNum = /\d\d|\d/g
    let matching = strMatch.match(matchNum) || []
    return matching

};

//console.log(matchAllNumbers('my number is '))

const matchAllNumbersAsNumbers = (matchNumStr) => {
    const matchNum = /\d\d|\d/g
    let matching = matchNumStr.match(matchNum) || []
    let numberArray = matching.map(Number)
    return numberArray
};

//console.log(matchAllNumbersAsNumbers('sfrgd 1 2 hi 40 3'))

const matchAllWords = (strWordMatch) => {
    let wordMatch = /\D*/g

};

