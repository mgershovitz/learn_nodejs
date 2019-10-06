var p = new Promise(function (fulfill, reject) {
    setTimeout(function() {reject(new Error('REJECTED!'))}, 330);
});

function onReject (error) {
    console.log(error.message)
}

p.then(null,onReject);