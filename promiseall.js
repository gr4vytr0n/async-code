// asynchrounously read a file
const { readFile } = require('fs')
const { promisify } = require('util')

// use Node.js' util.promisify to make a function (that takes a callback) use Promises
const readfile = promisify(readFile)

const readAnimals = readfile('animals.txt', 'utf-8')
const readTrees = readfile('trees.txt', 'utf-8')

// use Promise.all to run asynchronous code in parallel
const readFiles = Promise.all([readAnimals, readTrees])

readFiles
    .then(data => {
        let [ animals, trees ] = data
        
        animals.split('\n').forEach(item => console.log(item))
        trees.split('\n').forEach(item => console.log(item))
    })
    .catch(err => console.log(err))
