//0.1
// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);
// Promise.all([promiseA, promiseB])
//     .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//     .catch(error => console.log(error));

//1 micro-tasks
console.log("A");

setTimeout(() => {
    console.log("B");

}, 0);

Promise.resolve()
    .then(() => { console.log("C") })
    .then(() => { console.log("D") })
    .then(() => { console.log("E") })
console.log("F"); //macro-task

// //2
// const delayPromise2 = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promise12 = delayPromise2("1", 1000);
// const promise22 = delayPromise2("2", 1000);

// Promise.race([promise12, promise22])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));

//3


//4
// const raceTimeout = ((promised, delay) => {
//     return new Promise(resolve, reject => {

// if (Promise.delay) {
//             setTimeout(() => resolve(promised), delay);
// } else {
//             setTimeout(() => reject(promised), delay);
// }

//     });
// });


// const promise1 = raceTimeout("1", 1000)
// const promise2 = raceTimeout("2", 100);

// Promise.race([promise1, promise2])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));

//4.1
// const promised = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Fail");
//     }, 2000);
// });

// const promised2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("resolveed");
//     }, 1000);
// });

// function raseTimeot(promised, promised2) {
//     const timer = setTimeout(() => {
//         // resolve("ok");
//         reject(new Error("Failed"))
//     }, 6000);
//     promised
//       .then(value => {
//         clearTimeout(timer);
//         resolve(value);
//       })
//       .catch(error => {
//         clearTimeout(timer);
//         reject(error);
//       });
//     return Promise.race([promised, timer])
// }

// raseTimeot(promised)
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject));

//fixed by ChatGPT
// function raseTimeot(promise, timeout = 2000) {
//   return new Promise((resolve, reject) => {
//     // Create a timeout promise
//     const timer = setTimeout(() => {
//       reject(new Error("Timeout"));
//     }, timeout);

//     promise
//       .then(value => {
//         clearTimeout(timer); // clear the timeout if promise resolves
//         resolve(value);
//       })
//       .catch(error => {
//         clearTimeout(timer); // clear the timeout if promise rejects
//         reject(error);
//       });
//   });
// }

// // Example usage
// const promised = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Fail");
//   }, 1000);
// });

// raseTimeot(promised)
//   .then(value => console.log("Resolved:", value))
//   .catch(error => console.log("Rejected:", error));

//vova's code 
//   function raceTimeout(promise, timeout) {
//   return new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//       reject(new Error('time finished!'))
//     }, timeout)

//     promise.then((result) => {
//       clearTimeout(timer)
//       resolve(result)
//     }).catch((error) => {
//       clearTimeout(timer)
//       reject((error))
//     })
//   })
// }

// const fastPromise = new Promise((resolve) => {
//   setTimeout(() => resolve("good job!"), 1000)
// })

// raceTimeout(fastPromise, 700)
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error))


const rejectWithError = (text) => {
    return new Promise(reject => {
        setTimeout(() => reject(text));
    })
}

const prom = rejectWithError("ERROR! You did something wrong");

prom
    .then(value => console.log(value))
