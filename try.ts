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

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => {
    const {max,a,b,c,min}=stats
    max + min / 2.0; 
    }
// Only change code above this line

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    return profileData
  }

