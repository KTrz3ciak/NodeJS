// Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt. Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync)
const fs = require('fs');
const mat = require('./math.js')
// const numberA = require('./a.txt');
// const numberB = require('./b.txt');
// let numberA = fs.readFileSync('a.txt');
// const a = fs.readFileSync('./a.txt');
// const b = fs.readFileSync('./b.txt');
const a = fs.readFileSync('15.10.22/a.txt','utf8');
console.log(a);
const b = fs.readFileSync('15.10.22/b.txt','utf8');
console.log(b);

let wynik = "";
    wynik += "dodawanie 10 + 2 = " + mat.add(parseInt(a),parseInt(b));
    wynik += "\nodejmowanie 10 - 2 = " + mat.sub(a,b);
    wynik += "\nmnożenie 10 * 2 = " + mat.mul(a,b);
    wynik += "\ndzielenie 10 / 2 = " + mat.div(a,b);
    

fs.writeFileSync("15.10.22/wynik.txt", wynik);
console.log(wynik);