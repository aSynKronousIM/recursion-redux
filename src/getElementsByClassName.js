// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // Get the class nameS. And checkit with our className
  //var classNames = element.classList;
  var nodes = [];

  function searchClass(node){
    var parts = node.className.split(' ');
    if (parts.indexOf(className) >= 0){
      nodes.push(node);
    }
    // Iterate over children
    for(var i = 0; i < node.children.length; i++){
      searchClass(node.children[i]);
    }
  }
  
  searchClass(document.body);
  // iterate through each node

  // If it matches push it to array. Then return.
  return nodes;
};
