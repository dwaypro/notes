  //fetch is triggered whenever the browser or page related javascript initiates an http request
  //When browser tries to initiate a Fetch request
  //whenever you load a css file because you imported it triggers fetch
  //whenever you use the fetch api it triggers fetch 

  //you dont trigger a fetch request when you trigger a normal http request like Ajax

  //you have ways of manipulating these requests. 
  
  //push notifications are sent from another server
  //you can send push notifications from your own server
  //you can listen to a push event.
  //you can listen to the user interacting with the notification

  //Background Syncronization. If you don't have good internet connection
  //and you send a post. which will fail if connection is bad. 
  //you store an action, and then you execute it when connection has been
  //established
  
  //service worker lifecycle events

  //service worker lifecycle:

  //1. Register the service worker as a background process
  //2. Browser installs service worker
  //3. Install is an event that we can hook into... Initial cacheing
  //4. Activation event occurs as soon as it can. Controlls all pages of a given scope


  //service worker will reinstall if the file changes at all. 

  //5. Idle mode if no events are comming in. Will terminate after a while(sleeping).
 
  // serviceworker is available in generally all browsers.

  //the scope by default is within the folder it lives in.
  //add it to root that is served by web server.



// Asynchronous Code


// 1- Javascript is single threaded



// How do we handle async code?

// We can use callbacks.
// We can use promises

var promise = new Promise(function(resolve, reject) {
    resolve('this is a simple promise example')
});

promise.then(function(text){
    console.log('executed promise ==>', text)
});



// Promises in PWAs

// When we register a service worker ==>

navigator.serviceWorker
    .register('/path')
    .then(function(){
        console.log('registered!')
    })



// When we add an event listener to a service worker:   

//FETCH

//httpbin.org
    //Rest endpoints that you can send requests to. 
    //Google Chrome supports fetch() which returns a fetch
    //it's an asynchronous operation
fetch('https://httpbin.org/ip')
  .then(function(response){
    console.log('response from fetch', response);
    return response.json();
  }).then(function(json){
      console.log('json ==>', json);
  });




fetch('https://httpbin.org/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({message: 'Does this work?'})
})
  .then(function(response){
    console.log('response from fetch', response);
    return response.json();
  }).then(function(json){
    console.log('json ==>', json);
});


//you can circumvent cors with the option  mode: 'no-cors',
//there are some cases where this 'empty' response will still be usefull
// if you want to cache an image from a server that doesn't give you access
// to the file directly. Some elements are able to access like image tags
// if the response body was an image
    
