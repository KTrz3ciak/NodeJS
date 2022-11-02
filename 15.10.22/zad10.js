// Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt. Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync)
const fs = require('fs');
const mat = require('./math.js')
// const numberA = require('./a.txt');
// const numberB = require('./b.txt');
// let numberA = fs.readFileSync('a.txt');
// const a = fs.readFileSync('./a.txt');
// const b = fs.readFileSync('./b.txt');
// Rozszerzenie aplikacji z zadania 8 tak, by nazwy plików z których pobieramy liczby były podawane w parametrach w czasie uruchamiania.



//


const a = process.argv[2];
console.log("a wynosi: " + a);
const b = process.argv[3];
console.log("b wynosi: " + b);
if (a == undefined)
{
    a = fs.readFileSync('a.txt','utf8');
}
else if(b == undefined)
{
   b = fs.readFileSync('b.txt','utf8');
} 
let wynik = "";
    wynik += "dodawanie a + b = " + mat.add(parseInt(a),parseInt(b));
    wynik += "\nodejmowanie a - b = " + mat.sub(a,b);
    wynik += "\nmnożenie a * b = " + mat.mul(a,b);
    wynik += "\ndzielenie a / b = " + mat.div(a,b);
    

fs.writeFileSync("wynik.txt", wynik);
console.log(wynik);
