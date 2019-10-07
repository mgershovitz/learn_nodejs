function all(p1, p2) {

    return new Promise(function (fulfill, reject) {
        let counter = 0;
        var values = [];

        function resolvePromis(val, index) {
            values[index] = val;
            counter += 1;
            if (counter === 2) fulfill(values);
        }
        p1.then((val) => resolvePromis(val, 0));
        p2.then((val) => resolvePromis(val, 1));
    })
}


all(getPromise1(), getPromise2()).then(console.log);