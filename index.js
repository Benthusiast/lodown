'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: function takes in any input and returns that value unchanged
 * 
 * @param {any value} function takes in any value
 * @returns {any value} function returns any value
 */

function identity(value){
    return value;
}
module.exports.identity = this.identity;

/**
 * typeOf: function takes in any input and returns the data type of that value as a string.
 * 
 * @param {any value} function takes in any value
 * @returns {a string} function returns a string
 */

function typeOf(value){ //takes in a value and returns the data type of the argument as a string
    if(typeof value === "object"){ //checking if value is an object
        if(value === null){
            return "null"; //if value is null returns the string "null"
        }else if(Array.isArray(value)){
            return "array"; //"if value is an array returns "array"
        }else{
            return typeof value; //should return 'object'
        } 
    }else{ //is typeof does not identify value as an object
        return typeof value; //returns the datatype of the value argument as a string
    }
}

/**
 * first: function takes in an array and a number and returns the first [input number] indexes of that array
 * 
 * @param {an array and a number} function takes in an array and a number
 * @returns {an array or a value} function returns an array containing the specified number of indexes from the front of the input array, or the zero index of the input array if no number of indexes was specified.
 */
function first(anArray, aNum){
    let retArray = [];
    //check if array argument is an array and if not return an empty array
    if(!Array.isArray(anArray)){
        return [];
    }
    // check if number argument is defined and is a number and if not return array index zero
    if(typeof aNum !== "number"){
        return anArray[0];
    }
    for(let i = 0; i < aNum && i < anArray.length; i ++){
        retArray.push(anArray[i]); //push n values from the input arrat to the output array
    }
    return retArray;
}

/**
 * last: function takes in an array and a number and returns the last [input number] indexes of that array as an array
 * 
 * @param {an array and a number} function takes in an array and a number representing the number of index to be returned.
 * @returns {an array or a value} function returns an array containing the specified number of indexes from the back of the input array, or the last index of the input array if no number of indexes was specified.
 */

 function last(anArray, aNum){
    //check if array argument is an array and if not return an empty array
    if(!Array.isArray(anArray)){
        return [];
    }
    // check if number argument is undefinded or is not a number and if not return he last index of the array.
    if(typeof aNum !== "number"){
        return anArray[anArray.length - 1];
    }
    if(aNum === 1){
        return anArray[anArray.length - 1];
    }
    let i = anArray.length - aNum;
        while(i > 0){
            anArray.shift(); //remove n values from the front of input arrat to the output array
            i--
    }
    return anArray;
}


/**
 * indexOf: function takes in an array and a value and returns the index at which the value is found in the array
 * or returns -1 if value was not found in the array
 * 
 * @param {an array and any value} function takes in an array and a value
 * @returns {a number} function returns the index of the array as a number
 */

 function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}

/**
 * contains: function takes in an array and a value and returns true if the value is found in the array
 * or returns false if value was not found in the array
 * 
 * @param {an array and any value} function takes in an array and a value
 * @returns {a boolean} function returns a boolean
 */

 contains = function(array, value){
    let retBool = false;
    let placeholder = 0;
    for(let i = 0; i < array.length; i++){
      (array[i] === value) ? retBool = true : placeholder += 0;
    }
    return retBool;
  }

/**
 * unique: function takes in an array and returns an array of the deduped values of the input array
 * 
 * @param {an array} function takes in an array
 * @returns {an array} function returns an array
 */

function unique(array){
    let retArr = [];
    for(let i = 0; i < array.length; i++){
        if(indexOf(retArr, array[i]) >= 0){
            continue;
        }else{
            retArr.push(array[i]);
        }
    }
    return retArr;
}

/**
 * filter: function takes in an array and a function then returns an array of values of the input array which passed the test function
 * 
 * @param {an array and a function} function takes in an array and a function
 * @returns {an array} function returns an array
 */
function filter(array,func){
    let retArr = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            retArr.push(array[i]);
        }
    }
    return retArr;
}


/**
 * reject: function takes in an array and a function then returns an array of values of the input array which failed the test function
 * 
 * @param {an array and a function} function takes in an array and a function
 * @returns {an array} function returns an array
 */

function reject(array, func){
    let retArr = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            retArr.push(array[i]);
        }
    }
    return retArr;
}

/**
 * partition: function takes in an array and a function then returns an array containing two arrays, one of values of the input array which failed the test function and one of values that passed
 * 
 * @param {an array and a function} function takes in an array and a function
 * @returns {an array} function returns an array
 */

