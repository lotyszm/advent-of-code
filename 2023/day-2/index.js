import fs from "fs";

const maxCount = {
  red: 12,
  green: 13,
  blue: 14,
};

function partOne(fileName) {
  const lines = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  return lines.map((line) => {
    // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    const gameName = line.split(": ")[0];

    // 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    return line
      .split(": ")[1]
      .split("; ")
      .map((set) => {
        const oneGameSet = set.split(", ");
        return oneGameSet.every((item) => {
          const [count, color] = item.split(' ');
          return Number(count) <= maxCount[color];
        });
      }).every((singleGame) => singleGame);
  }).reduce((total, current, index) => {
    return current ? total + (index + 1) : total; 
  }, 0);
}

// console.log(partOne("./input_1.txt"));



function partTwo(fileName) {
  const lines = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  return lines.map((line) => {

    const maxInGame = {
      red: 0,
      green: 0,
      blue: 0,
    };

    line
      .split(": ")[1]
      .split("; ")
      .forEach((set) => {
        const oneGameSet = set.split(", ");

        return oneGameSet.forEach((item) => {
          const [count, color] = item.split(' ');

          if (Number(count) > maxInGame[color]) {
            maxInGame[color] = Number(count);
          }

        });
      });

      return maxInGame.blue * maxInGame.red * maxInGame.green;      
  }).reduce((total, current) => {
    return total + current;
  });
}

console.log(partTwo("./input_2.txt"));