const isPalindrom = (str) => {
  const normalizedStr = str.toLowerCase().replaceAll(' ', '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
};

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
  return (actualPad <= 0) ? str : pad.slice (0, actualPad % pad.length)
+ pad.repeat (actualPad / pad.length) + str;
};

myPadStart('q', 4, 'we');


const getRandomCoordinates = (min, max, decimal) => {
  const random = Math.random() * (max - min + 1) + min;
  return random.toFixed(decimal);
};

getRandomCoordinates(6, 66, 66,6);
