const generator = ({characterSet, length}) => {

  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  // High performance method to generate random string (Not for generating secure tokens)

  return new Promise((resolve)=>{

    var charsToUse = "";

    if (characterSet.includes("lowercase") === true) {
      charsToUse += "abcdefghijklmnopqrstuvwxyz";
    }

    if (characterSet.includes("uppercase") === true) {
      charsToUse += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (characterSet.includes("number") === true) {
      charsToUse += "0123456789";
    }    

    const characters = charsToUse;
    const charactersLength = characters.length;
    var result = "";

    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return resolve(result);

  });

}

const intGenerator = (min, max) => {

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

  return result;

}

const generateInt = (min, max) => {

  // https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript

  return new Promise((resolve, reject)=>{

    if (min === undefined) {
      return reject(new Error("missing_min_value"));
    }

    if (min !== parseInt(min, 10)) {
      return reject(new Error("non_integer_min_value"));
    }

    if (max === undefined) {
      return reject(new Error("missing_max_value"));
    }

    if (max !== parseInt(max, 10)) {
      return reject(new Error("non_integer_max_value"));
    }

    if (min > max) {
      return reject(new Error("min_value_greater_than_max_value"));
    }

    var result = intGenerator(min, max);

    return resolve(result);

  });

}

const generateToken = (options) => {

  // options.characterSet = (ARR) ["lowercase", "uppercase", "number"];
  // options.length = (INT) any number / performance hit for long length

  return new Promise((resolve)=>{

    if (options === undefined) {
      options = {};
    }

    if (options.characterSet === undefined) {
      options.characterSet = ["lowercase", "uppercase", "number"];
    }

    if (options.length === undefined) {
      options.length = 8;
    }

    generator(options).then((result)=>{
      return resolve(result);
    });

  });

}

module.exports = {
  generateToken,
  generateInt
};
