//  1. Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.
//  Wypisywane informacje:
//  czas utworzenia
//  czas modyfikacji
//  rozmiar
//  Program powinien działać poprawnie także po zmianie nazwy i lokalizacji pliku - bez zmiany kodu źródłowego!
//  Przykłady wywołania
//  > node app.js //wyświetla szczegóły pliku app.js
//  po zmianie nazwy app.js na app2.js
//  > node app2.js //wyświetla szczegóły pliku app2.js
//  Podpowiedź: jest to możliwe przy użyciu wbudowanych modułów Node.js.

const fs = require("fs");

// function createdDate(file) {
//     const { whenCreated } = fs.statSync(file)
//     return whenCreated;
// }
// console(createdDate('/zad3.js'));

fs.stat("./zad3.js", (error, stats) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("File was created at: ", stats.birthtime.toUTCString());
    console.log("File was last modify at: ", stats.mtime);
    console.log(`File size is equal:  ${stats.size} KB`);
    
});