const fs = require('fs');
const readLine = require('readline')
const path = './accessTest.log';

const ipAddresses = /(89.123.1.41)|(34.48.240.111)/

const lineReader = readLine.createInterface({
    input: fs.createReadStream(path, 'utf-8')
});

lineReader.on('line', (line) => {
    if (line.match(ipAddresses)?.input) {
        fs.appendFile(`${line.match(ipAddresses)[0]}_requests.log`, line.match(ipAddresses).input + '\n', (err) => {
            if (err) console.log(err);
        })
    }
});