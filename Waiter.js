'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */

function waiter(number, q) {
    const isPrime = (num) => {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                return false;
            }
        }
        return true;
    }

    const nthPrime = () => {
        let prime = 2;
        let counter = 0;
        return {
            getNextPrime: () => {
                if(counter === 0){
                    counter++
                    return prime;
                }
                let num = prime + 1;
                while (!isPrime(num)) {
                    num++;
                }
                prime = num;
                return num;
            }
        }


    }

    let itt = 0;
    const answers = [];
    let A = number;
    const {getNextPrime} = nthPrime();
    while (itt++ < q) {
        const prime = getNextPrime();
        const spliceIndexs = [];
        A.forEach((el, index) => {
            if (el % prime === 0) {
                answers.push(el);
                spliceIndexs.push(index);
            }
        });

        // splice and reverse A
        A = A.filter((el, index) => !spliceIndexs.some(i => i === index)).reverse()



    }
    return answers.concat(A.reverse());

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    const number = readLine().replace(/\s+$/g, '').split(' ').map(numberTemp => parseInt(numberTemp, 10));

    const result = waiter(number, q);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
