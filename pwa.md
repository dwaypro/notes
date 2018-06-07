



Asyncronous Code


1- Javascript is single threaded



How do we handle async code?

We can use callbacks.
We can use promises

var promise = new Promise(function(resolve, reject) {
    resolve('this is a simple promise example')
});

promise.then(function(text){
    console.log('executed promise ==>', text)
});
