import fs from "fs";

/**
 * 
 * PART ONE
 * 
 */

function partOne(fileName) {
  const lines = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  const numbers = lines.map((line) => {
    const firstNumber = line.match(/\d/)[0];
    const lastNumber = line.match(/\d(?=[^\d]*$)/);

    return `${firstNumber}${lastNumber}`;
  });
  const sumOfNumbers = numbers.reduce((total, current) => {
    return total + parseInt(current);
  }, 0);

  return sumOfNumbers;
}

// console.log(partOne("./input_1.txt"));



/**
 * 
 * PART TWO
 * 
 */


function partTwo(fileName) {
  const lines = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  const numbers = lines.map((line) => {
    const lineNumbers = replaceWordsToNumbers(line);
    const firstNumber = lineNumbers.match(/\d/)[0];
    const lastNumber = lineNumbers.match(/\d(?=[^\d]*$)/);

    return `${firstNumber}${lastNumber}`;
  });
  const sumOfNumbers = numbers.reduce((total, current) => {
    return total + parseInt(current);
  }, 0);

  return sumOfNumbers;
}

const englishNumbersInWords = {
  one: 1,
  oneight: 18,
  two: 2,
  twone: 21,
  three: 3,
  threeigth: 38,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  sevenine: 79,
  eight: 8,
  eightwo: 82,
  nine: 9,
};

const wordsRegex = /sevenine|threeigth|eightwo|oneight|one|twone|two|three|four|five|six|seven|eight|nine/gi;

function replaceWordsToNumbers(string) {
  let replaced = string.replace(wordsRegex, (match) => {
    return englishNumbersInWords[match];
  });
  return replaced;
}


console.log(partTwo("./input_2.txt"));
