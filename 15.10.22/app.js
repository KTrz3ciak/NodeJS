// console.log("Hello World!");
// Aplikacja która podczas uruchomienia przywita nas komunikatem Hello World!. Aplikacja ma być uruchamiana z poziomu konsoli. (node app.js).
// Aplikacja złożona z 2 plików: app.js oraz user.js, która wyświetli przywitanie osoby. Plik app.js odpowiedzialny jest za wczytanie modułu pliku user.js i wyświetlenie w konsoli hello {name}!, gdzie name to wartość z pliku user.js.
// Rozszerzenie zadania 2 tak by plik user.js zwracał imię oraz nazwisko jako oddzielne zmienne. W app.js wyświetlmy przywitanie osoby.

// const user = require('./user.js');
// console.log("Hello " + user.firstName +  " " + user.lastName);

// Kalkulator wykonujący cztery podstawowe działania (dodawanie, odejmowanie, dzielenie oraz mnożenie). Aplikacja powinna składać się z 2 plików (główna aplikacja app.js oraz math.js zawierający odpowiednie funkcje).
const mat = require('./math.js');
const fs = require('fs');


// Rozbudowanie kalkulatora o stałą matematyczną PI i wypisanie tejże wartości na konsoli w naszej głównej aplikacji.
// console.log("Pi = " + mat.Pi);
// Zapisanie wyniku działania z zadania 5 do pliku, wykorzystując moduł Core'owy File System (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync).
let data = "";
    data += "dodawanie 1 + 2 = " + mat.add(6,3);
    data += "\nodejmowanie 2 - 1 = " + mat.sub(6,3);
    data += "\nmnożenie 2 * 2 = " + mat.mul(6,3);
    data += "\ndzielenie 4 / 2 = " + mat.div(6,3);
    data += "\nPi = " + mat.Pi;

fs.writeFileSync("15.10.22/data.txt", data);
console.log(data);

//node -v

// fs.appendFileSync("data.txt", data); dopisywanie tego samego tekstu

// Aplikacja wyświetlająca informację o zalogowanym użytkowniku systemu, przy użyciu modułu OS (https://nodejs.org/dist/latest-v16.x/docs/api/os.html , szukana funkcja ma przyrostek Sync). Dodatkowo: zapis nazwy użytkownika do pliku na dysku.
// const os = require("os");
// const fs = require("fs");

// const userData = os.userInfo();
// console.log(userData);

// let data = userData.username;
// fs.writeFileSync("user.txt", data);

// Do DOMU
// Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt. Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v16.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync)


// Obsługa parametrów wejściowych. Aplikacja złożona jest z 1 pliku: app.js. Podczas uruchamiania aplikacji możemy przekazać jej dodatkowy parametr, który zostanie wyświetlony po komunikacie hello. Gdy podanych będzie więcej parametrów, wtedy ignorujemy wszystkie prócz pierwszego. Gdy nie będzie podanych żadnych parametrów aplikacja wyświetla hello world. Należy wykorzystać globalną zmienną: process.