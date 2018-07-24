//Javascript is always synchronous and single-threaded

//There is a lot of confusion circling around this idea

//because JavaScript is synchronous there are various callback mechanisms in place
//that help it perform asynchronous operations.

// ways to conduct asynchronous operations:

// most apps run a main javascript file that executes on the UI thread on the browser.
// if for example you create a massive loop on main.js for example. The user and other Javascript 
// will not be able to click or perform any other action until that loop has finished
// This is a symptom of JavaScript being synchronous.

// you can do things like AJAX which stands for Asynchronous Javascript And XML

// you can create a WebWorker

//which is  a seperate JavaScript file that can be called on the
// UI Thread

// the Worker can receive messages from the UI. perform several, operations on
// the data that it receives and can send back to the UI, once it finishes, a modified
// data set

//functions defined on the webworker outside of the message event are not 
// available to the UI.
// same goes for the web worker. these functions are not available. 




