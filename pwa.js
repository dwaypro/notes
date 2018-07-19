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


//you can 'circumvent' cors with the option  mode: 'no-cors',
//there are some cases where this 'empty' response will still be usefull
// if you want to cache an image from a server that doesn't give you access
// to the file directly. Some elements are able to access like image tags
// if the response body was an image



//FETCH vs AJAX

//whats the difference?
    //ajax version:
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.responseType = 'json';
xhr.onload = function(){
  console.log('AJAX version', xhr.response);
}
xhr.onerror = function(){
  console.log('error!');
}
xhr.send();

//1.) this is more code compared to the one line version from Fetch
//just to get the data
//2.) Service workers have to use FETCH because AJAX is synchronous code


// allows you to 'pause' the javascript cycle until a promise has finished
event.waitUntil(promise)


//CORS MAY THROW AN ERROR 

cache.addAll(['/', '/index.html',
      '/src/js/app.js', 
      '/src/js/feed.js', 
      '/src/js/promise.js',
       '/src/js/fetch.js', 
       '/src/js/material.min.js', 
       '/src/css/app.css', 
       '/src/css/feed.css',
       '/src/images/main-image.jpg',
       'https://fonts.googleapis.com/css?family=Roboto:400,700',
       'https://fonts.googleapis.com/icon?family=Material+Icons',
       'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
       ])


  // index.html/app.js may create a fetch event, which we may want to store.
  //  
  
  
  //DYNAMIC CACHING(sometimes resources send their own fetch events that we may be interested in)
       // set an event listener for fetch, respond With the matching cache, above
       // if there isn't a match handle the fetch event anyways
       // store into cache by updating with put 
       // problem with this approach is that we are storing into cache pretty much any fetch
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response){
          if(response){
            return response;
          } else{
            return fetch(event.request)
              .then(function(res){
                return caches.open('dynamic')
                  .then(function(cache){
                    cache.put(event.request.url, res.clone())
                    return res;
                  });
              });
          }
        })
    );
  });

  

//images css javascript and html are what the cache storage is really for 
// NOT JSON DATA
//Local Storage might be an ok candidate for Storage

//changing the cache name is a way to update the service worker when
// relevant javascript files change. 
// however we still need to handle the multiple caches stored
caches.open('static-v3.0.4')

//CLEAN UP OLD CACHE
// in the activate event
// **Promise.all(); takes an array of promises and waits till they
// all finish
// You can convert an array of keys to an array of promises using
// javascript map operator.
//return caches.delete(key);
// caches returns a promise ;) in place of the string we originally passed


