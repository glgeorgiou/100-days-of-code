/**
* ========= JS Library consists of pieces of useful code ==========
*/

/**
* Reverse A string
* @Param: A string
* Return: A reversed string
*/
function reverseString(str) {
   return str.split('').reverse().join('');
}



/**
* Returns the factorial (N!) of a given number
* @Param: A number
* Return: the factorial of a number
*/
function factorialize(num) {
  if (typeof num != "number") {return "This is not a number";}
  if (num==0) {return 1;}
  
  return Math.round(num) * factorialize(Math.round(num)-1);
}



/**
* Find the longest words' length and returns the word and its length
* @Param: A string
* Return: An array with the word and its number
*/
function findLongestWord(str) {
    var arr=[], returnedArr=[], longStr = 0, longWord='';

    arr=str.split(' ');
    for(var i=0; i<arr.length; i++) {
      if (arr[i].length > longStr) {
		  longStr = arr[i].length;
		  longWord = arr[i];
		  }
    }

  returnedArr[0] = longWord;
  returnedArr[1] = longStr;
  return returnedArr
}



/**
* Return a string in lower case letter in witch the first letter in each word is capitalized
* @Param: A string
* Return: A string
*/
function titleCase(str) {
  
  var arr=str.toLowerCase().split(' ');
  
  for(var i=0; i<arr.length; i++) {
       arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1);
    }
  return arr.join(' ');
}



/**
* Return an array consisting of the largest number from each provided sub-array
* @Param: An array of numbers
* @Return: An array of maximum numbers
*/
function largestArrElement(arr) {
  var larr = [];
  
  for (var i=0; i<arr.length; i++) { 
    larr[i]=arr[i].reduce(function(a, b) {
    return Math.max(a, b);
   });
  }
  return larr;
}



/*  
* Check if a string (first argument = str) ends with the given target string (second argument = target).
* @Param: str, target
* @Return: True or False 
*/
function confirmEnding(str, target) {
  var slen = str.length;
  var tlen = target.length;
  
  str = str.substr(slen-tlen,tlen);
  if (str==target) {
      return true;
  } else {
    return false;
  } 
}



/**
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
 * @param: a string, a number
 * @returns: a repeated string or an empty string in case of negative number parameter
 */
function repeatStringNumTimes(str, num) {
  var temp = '';  
  // Check if number is negative
    if (num<0) {
        str='';
        return str;
      }
      
      temp=str;//hold the string parameter
      str=''; //clear the original string;
    
  //Repeat string
   for (i=1; i<=num; i++) {
        str+=temp;
   }
  return str;
}



/*
* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
* @param: a string, a number indicating the length of the string
* @returns: The truncated string
*/
function truncateString(str, num) {
  var mystr;
  if (str.length > num && num > 3) {
    mystr =  str.slice(0, (num-3))+"...";
  } else if (str.length > num && num <=3) {
    mystr = str.slice(0, num)+"...";
  } else {
    mystr =  str;
  }
  return mystr;
}


/*
* Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
* @param: an array and a number that is array's length
* @return: a splited array
*/
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for(i=0; i<arr.length; i+=size) {
    newArray.push(arr.slice(i, i+size));
  }
  return newArray;
}
