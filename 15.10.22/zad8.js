// Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt. Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync)
const fs = require('fs');

const mat = require('./math.js')
const numberA = require('./a.txt');
const numberB = require('./b.txt');
// let numberA = fs.readFileSync('a.txt');
const a = fs.readFileSync('a.txt',numberA);
const b = fs.readFileSync('b.txt',numberB);
console.log(a);
console.log(b);

let wynik = "";
    wynik += "dodawanie 1 + 2 = " + mat.add(numberA,numberB);
    wynik += "\nodejmowanie 2 - 1 = " + mat.sub(numberA,numberB);
    wynik += "\nmnożenie 2 * 2 = " + mat.mul(numberA,numberB);
    wynik += "\ndzielenie 4 / 2 = " + mat.div(numberA,numberB);
    

fs.writeFileSync("wynik.txt", wynik);