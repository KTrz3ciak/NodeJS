// 4. Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, a następnie:
// pobierze z API informacje o danej liczbie (http://numbersapi.com/{number}, np http://numbersapi.com/42)
// informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie
// Przykład pliku: data.json
// {
//     "number": "588",
//     "filename": "file.json"
// }
// Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.

const argv = require('yargs').argv;
const request = require('request');
const ID = argv.id;
const fileName = 'data.json';

const getInfoAboutNumber = (id, callback) => {
    const URL = `http://numbersapi.com/${ID}`;
    request(URL, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const number = JSON.parse(body);
            callback(number);
        } else {
            console.log('Number not found');
        }
    });
}
getInfoAboutNumber(ID, (number) => {
    console.log(number);
    });