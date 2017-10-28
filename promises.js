// asynchrounously read a file
const fs = require('fs')
const readFile = fs.readFile

// promise returned by a function
const read = file => new Promise((reject, resolve) => {
    readFile(file, 'utf-8', (err, data) => {
        if (err) {
            return reject(err)
        }

        resolve(data)
    })
})

read('animals.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err))
