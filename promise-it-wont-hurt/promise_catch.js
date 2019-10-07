var p = Promise.reject("have you tried turning it off and on again?");

p.catch((err) => console.log(err.message));