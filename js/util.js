const getRandomCoordinates = (min, max, bitDepth) => {

  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }

  const random = Math.random() * (max - min) + min;

  return random.toFixed(bitDepth);
};


const getRandomInteger = (a, b) => {

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];


const getRandomArray = (array) => {

  const randomArray = [];
  const randomLength = getRandomInteger(0, array.length);

  for (let i = 0; i < randomLength; i++) {
    randomArray.push(array[i]);
  }

  return randomArray.sort();
};


export { getRandomCoordinates, getRandomInteger, getRandomArrayElement, getRandomArray };
