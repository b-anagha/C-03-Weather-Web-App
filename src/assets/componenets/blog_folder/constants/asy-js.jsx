export const asy_js_text = {
    para1 : "Asynchronous JavaScript is a programming paradigm that allows JavaScript code to execute non-blocking operations and handle tasks in an asynchronous manner. In traditional synchronous programming, code executes line by line, and each operation blocks the execution until it completes. Asynchronous programming enables better performance and responsiveness by allowing tasks to run in the background while the code continues to execute.",
    para2 : "Here are the basics of Asynchronous JavaScript:",
  
    CallBacks : { 
            description : "Callbacks are a common way to handle asynchronous operations in JavaScript. A callback is a function passed as an argument to another function. When an asynchronous operation completes, it calls the callback function to signal that the operation is done. Callbacks allow code execution to continue without waiting for the completion of the asynchronous task."
        },

    Promises : {
        description : "Promises provide a more structured and elegant way to handle asynchronous operations in JavaScript. A Promise represents the eventual completion (or failure) of an asynchronous operation and allows chaining operations together. Promises have three states: pending, fulfilled, or rejected. They provide methods like then() and catch() "
    },
    Async_fn : { //Asynchronous functions
        description : "Async functions and the await keyword are modern additions to JavaScript that make asynchronous programming even more intuitive. Async functions are declared with the async keyword, and they implicitly return a Promise. The await keyword can be used within an async function to pause the execution until a Promise is fulfilled, allowing code to look more synchronous while performing asynchronous operations."
    },
    Event_Loop : {
        description : "The JavaScript event loop is the mechanism behind asynchronous execution. It continuously monitors the call stack and the task queue. When the call stack is empty, it takes tasks from the task queue and pushes them onto the call stack for execution. Asynchronous tasks, such as timers, network requests, and event handlers, are placed in the task queue, allowing the event loop to handle them asynchronously."
    },
    Handling : { //Handling asynchronous tasks
        description : "Asynchronous JavaScript is commonly used for tasks like making HTTP requests, reading/writing files, performing database operations, or executing time-consuming computations. By using asynchronous techniques, such tasks can be performed in the background while allowing the main thread to remain responsive and handle other operations."
    },
    para3 : "Asynchronous JavaScript is essential for building responsive and efficient web applications. It enables handling time-consuming tasks without blocking the main execution thread, ensuring a smooth user experience and better performance."

}