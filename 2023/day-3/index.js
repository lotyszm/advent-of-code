import fs from "fs";

function partOne(lines) {
  const regexSpecialChar = /[^0-9.]/; 
  const regexDigits = /(\d+)/g; 
  let sum = 0;

  const height = lines.length;
  const isAdjacentToSymbol = (lineOfNumbers, rowIndex, colIndex, length) => {
    
    const directions = [
      [-1, -1], [-1, 0], [-1, 1], 
      [ 0, -1],          [ 0, 1], 
      [ 1, -1], [ 1, 0], [ 1, 1]  
    ];

    for (let i = 0; i < length; ++i) {
      for (const [dx, dy] of directions) { 
        const x = colIndex + i;
        const y = rowIndex;
        const adjX = x + dx;
        const adjY = y + dy;

        if (adjX >= 0 && adjX < lineOfNumbers.length && adjY >= 0 && adjY < height) {
          if (regexSpecialChar.test(lines[adjY][adjX])) {
            return true;
          }
        }
      }
    }
    return false;
  };

  lines.forEach((line, rowIndex) => {
    let matchArray;
    while ((matchArray = regexDigits.exec(line)) !== null) {
      const number = matchArray[0];
      const numberIndex = matchArray.index;
  
      if (isAdjacentToSymbol(line, rowIndex, numberIndex, number.length)) {
        sum += Number(number);
      }
    }
  });

  return sum;
}


function partTwo(lines) {
  // todo
}



const lines = fs.readFileSync('./input_1.txt', 'utf-8').trim().split('\n');
console.log(partOne(lines));
// console.log(partTwo(lines));

