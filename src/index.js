import "babel-polyfill";
import { sum } from './suma';
import request from 'request';

function getQuote() {

    return new Promise((resolve, reject) => {
        request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', (error, response, body) => {
            resolve(body);
        });
    });
}

const main = async () => {
    let quote = await getQuote();
    console.log(quote);
}

const mainSuma = async(a, b) => {
    let suma = await sum(a, b);
    console.log(suma);
}

mainSuma(1, 2);
main();
