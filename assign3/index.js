

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function reverse(str) {
    return str.split("").reverse().join("");
}
 function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
}
function removeDuplicates(str) {
    return [...new Set(str)].join("");
}
 function removeNo(str) {
    return str.replace(/[0123456789]/g, "");
}
function odd(num) {
    if (num % 2 === 0) {
      return "The number is even";
    }
    
  }
  
function even(num) {
    if (num % 2 !== 0) {
      return "The number is odd";
    }
    
  }
   module.export{
    add,
    subtract,
    multiply,
    divide,
    reverse,
    isPalindrome,
    removeDuplicates,
    removeNo,
    odd,
    even
   }












