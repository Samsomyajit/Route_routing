const lineByLine = require('n-readlines');

const liner = new lineByLine('a.txt');

let line;



while (line = liner.next()) {
    let json = JSON.stringify(line);
    console.log(json)
    mydata = JSON.parse(json);
    data = mydata.data
    console.log(data)
    console.log(line.toString('utf8'));
    

}
console.log(data.toString('utf8'))
