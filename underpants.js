// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

/* 
FUNCTIONAL LIBRARY 
// a list of functions that a developer made, published for other devs to use (ex: mocha or chai)
// this project is to recreate another varsion of the "underscore library"
how to make one? first, create an object, then add methods to the object 
*/

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}

I: Any value
O: Returns the value as is
*/

_.identity = function(value){
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

/*
I: Any value
O: Return a string that says type of <value>
*/
_.typeOf = function(value){
    if (typeof value === 'string'){
    return 'string';
  } else if (typeof value === 'number'){
    return 'number';
  } else if (typeof value === 'undefined'){
    return 'undefined';
  } else if (typeof value === 'boolean'){
    return 'boolean';
  } else if (value === null){
    return 'null';
  } else if (typeof value === 'function'){
    return 'function';
  } else if (value instanceof Date){
    return 'date';
  } else if (Array.isArray(value)){
    return 'array';
  } else if (typeof value === 'object'){
    return 'object';
  }
}

//--------------------------------------------------------------------------------------------------------
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

/*
I: An array and a number
O: An empty array if <array> not an array
   The first element of <array> if <number> is not a number/ missing
   The first number that it finds inside <array>
C: n/a
E: What is number is negative? or if number is greater than array length?
*/
_.first = function(array, number){
    // check if array is an array - if NOT array or if number negative, return []
    if (!Array.isArray(array) || number <= 0){
      return [];
        // check if number is a number or missing
    } else if (!number || typeof number !== 'number'){
      return array[0];
        // if the number is bigger than the array length, return whole array
    } else if (number > array.length){
      return array;
      // edge cases are done - now ELSE return an array with <number> of items
      // slice method to return from start until the number
    } else { 
      return array.slice(0, number);
    }
}
//console.log(_.first(["a", "b", "c"], 2)); //test works!

//--------------------------------------------------------------------------------------------------------
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
  // if NOT array or if number negative, return []
  if (!Array.isArray(array) || number < 0){
    return [];
    // if number is a number or missing, return last element
  } else if (!number || typeof number !== 'number'){
    return array[array.length - 1];
    // if the number is bigger than the array length, return whole array
  } else if (number > array.length){
    return array;
    // edge cases are done - now ELSE return an array with <number> of items
    // slice method to return from start until the number
  } else { 
    return array.slice(number - 1, array.length);
  }
}
//console.log(_.last(["a", "b", "c"], 2)); //works!

//--------------------------------------------------------------------------------------------------------
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1

I: An array and a value
O: The index of array where first occurance of <value> is
C: n/a
E: If <value> not in array, return -1
*/
_.indexOf = function(array, value){
  // if value not in array return -1
  if (!array.includes(value)){
    return -1;
  // else, value is in array
  } else {
    // for loop to go over the array
    for (let i = 0; i < array.length; i++){
      //return first instance of index when value found
      if (array[i] === value){
        return i;
      }
    }
  }
};

//--------------------------------------------------------------------------------------------------------
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true

I: An array and a value
O: true if <array> contains <value>
C: use ternary operator
E: if no value is given, ___
*/
_.contains = function(array, value){
  // ternary operator, if array includes value, return true, if not return false
  return array.includes(value) ? true : false;
};


//--------------------------------------------------------------------------------------------------------
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console

I: An array or an object + a function
O: Outcome of running the elements of the collection into the function (one by one) 
*/
_.each = function(collection, func){
  // pt 1 check if collection an array
  if (Array.isArray(collection)){
    //for loop for array
    for (let i = 0; i < collection.length; i++){
      // run + log each through func
      console.log(func(collection[i], i, collection));
    }
    // pt 2 if collection an object
  } else {
    // for in loop for object
    for (let key in collection){
      // run + log each through func
      console.log(func(collection[key], key, collection));
    }
  }
};

//--------------------------------------------------------------------------------------------------------
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]

I: an array
O: a new array with all duplicates removed
C: use indexOf I created above
E: n/a
*/
// _.unique = function(array){
//   // holder array
//   const uniqueArr = [];
//   // for loop going through array
//   for (let i = 0; i < array.length; i++){
//     // if NOT in unique array
//     if (!uniqueArr.includes(array[i])){
//       uniqueArr.push(array[i]);
//     }
//   }
//   return uniqueArr;
// };

