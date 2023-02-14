// callback function means we run everything in the main function, once that is completed, then run the callback. 
// event listeners are callback functions, we listen for the event, say a click, then do the callback function.

// THE MAIN LESSON OF THIS FILE -
// async functions are important because they allow a function that takes time to operate while allowing the next tasks
// of the code to continue. you would want a callback in a database query because to make it synchronous would mean
// to not do anything else until that query was complete. this would be especially bad to not have multiple callbacks
// if you had multiple users, in a synchronous code situation, all users would have to wait for one user's database call
// to complete before having their requests complete. obviously, we would want callbacks to allow for asynchronous modes
// so multiple clients can be served. below gives a nested callback that takes time to read and write two files and 
// illustrates how the time to take to write the file is longer than having the code simply continue running. 
// async await allows us to offload a task that takes time and let it run in the background as another task
// a promise is to allow an asynchronous method to run by supplying a value in the future. a promise is either
//pending - not fufilled or rejected, fulfilled - operation completed successfully, or rejected - failed with error.
// a promise or a callback are not blocking the main program pross for things (usually IO related) that take time

const {readFile, writeFile} = require('fs')
console.log('start')

// below will give you the buffer of the file
readFile('./content/first.txt', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)


// specifying the encoding with utf8 will give a readable result.
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;

    // callback function nesting hell:

readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const second = result;

// async functions need the callback, in this case (err, result) to work
writeFile('./content/result-async.txt', `Here is the result: ${first}. ${second}`, (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    console.log(result)
})
})
})
console.log('done with the callback task')
})

console.log('starting next task')
