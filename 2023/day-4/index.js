import fs from "fs";

function partOne(fileName) {
  const lines = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  return lines
    .map((line) => {
      const gameName = line.split(": ")[0];
      const [winners, myNumbers] = line.split(": ")[1].split(" | ");
      const winnersArray = winners.trim().split(/\s+/);
      const myNumbersArray = myNumbers.trim().split(/\s+/);
      let sum = 0;
      const result = winnersArray.filter((number) => myNumbersArray.includes(number));
      if (result.length) {
        sum += Math.pow(2, result.length - 1);
      }
      return sum;
    })
    .reduce((total, current) => {
      return total + current;
    });
}

// console.log(partOne("./input_1.txt"));

function partTwo(fileName) {
  const lines = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  const scratchcards = [];

  scratchcards[0] = 0;
  for (let i = 1; i <= lines.length; i++) {
    scratchcards[i] = 1;
  }


  lines.forEach((line) => {
    const gameNumber = Number(line.split(": ")[0].split(/\s+/)[1]);

    const [winners, myNumbers] = line.split(": ")[1].split(" | ");
    const winnersArray = winners.trim().split(/\s+/);
    const myNumbersArray = myNumbers.trim().split(/\s+/);

    const result = winnersArray.filter((number) => myNumbersArray.includes(number));

      let copies = scratchcards[gameNumber];
      for (let i = gameNumber + 1; i <= gameNumber + result.length; i++) {
        if (i <= lines.length) {
          scratchcards[i] += copies;
        }
      }
  });

  return scratchcards.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
}

// console.log(partTwo("./input_2.txt"));
