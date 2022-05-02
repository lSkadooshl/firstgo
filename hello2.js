function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
let product1 = multiply(4, 7); // 28  
let product2 = multiply(2, 3); // 6

console.log(product1);
console.log(product2);

// the function is brand new each time ... the "return value" is stored in the variable
// what you are saying is that product1 "is equal to" the return value of the multiply function

// in fact you can just not use a variable and pass it to console.log directly:

console.log(multiply(3, 4));
console.log(multiply(2, 5));

// you can also "reassign" a variable that you used previously

console.log(product1); // prints 28
product1 = multiply(2, 2);
console.log(product1); // prints 4


