// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {


  if(Array.isArray(obj)){
    var resultArray = [];
    for(var i = 0, length = obj.length; i < length; i ++){
      resultArray.push(stringifyJSON(obj[i]));
    }
    return '['+ resultArray.join(',') +']'; 
  }
  
  if(obj === null) {
    return ''+null;
  }

  if (typeof obj === 'object') {
    var resultArray = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      resultArray.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return "{" + resultArray.join(',') + "}";
  }






  if(typeof obj === 'number'){
    return ''+ obj;
  }

  if(typeof obj === 'boolean'){
    if(obj){
      return ''+ true;
    } else {
      return '' + false;
    }
  }


  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
};
