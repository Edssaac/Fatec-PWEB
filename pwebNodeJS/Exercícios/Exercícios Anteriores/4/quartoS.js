// impotando o módulo fs:
const fs = require('fs');

// lendo o arquivo "file.txt":
const data = fs.readFileSync('file.txt');

// execução bloqueada até o termino da leitura:
console.log(data.toString());