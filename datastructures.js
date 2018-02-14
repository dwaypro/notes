//Linked Lists

var LinkedLists = {
  "attributes":  ["head","head pointer","node", "size"],
  "advantages": ["dynamic size", "Efficient Insertions and Deletions", "No waste of memory"],
  "disadvantages": ["no random access", "sequential access is slow"]

}

function LinkedList(){
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.nest = null;
  }

  this.size = function(){
    return length;
  };
  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head===null){
      head = node;
    }else {
      currentNode = head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length --;
  };

  this.isEmpty = function(){
    return length ===0;
  };
  this.indexOf = function(element){
    var currentNode = head;
    var index = -1;

    while(currentNoe){
      index++;
      if(currentNode.element === element){
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };
  this.elementAt = function(index){
    var currentNode = head;
    var count = 0;
    while (count < index){
      count ++;
      currentNode = currentNode.next
    }
    return currentNode.element
  }
  this.addAt = function(index,element){}
  this.removeAt = function(index){}
  
}

var conga = new LinkedList();

conga.add('kitten');
conga.add('puppy');
conga.add('zomby');



var stack = {
  "attributes": ["first in last out", "could use an array as a stack"]
}

//functions: push, pop, peek, length

//stack === var letters = [];

var letters = [];

var word = "racecar";
var rword = "";

for(var i = 0 ; i < word.length; i++){
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i ++){
  rword += letters.pop();
}

if (rword === word){
  console.log(word + " is a palindrom.");
}
else {
  console.log(word +" is not a palindrome.");
}


//implementing a javascript stacka s a class

var Stack = function(){
  this.count = 0;
  this.storage = {};

  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  this.pop = function(){
    if(this.count ===0){
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;

  }
  this.size = function(){
    return this.count;
  }

  this.peek = function(value){
    return this.storage[this.count-1];
  }

}

//Que

var queue = {
  "attributes": ["first in first out ", "like standing in line at the grocery", "you can also implement with an array"]
}


function Queue {
  collection = [];
  this.print = function(){
    console.log(collection);
  };
  this.enqueue = function(element){
    collection.push(element);
  };
  this.dequeue = function(){
    return collection.shift();
  };
  this.front = function(){
    return collection[0];
  };
  this.size = function(){
    return collection.length;
  };
  this.isEmpty = function(){
    return (collection.length===0);
  };
}


// set
var set = {
 "attributes": ["like an array but without duplicate items","typical use is to check for the presence of an item", "es6 has a built in set object", "however, the es6 object does not have all of the methods build int"]
}

function mySet(){
  var collection = [];
  this.has = function(element){
    return (collection.indexOf(element) !== -1)
  };
  this.values = function (){
    return collection;
  };
  this.add = function(element){
    if(!this.has(element)){
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function(element){
    if(this.has(element)){
      index = collection .indexOf(element);
      collection.splice(index,1);
      return true;
    }
    return false;
  };

  //size is a property not a method in es6
  this.size = function(){
    return collection.length;
  };

  // methods not available in es6 but often included in sets
  this.union = function(otherSet){
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e){
      unionSet.add(e);
    });
    secondSet.forEach(function(e){
      unionSet.add(e);
    });
    this.intersection = function(otherSet){
      var intersectionSet = new mySet();
      var firstSet = this.values();
      firstSet.forEach(function(e){
        if(otherSet.has(e)){
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    };
    this.diference = function(otherSet){
      var differenceSet = new mySet();
      var firstSet = this.values();
      firstSet.forEach(function(e){
        if(!otherSet.has(e)){
          differenceSet.add(e);
        }
      });
      return differenceSet;
    };

  };

  this.subset = function(otherSet){
    var firstSet = this.values();
    return firstSet.every(function(value){
      return otherSet.has(value);
    });
  }
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setA.add("b");
setA.add("b");
setA.add("a");
setA.add("a");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new mySet();
var setD = new mySet();
setA.add("a");
setA.add("b");
setA.add("b");
setA.add("a");
setA.add("a");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
//should return false
console.log(setD.add("d"));
//es6 will not return true or false it will log the set itself
//[object Set] {}


// maps are datastructures that store key value pairs. in JavaScript Objects are Maps.

let myMap = function(){
  this.collection = [];
  this.count = 0;
  this.size = function(){
    return this.count;
  };
  this.set = function(key,value){
    this.collection[key] = value;
    this.count++;
  };
  this.has=function(key){
    return (key in this.collection);
  };
  this.get = function(key){
    return (key in this.collection) ? this.collection[key] : null;
  }
  this.delete = function(key){
    if(key in this.collection){
      delete this.collection[key];
      this.count --;
    }

  };

  this.values = function(){
    let result = new Array();
    for (let key of Object.keys(this.collection)){
      result.push(this.collection[key]);
    };
    return (result.length > 0) ? result : null;
  };

  this.clear = function(){
    this.collection = {};
    this.count = 0;

  };
};

let myMap = new myMap();
map.set('arms',2);
map.set('fingers',10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());




// hashtables are a common way of implementing the map data structur big O(1)
// takes a key input and runs through a hash function, usually correspond to indexes in an array
// collisions involve keys that turn into the same index of an array
// js already built in heres how they may be implemented:


//simple hash function:

var hash = (string, max) => {
  var hash = 0;
  for (var i = 0 ; i < string.length; i++){
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

// normal hash function

let HashTable = function(){
  let storage = [];
  const storageLimit = 4;

  this.print = function(){
    console.log(storage);
  }

  this.add = function(key,value){
    var index = hash(key, storageLimit);
    if (storage[index] ===undefined){
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i =0; i < storage[index].length; i++){
        if (storage[index][i][0] === key){
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value])
      }
    }
  };

  this.remove = function(key){}
  this.lookup = function(key){}


};


