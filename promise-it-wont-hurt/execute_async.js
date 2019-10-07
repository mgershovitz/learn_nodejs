var p = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

p.then(console.log);

console.log('MAIN PROGRAM');