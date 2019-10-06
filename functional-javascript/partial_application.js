
var slice = Array.prototype.slice;

function logger(namespace) {

    function namespaceLogger() {
        msg_args = [namespace].concat(slice.call(arguments));
        console.log.apply(null, msg_args);
    }
    return namespaceLogger
}

module.exports = logger;