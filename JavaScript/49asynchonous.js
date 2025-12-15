// synchronous = Executes line by line consecutively in a squential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently withou waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                 Handled with: Callbacks, promises, Async/Await

console.log(`One`);
setTimeout(() => console.log(`Two`), 3000);
console.log(`Three`);