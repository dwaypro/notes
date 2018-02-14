Linked Lists

var LinkedLists = {
  "attributes":  ["head","head pointer","node", "size"],
  "advantages": ["dynamic size", "Efficient Insertions and Deletions", "No waste of memory"]
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
}