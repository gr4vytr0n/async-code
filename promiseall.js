// asynchrounously read a file
const fs = require('fs')
const util = require('util')
const readFile = fs.readFile
const promisify = util.promisify

// use Node.js' util.promisify to make a function (that takes a callback) use Promises
const readPromise = promisify(readFile)

const readAnimals = readPromise('animals.txt', 'utf-8')
const readTrees = readPromise('trees.txt', 'utf-8')

// use Promis.all to run asynchronous code in parallel
const readFiles = Promise.all([readAnimals, readTrees])

readFiles
    .then(data => {
        let [ animals, trees ] = data
        
        animals.split('\n').forEach(item => console.log(item))
        trees.split('\n').forEach(item => console.log(item))
    })
    .catch(err => console.log(err))
