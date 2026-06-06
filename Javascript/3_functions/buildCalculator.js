// Calculate the sum of two numbers
function calculateSum(num1, num2) {
    return num1 + num2;
  }
  
  console.log(calculateSum(2, 5));
  console.log(calculateSum(10, 10));
  console.log(calculateSum(5, 5));
  
  // Calculate the difference of two numbers
  function calculateDifference(num1, num2) {
    return num1 - num2;
  }
  
  console.log(calculateDifference(22, 5));
  console.log(calculateDifference(12, 1));
  console.log(calculateDifference(17, 9));
  
  // Calculate the product of two numbers
  function calculateProduct(num1, num2) {
    return num1 * num2;
  }
  
  console.log(calculateProduct(13, 5));
  
  // Calculate the quotient of two numbers
  function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;
  }
  
  console.log(calculateQuotient(7, 11));
  console.log(calculateQuotient(3, 0));
  

  // Calculate the square of a number
  function calculateSquare(num) {
    return Math.pow(num, 2); //or num ** 2
  }
  
  console.log(calculateSquare(2));
  console.log(calculateSquare(9));
  
// Calculate the square root of a number
  function calculateSquareRoot(num) {
    return Math.sqrt(num);
  }
  
  console.log(calculateSquareRoot(25));
  console.log(calculateSquareRoot(100));