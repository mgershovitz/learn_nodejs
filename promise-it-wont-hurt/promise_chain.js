// first and second are globally provided promises for this exercise

var p = first();

p.then(function (result) {
    return second(result)
}).then(console.log);