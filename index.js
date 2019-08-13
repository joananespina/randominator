// Randominator

// isInteger Polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
const isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};

const tokenGenerator = ({ characterSet, length }) => {
  // tokenGenerator generates a token from a given (characterSet) with a specific (length)
  // this is an internal method

  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  // High performance method to generate random string (Not for generating secure tokens)

  return new Promise((resolve, reject) => {
    let charsToUse = '';

    if (Array.isArray(characterSet) === true) {
      // characterSet is an array
      if (characterSet.includes('lowercase') === false &&
      characterSet.includes('uppercase') === false &&
      characterSet.includes('number') === false) {
        // Invalid values in characterSet Array
        return reject(new Error('invalid_character_set_array'));
      }

      if (characterSet.includes('lowercase') === true) {
        // Add lowercase letters to charactersToUse for Token
        charsToUse += 'abcdefghijklmnopqrstuvwxyz';
      }

      if (characterSet.includes('uppercase') === true) {
        // Add uppercase letters to charactersToUse for Token
        charsToUse += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }

      if (characterSet.includes('number') === true) {
        // Add numbers to charactersToUse for Token
        charsToUse += '0123456789';
      }
    } else if (typeof characterSet === 'string') {
      // characterSet is a string
      // User specifically wants to use this set of characters to use for the Token
      charsToUse = characterSet;
    } else {
      // Invalid characterSet value - unknown characterSet
      return reject(new Error('unknown_character_set'));
    }

    const characters = charsToUse;
    const charactersLength = characters.length;
    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return resolve(result);
  });
};

const intGenerator = (min, max) => {
  // Randomly generate an integer from min to max
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
  min = Math.ceil(min);
  max = Math.floor(max);

  // Both maximum and minimum is inclusive
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
};

function generateInt (min, max) {
  return new Promise((resolve, reject) => {
    let result = null;

    try {
      // Min and max are required
      if (min === undefined) {
        return reject(new Error('missing_min_value'));
      }

      if (max === undefined) {
        return reject(new Error('missing_max_value'));
      }

      // Test if min and max values are integers

      const isMinInteger = isInteger(min);
      const isMaxInteger = isInteger(max);

      if (isMinInteger === false) {
        throw new Error('non_integer_min_value');
      }

      if (isMaxInteger === false) {
        throw new Error('non_integer_max_value');
      }

      // Min value must not exceed max value
      if (min > max) {
        return reject(new Error('min_value_greater_than_max_value'));
      }
      
      result = intGenerator(min, max);

    } catch (error) {
      return reject(error);
    }

    return resolve(result);

  });
};

function generateToken (options) {
  // options.characterSet = (Array of String or String) ['lowercase', 'uppercase', 'number'] or 'ABCdef123!@#';
  // options.length = (Integer) any number / performance hit for long length

  return new Promise((resolve, reject) => {
    if (options === undefined) {
      options = {};
    }

    if (options.characterSet === undefined) {
      options.characterSet = ['lowercase', 'uppercase', 'number'];
    }

    if (options.length === undefined) {
      options.length = 8;
    }

    tokenGenerator(options).then((result) => {
      return resolve(result);
    }).catch((error) => {
      if (error.message === 'unknown_character_set') {
        error = new Error('generateToken({characterSet}) must be String or Array.');
      } else if (error.message === 'invalid_character_set_array') {
        error = new Error('generateToken({characterSet}) invalid values used in Array.');
      }

      return reject(error);
    });
  });
};

module.exports = {
  generateToken,
  generateInt
};
