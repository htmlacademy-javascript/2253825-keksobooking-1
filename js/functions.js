const isPalindrom = (str) => str.toLowerCase().replaceAll(' ', '')
  .split('').reverse().join('');

isPalindrom('Лёша на полке клопа нашёл');


const extractNumber = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str.at(i), 10))) {
      result += str.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('ECMAScript 2023');


const myPadStart = (str, minLength, pad) => {

  const actualPad = minLength - str.length;

  return (actualPad <= 0) ? str : pad.slice(0,
    actualPad % pad.length) + pad.repeat(actualPad / pad.length) + str;
};

myPadStart('q', 4, 'we');


const getRandomCoordinates = (min, max, bitDepth) => {

  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }

  const random = Math.random() * (max - min) + min;

  return random.toFixed(bitDepth);
};

getRandomCoordinates(1.11, 1.12, 6);


