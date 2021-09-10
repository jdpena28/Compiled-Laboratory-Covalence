//Array Destructuring with REST Parameters
function sayHello(name, city) {
    console.log(`Hello ${name}, welcome to ${city}!`);
}
/* the first arguments takes the 'Birmingham' using ... notation we saying
that take the REST of the elements */
function greet(city, ...otherNames) {
    // otherNames is an array
    for (let i = 0; i < otherNames.length; i++) {
        sayHello(otherNames[i], city);
    }
}
/* here we can see that we only take one paramater and concluding that this
is an array we see that the first item will be going to 'city' */
greet('Birmingham', 'Jane', 'James', 'John', 'Joaquin', 'Jasmine');

console.log('-------------------------')

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
 const [,,...arr] = list // in this ex. of destructuring we say that 
  return arr // ',' is the items inside the arr so we remove two of them which 
            // inside the list / source and return the arr
}
const arr = removeFirstTwo(source);
console.log(arr)

console.log('-------------------------')
//Destructuring for objects in JS
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
// we going to tell inside the parameter which keys we are going to get
// in the object stats
const half = ({max,min}) => (max + min) / 2.0;
console.log(half(stats))

console.log('-------------------------')
//Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
    for(let a = 0 ; a<result.failure.length;a++) {
                        //here using template literals ${} to get a expression or function also can do
        failureItems[a] = `<li class="text-warning">${result.failure[a]}</li>`
    }
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);