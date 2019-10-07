function parsedPromised(json_obj) {
    let json_promise = new Promise(function (fulfill, reject) {
        try {
            fulfill(JSON.parse(json_obj));
        } catch (e) {
            reject(e)
        }
    });
    return json_promise
}

parsedPromised(process.argv[2])
    .then(console.log)
    .catch(function (e) {console.log(e.message)})