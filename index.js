const colors = require("colors");

const firstNumberRange = +process.argv[2];
const secondNumberRange = +process.argv[3];

const findPrimeNumber = () => {
  let primeNumbers = [];

  for (let i = firstNumberRange; i <= secondNumberRange; i++) {
    let flag = 1;
    if (i > 2 && i % 2 !== 0) {
      for (let j = 3; j * j <= i; j = j + 2) {
        if (i % j === 0) {
          flag = 0;
          break;
        }
      }
    } else if (i !== 2) flag = 0;
    if (flag === 1) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};

if (!(firstNumberRange && secondNumberRange)) {
  console.log(colors.red("Введите диапазон чисел! Например: 100 200"));
} else {
  const primeNumbers = findPrimeNumber();
  if (primeNumbers.length === 0) {
    console.log(colors.red("Простых чисел нет!"));
  } else {
    const result = primeNumbers.filter((number, index) => {
      if (index % 3 === 0) {
        console.log(colors.green(number));
        return number;
      } else if (index % 3 === 1) {
        console.log(colors.yellow(number));
        return number;
      } else if (index % 3 === 2) {
        console.log(colors.red(number));
        return number;
      }
    });
  }
}
