const fs = require('fs');

// read file
let file = fs.readFileSync('text.txt', 'utf-8', 'dimas rizaldy');
console.log(file);

let students = [
    { name: 'agus' },
    { name: 'dimas' },
    { name: 'dika' }
];
fs.writeFileSync('./students.json', JSON.stringify(students, null, 4));