// f = function(namespace) {
//     return console.log.bind(console, namespace);
// };
// logger = f('hello');


module.exports = function(namespace) {
    return console.log.bind(console, namespace);
};

