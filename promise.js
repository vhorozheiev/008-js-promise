/* Get familiar with Promises - https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65
Create a first function (which takes argument `data`) that always returns a promise and:
1.If data is not a number, the function returns a promise rejected instantly and give the word
"error" (in a string
2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string
4.Create a second function (which takes argument "result") which should be executed after the
first function is done and print the final message like `Your number is ${result}` ONLY for cases
when the first function doesn't return " error“
5. Write same tasks(1-4) using async/await */

// function checkNumber(data, res, rej) {
//     if (typeof data !== 'number') return rej(Error('error'));
//     res(data);
// }

// function isOddNumber(number, res, rej) {
//     if (number % 2 == 0) {
//         setTimeout(() => {
//             console.log("even " + number);
//             return rej(number);
//         }, 2000);
//     }
//     else {
//         setTimeout(() => {
//             console.log("odd");
//             res(number);
//         }, 1000);
//     }
// }

// function printResult(result) {
//     console.log(`Your number is ${result}`);
// }

// new Promise((res, rej) => {
//     checkNumber(14, res, rej)
// }).then(val => {
//     new Promise((res, rej) => {
//         isOddNumber(val, res, rej);
//     }).then(val => {
//         printResult(val);
//     }).catch(val => {
//         printResult(val);
//     })
// });

//async realize

async function checkNumber(data) {
    return new Promise((res, rej) => {
        if (typeof data !== 'number') return rej(Error('error'));
        res(data);
    });
}

async function isOddNumber(number) {
    return new Promise((res, rej) => {
        if (number % 2 == 0) {
            setTimeout(() => {
                console.log("even ");
                return rej(number);
            }, 2000);
        }
        else {
            setTimeout(() => {
                console.log("odd");
                res(number);
            }, 1000);
        }
    })
}

//need to fix
async function printResult(result) {
    return new Promise((res, rej) => {
        console.log(`Your number is ${result}`);
    }).catch(result => {
        console.log(`Your number is ${result}`);
    });
}
async function promiseRunner() {
    let checkNumberResult = await checkNumber(10);
    let checkIsOddNumber = await isOddNumber(checkNumberResult);
    let printRes = await printResult(checkIsOddNumber);
}

promiseRunner();