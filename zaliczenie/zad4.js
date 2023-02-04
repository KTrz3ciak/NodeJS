// 4. Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, a następnie:
// pobierze z API informacje o danej liczbie (http://numbersapi.com/{number}, np http://numbersapi.com/42)
// informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie
// Przykład pliku: data.json
// {
//     "number": "588",
//     "filename": "file.json"
// }
// Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.

const fs = require('fs');
const argv = require('yargs').argv;
const request = require('request');
const ID = argv.id;
const URL = `http://numbersapi.com/${ID}`;
const fileName = 'data.json';
const fileNumber = 'fileWithData.json';
const correctStatuCode = 200;
const fileData = {
    number: ID,
    filename: fileNumber,
}
let fileDataJSON = JSON.stringify(fileData);
if (argv.id == null || !Number.isInteger(argv.id) || argv.id < 0) {  // obsługa błędów w przypadku podania liczby
    console.log('nieprawidłowy parametr');                          // równej 0 nie będącej liczbą całkowitą oraz mniejszą od 0
    process.exit(0);
}
request(URL, (error, response, body) => {
    if (!error && response.statusCode === correctStatuCode) {
        let page = {
            number: ID,
            data: body,
        }
        let pageJSON = JSON.stringify(page);
        // console.log(page);
        fs.writeFileSync(fileNumber, pageJSON);
    }
    else {
        console.log('User not found or network connection issues');
    }
})
fs.writeFileSync(fileName, fileDataJSON);
fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
fs.readFile(fileNumber, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
// const fileJSON = JSON.stringify(URL);


// fs.writeFile('./data.json', fileJSON, (error) => {
//     if (error) {
//         console.log('błąd zapisu do pliku');
//     } else {
//         console.log('plik został zapisany');
//     }
// });

// fs.readFile(fileName, 'utf-8', (error, data) => {
//     if (error) {
//         console.log('problem z odczytaniem pliku');
//     } else {
//         const dataFromFile = JSON.parse(data);
//         console.log('Wczesniej odczytany plik', dataFromFile);
//     }
// });