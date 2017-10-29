// asynchrounously read a file
const fs = require('fs')
const util = require('util')
const readFile = fs.readFile
const promisify = util.promisify

// use Node.js' util.promisify to make a function (that takes a callback) use Promises
const readPromise = promisify(readFile)

// use async/await to handle Promises
async function readFileAA(file) {
    let result = undefined

    try {
        result = await readPromise(file, 'utf-8')
    } catch(e) {
        result = e
    }

    return result
}

readFileAA('animals.txt')
        .then(data => console.log(data))
        .catch(err => console.log(err))