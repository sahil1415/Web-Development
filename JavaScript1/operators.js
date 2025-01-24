let a = 10; 
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(++a);
console.log(a++);
console.log(--b);
console.log(b--);
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);


console.log('5' == 5);   // Loose Equality -> only compares value
console.log('5' === 5);
console.log(5 === 5);  // Strict Equality  -> compares value aswell as type of data

let age = 21;
let ans = age > 18 ? 'I can vote' : 'I can not vote';
console.log(ans);

// Falsy
// undefined, null, 0 , false, ' ',  NaN
// Truthy
// Anything which is not flasy
// Logical operators with non Boolean
console.log('Hello' && false)
console.log(5 && 6)
console.log('Hello' && undefined)
console.log('Hello' || undefined)