//1. Stworzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. Z wykorzystaniem funkcji pozwalającej na przekonwertowanie obiektu na postać tekstową(JSON.stringify).
// const fs = require('fs');

// // const user = {
// //     name: 'Jan',
// //     lastName: 'Nowak'
// // };

// const user = {
//     firstName: 'Konrad',
//     surName: 'Trzeciak'
// }
// const userAsString = JSON.stringify(user);
// fs.writeFile('user.json', userAsString, (error) => {
//     if (error) {
//         console.log("Doesn't saved");
//     } else {
//         console.log("Saved correct");
//     }
// });

// console.log("End of program");

//2. Rozszerzenie aplikacji z zadania 1 o dynamiczne wprowadzanie danych które chcemy zapisać do pliku. Do wykorzystania zewnętrzny moduł yargs.
//
// const yargs = require("yargs"); // === const argv = reguire("yargs").argv;   ||| npm install yargs
// const argv = yargs.argv;
// const fs = require('fs');

// const user = {
//     firstName: argv.name,
//     lastName: argv.surName
// }
// const userAsString = JSON.stringify(user);
// fs.writeFile('user.json', userAsString, (error) => {
//     if (error) {
//         console.log("Doesn't saved");
//     } else {
//         console.log("Saved correct");
//     }
// });

// console.log("End of program");

// 3. Dodanie do naszej aplikacji z zadania 2 wczytanie już wcześniej zapisanego obiektu, przed nadpisaniem nowymi wartościami. W konsoli wypiszmy jedynie imię wczytanego użytkownika. Wszystkie operacja na plikach wykonujemy za pomocą modułu fs i funkcji asynchronicznych.

// const yargs = require("yargs"); // === const argv = reguire("yargs").argv;   ||| npm install yargs
// const argv = yargs.argv;
// const fs = require('fs');
// const fileName = 'user.json';

// if (argv.name && argv.surName) {
//     fs.readFile(fileName, 'utf-8', (error,data) => {
//         if (error) {
//         console.log("Reading doesn't work");
//     } else {
//             console.log("reading correct");
//             const userFromFile = JSON.parse(data);
//             console.log(`User reading from file ${userFromFile.firstName}`);
//             }
//             const user = {
//             firstName: argv.name,
//             lastName: argv.surName
//             }
//     const userAsString = JSON.stringify(user);
//     fs.writeFile(fileName, userAsString, (error) => {
//         if (error) {
//         console.log("Doesn't saved");
//     } else {
//         console.log("Saved correct");
//     }
// });
//     })



// console.log("End of program");
// } else {
//     console.log("Not correct parameters")
// }


//4. Aplikacja która pobierze z zewnętrznego API informację o użytkowniku i wyświetli w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz jego imię.
// Adres URL do API: https://jsonplaceholder.typicode.com/users/{ID} gdzie ID to identyfikator użytkownika (wybrana liczba od 1 do 10 włącznie).
// Np: Adres URL dla użytkownika o ID=2: https://jsonplaceholder.typicode.com/users/2
// Wynik w konsoli
// Ervin Howell
// lat -43.9509
// lng -34.4618
// W zadaniach 4-10, do pobieranie danych z API, wykorzystamy zewnętrzny moduł request. Moduł jest przestarzały ale to nie będzie nam przeszkadzać w zajęciach.
// Dokumentacja: https://github.com/request/request#readme
// Strona: https://www.npmjs.com/package/request
// 5. Rozszerzenie zadania 4 tak aby aplikacja poinformowała użytkownika o błędzie pobierania danych lub braku szukanego użytkownika w bazie.

// const request = require('request');
// const URL = "https://jsonplaceholder.typicode.com/users/2";

// request(URL, (error, response, body) => {
//     if (error) { // ten error jest ustawiony wtedy gdy nie ma komunikacji z serwerem
//         console.log('Something wrong with connect to serwer');
//     } else {
//         console.log("Correct answer");
//         try {
//             if (response.statusCode === 200) { // status 200 oznacza super działanie serwera
//                 const data = JSON.parse(body);
//                 console.log(`Dane użytkownika pobranego z serwera ${data.username} ${data.address.geo.lat} ${data.address.geo.lng}`);
//             } else { // ten przypadek może zajść gdy serwer niepoprawnie obsłuży nasze zapytanie lub nasze zapytanie jest niepoprawne
//                 console.log(response.statusCode);
//             }
//             } catch { console.log('Something wrong')}
//     }
    
// });

// 6. Dodajmy do zadania 5 dynamiczne wprowadzanie ID poprzez użycie zewnętrznej biblioteki yargs.
// Przykład uruchomienia aplikacji
// node app.js --id=2
// Wynik w konsoli
// Ervin Howell
// lat -43.9509
// lng -34.4618
// node app.js --id=20
// Wynik w konsoli
// User not found.
// const request = require('request');
// const yargs = require('yargs');
// const intID = parseInt(yargs.argv.id);
// if(intID != null) { // warto sprawdzic czy id jest liczba naturalna
//     const URL = 'https://jsonplaceholder.typicode.com/users/' + intID;

// request(URL, (error, response, body) => {
//     if (error) { // ten error jest ustawiony wtedy gdy nie ma komunikacji z serwerem
//         console.log('Something wrong with connect to serwer');
//     } else {
//         console.log("Correct answer");
//         try {
//             if (response.statusCode === 200) { // status 200 oznacza super działanie serwera
//                 const data = JSON.parse(body);
//                 console.log(`Dane użytkownika pobranego z serwera ${data.username} ${data.address.geo.lat} ${data.address.geo.lng}`);
//             } else { // ten przypadek może zajść gdy serwer niepoprawnie obsłuży nasze zapytanie lub nasze zapytanie jest niepoprawne
//                 console.log(response.statusCode);
//             }
//             } catch { console.log('Something wrong')}
//     }
    
// });
// }

// 7. Dodanie do zadanie 6 opcji pobrania pogody dla wczytanego użytkownika. Odpowiednie zabezpieczenie naszej aplikacji w przypadku błędu API (podobnie jak w zadaniu 5).
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}
// gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika

const request = require('request');
const yargs = require('yargs');
const intID = parseInt(yargs.argv.id);
if(intID != null) { // warto sprawdzic czy id jest liczba naturalna
    const URL = 'https://jsonplaceholder.typicode.com/users/' + intID;

request(URL, (error, response, body) => {
    if (error) { // ten error jest ustawiony wtedy gdy nie ma komunikacji z serwerem
        console.log('Something wrong with connect to serwer');
    } else {
        console.log("Correct answer");
        try {
            if (response.statusCode === 200) { // status 200 oznacza super działanie serwera
                const data = JSON.parse(body);
                console.log(`Dane użytkownika pobranego z serwera ${data.username} ${data.address.geo.lat} ${data.address.geo.lng}`);
                const weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${data.address.geo.lat}&lon=${data.address.geo.lng}`;
                    request(weatherURL, (error, response, body) => {
                        if (error) {
                            console.log('Not connection with weather serwer');
                        } else {
                            if (response.statusCode === 200) {
                                const weather = JSON.parse(body);
                                // tutaj mamy odpowiedz z serwera pogody
                                console.log(weather.weather[0].description);
                            } else {
                                console.log(response.statusCode);
                            }
                        }    
                    })

            } else { // ten przypadek może zajść gdy serwer niepoprawnie obsłuży nasze zapytanie lub nasze zapytanie jest niepoprawne
                console.log(response.statusCode);
            }
            } catch { console.log('Something wrong')}
    }
});
}

// 8.