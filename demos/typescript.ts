import { readFileSync } from 'fs';

type Encoding = 'utf8';

interface FileOptions {
  encoding: Encoding;
}

const fileOptions: FileOptions = {
  encoding: 'utf8'
};

function main() {
  const file = readFileSync('./typescript.ts', fileOptions);

  console.log(file);
}

main();