_.unique = function(array){
  // unique array holder
  const uniqueArr = [];
  // for loop to go over array
  for (let i = 0; i < array.length; i++){
    // make a variable for indexOf 
    // the index of the first instance of something
    let uniqueI = _.indexOf(array, array[i]);
    // if current i IS the first instance of something, push it
    if (i === uniqueI){
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
};


//--------------------------------------------------------------------------------------------------------
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
/*
I: Function takes in an arry and a function
O: A new array of elements, for which calling input function was true
C: N/A
E: If input function does not return true or false... ???
*/

_.filter = function(array, func){
    // create holder array 
    const output = [];
    // for loop over array
    for (let i = 0; i < array.length; i++){
        // pass each element into func, determine if each returns true
        // pass in every element - (array[i], i, array) - to provide func with all data jic
        if (func(array[i], i, array)){
            //if truthy, push into array
            output.push(array[i]);
        }
    }
    // return holder array
    return output;

};

console.log(_.filter([1, 2, 3, 4, 5], function(num){
    if (num % 2 === 0){
        return 1;
    } else {
        return 0;
    }
})); 
// should return [2, 4]

console.log(_.filter([1, 2, 3, 4, 5], function(x){return x%2 === 0})); 
// should return [2, 4]

console.log(_.filter(['alex', 'francis', 'aaron'], function(str){
    return str[0] === 'a'
})); 
// should return ['alex', 'aaron']

//--------------------------------------------------------------------------------------------------------
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]

I: An array and a function
O: An array of false values (from running each through the function)
*/
_.reject = function(array, func){
  // output array
  const output = [];
  // for loop array
  for (let i = 0; i < array.length; i++){
    // run through function and if not (false)
    if (!func(array[i], i, array)){
      output.push(array[i])
    }
  }
  return output;
};

//--------------------------------------------------------------------------------------------------------

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
I: An array and a function
O: An array with two sub arrays
   sub array 1 has all truthy results
   sub array 2 has all falsy results
*/
_.partition = function(array, func){
  // make a holder for everything and truthy/ falsy arrays
  const wholeArr = [];
  const truthyArr = [];
  const falsyArr = [];
  // for loop array
  for (let i = 0; i < array.length; i++){
    // pass everything from array into func
    //if true push to truthy
    if (func(array[i], i, array)){
      truthyArr.push(array[i]);
      // else it will be falsy, push to falsy
    } else {
      falsyArr.push(array[i]);
    }
  }
  //first index of wholeArr is truthy, second index is falsy
  wholeArr[0] = truthyArr;
  wholeArr[1] = falsyArr;
  return wholeArr;  
};

//--------------------------------------------------------------------------------------------------------
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

/*
I: A collection - array or object, and a callback function
O: A new array containing results of invoking callback on each item
C: n/a
E: Make sure it works for objects not just arrays
*/

_.map = function(collection, func){
    //output array
    const output = [];
    // determine whether collection is array
    if (Array.isArray(collection)){
        // for loop for each item
        for (let i = 0; i < collection.length; i++){
            // pass into func and push into output
            output.push(func(collection[i], i, collection));
        }
    } else { // if not array, assume collection is object
        // for in loop for each thing
        for (let key in collection){
            // pass into func and push into output
            output.push(func(collection[key], key, collection));
        }
    }
    //return output array
    return output;
};

console.log(_.map([1, 2, 3, 4], function(e){return e * 2})); 
// should return [2, 4, 6, 8]
console.log(_.map({ a: 1, b: 2 }, function(e){ return e * 2})); 
// should return [2, 4]

//--------------------------------------------------------------------------------------------------------
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//--------------------------------------------------------------------------------------------------------

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
  
  // pt. 1 : determine if collection is an array
  if (Array.isArray(collection)){
    // pt. 1A : func is NOT a function -> evaluate collection for truthy or falsy
    if (!func || typeof func !== "function"){
      // evaluate everything in collection for truthy or falsy
      for (let i = 0; i < collection.length; i++){
        if (!collection[i]){
          return false;
        } 
      }
      return true;
    //pt. 1B : func IS a function -> pass everything in collection into func
    //         pass these into function (current element, index, collection)
    } else {
      for (let i = 0; i < collection.length; i++){
        // if anything in collection is false, return false - else true
        if (!func(collection[i], i, collection)){
          return false;
        }
      }
      return true;
    }
  }

  // pt. 2 determine in collection is an object
  else {
    // pt. 2A : func is NOT a function - > evaluate object for truthy or falsy
    if (!func || typeof func !== "function"){
      for (let key in collection){
        if(!collection[key]){
          return false;
        }
      }
      return true;
    // pt. 2B : func IS a function -> pass elements in OBJECT into callback func, if one is false return false
    //          pass these into function (current value, current key, collection)
    } else {
      for (let key in collection){
        if (!func(collection[key], key, collection)){
          return false;
        }
      }
      return true;
    }
  }

};  

//--------------------------------------------------------------------------------------------------------

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
  // pt 1 array
  if (Array.isArray(collection)){
    //pt 1 A : if func is NOT a function
    if (!func || typeof func !== "function"){
      //for loop go through array and if ANY truthy true, else false
      for (let i = 0; i < collection.length; i++){
        if(collection[i]){
          return true;
        }
      }
      return false; // if NONE are truthy, return false
    } else {
      //pt 1 B: pass everything into function
      for (let i = 0; i < collection.length; i++){
        if(func(collection[i], i, collection)){
          return true;
        }
      }
      return false; // if NONE are truthy return false
    }
  //pt 2 object
  } else {
    // pt 2 A : if func NOT a function
    if (!func || typeof func !== "function"){
      // for in loop go through object and if ANY are truthy true, else false
      for (let key in collection){
        if (collection[key]){
          return true;
        }
      }
      return false; // if NONE are truthy, return false
    //pt 2 B: if func IS a function, pass (key, value, object) into the function 
    } else {
      for (let key in collection){
        if (func(collection[key], key, collection)){
          return true;
        }
      }
      return false;
    }
  } 
};


//--------------------------------------------------------------------------------------------------------
// reduce has video tutorials!!! in shared google doc
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//--------------------------------------------------------------------------------------------------------
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}