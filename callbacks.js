// asynchrounously read a file
const fs = require('fs')
const readFile = fs.readFile

// error-first callback
readFile('animals.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log(err)
    }

    console.log(data)
})