function partition(array, func){
    let retArr = [];

    retArr.push(_.filter(array, func));
    retArr.push(_.reject(array, func));

    return retArr;
}

/**
 * map: function takes in a collection and a function then returns an array containing the values returned from the input function
 * 
 * @param {a collection and a function} function takes in a collection and a function
 * @returns {an array} function returns an array
 */

function map(collection, func){
    let retArray = [];
    // determine if collection is an array or another collection object
    if(Array.isArray(collection)){
        //iterate through collection
        for(var i = 0; i < collection.length; i++){       
            //push each manipulated value to the return array
            retArray.push(func(collection[i], i, collection));
        }
    }else{
        //iterate through collection
        for(var key in collection){
            //push each manipulated value to the return array
            retArray.push(func(collection[key], key, collection));
        }
    }
    return retArray; //return the array of resulting values
}

/**
 * pluck: function takes in an array of objects and a Key name and then returns an array of the values of that key from each object in the array
 * 
 * @param {a collection and a string} function takes in a collection and a string
 * @returns {an array} function returns an array
 */

function pluck(objArr, keyname){
    return map(objArr, function(obj){
        return obj[keyname];
    })
 }


/**
 * every: function takes in a collection and a function, passes each element of the collection to the function and returns true if all function calls returned true.
 * 
 * @param {a collection and a function} function takes in a collection and a function
 * @returns {a boolean} function returns a boolean
 */

function every(collection, func){
    //iffunc is not given
    if(!func){
        //determine if collection is array
        if(Array.isArray(collection)){
            //iterate over colletion with for loop
            for(let i = 0; i < collection.length; i++){
                //check falsey-ness of current index and return false if appropriate
                if(!collection[i]){
                    return false;
                }
            }
        //if collection is non-array    
        }else{
            for(var key in collection){
                if(!collection[key]){
                    return false;
                }
            }
        }
    //if func was given    
    }else{
        //if collection is an array
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false;
                }
            }
        //if collection is non-array    
        }else{
            for(var key in collection){
                if(!func(collection[key], key, collection)){
                    return false;
                }
            }
        }
    }
    return true;
}


/**
 * some: function takes in a collection and a function, passes each element of the collection to the function and returns true if any function calls returned true.
 * 
 * @param {a collection and a function} function takes in a collection and a function
 * @returns {a boolean} function returns a boolean
 */

function some(collection, func){
    //iffunc is not given
    if(!func){
        //determine if collection is array
        if(Array.isArray(collection)){
            //iterate over colletion with for loop
            for(let i = 0; i < collection.length; i++){
                //check falsey-ness of current index and return false if appropriate
                if(collection[i]){
                    return true;
                }
            }
        //if collection is non-array    
        }else{
            for(var key in collection){
                if(collection[key]){
                    return true;
                }
            }
        }
    //if func was given    
    }else{
        //if collection is an array
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection)){
                    return true;
                }
            }
        //if collection is non-array    
        }else{
            for(var key in collection){
                if(func(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }
    return false;
}

/**
 * reduce: function takes in an array and a function and a seed value, and returns a value that is accumulated via the input function
 * 
 * @param {an array} function takes in an array  
 * @param {a function}  function takes in a callback function to be used at each iteration of the reduction
 * @param {a value} function takes in a seed value to hold the accumulated changes made by the callback function
 * @returns {a value} function returns a value that is accumulated via the input function
 */

function reduce(array, func, seed){
    let arrSum;
    //if seed is given
    if(seed !== undefined){
        arrSum = seed; // assign the to be returned variable the initial value of seed
        for(let i = 0; i < array.length; i++){
            arrSum = func(arrSum, array[i], i, array);
        }
    //if seed is not given
    }else{
        arrSum = array[0]; // assign the to be returned variable the value of the first index of the array
        for(let i = 1; i < array.length; i++){
            arrSum = func(arrSum, array[i], i, array);
        }
    }
    return arrSum;
}

/**
 * extend: function takes in any number of objects, and returns the first object with all of the properties of the input objects
 * 
 * @param {objects} function takes in a target object to have properties copied into
 * @param { n objects }function takes in any number of objects from which the properties will be copied from
 * @returns {an object} function returns an object
 */

 function extend(object1, object2){
      
    for(let i = 0; i < arguments.length; i++){
        for(var key in arguments[i]){
            object1[key] = arguments[i][key];
        }
    }

    return object1;
}   