function attachTitle(str) {
    return 'DR. ' + str;
}

let takeManhattan = Promise.resolve('MANHATTAN');

takeManhattan
    .then(attachTitle)
    .then(console.log);
