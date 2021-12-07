const fs = require("fs");
const readline = require("readline");

// I stole this from https://stackoverflow.com/a/10143943
async function processLineByLine() {
  const fileStream = fs.createReadStream("./01/input.txt");
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let numberOfIncreases = 0;
  let prevLine = null;

  for await (const line of rl) {
    if (Number.parseInt(line) > Number.parseInt(prevLine)) {
      numberOfIncreases++;
    }
    prevLine = line;
  }

  console.log(numberOfIncreases);
}

processLineByLine();
