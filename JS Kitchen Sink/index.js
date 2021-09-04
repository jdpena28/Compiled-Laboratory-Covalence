let myName = "Ako to pre si Mang Kanor"
const states = 50
let names = ['Charles','Abby','James','John']
let ages = [21,27,18,17]
let vegetables = ['Apples','Pineapples','BurgerXD','Chicken']
const pet = {
    'name': 'Ursula',
    'breed': 'Labrador'
}
const persons = [
    {
        'name': 'Abdul',
        'age': 12
    },
    {
        'name': 'Jakul',
        'age': 16
    },
    {
        'name': 'Salsalani',
        'age': 21
    },
    {
        'name': 'Mohamamad Ali',
        'age': 23
    },
    {
        'name': 'Asisz',
        'age': 69
    }
]



console.log(computeSum(5,4))
sayHello()

for (let a=0; a<names.length ; a++) {
    checkAge(names[a],ages[a])
}


// this function lets you compute sume of num1 and num2
function computeSum (num1, num2) {
    return num1+num2
}
// function say helloworld
function sayHello () {
    alert("Hello World!")
}
//checking the age that declared above as array
function checkAge (name,age) {
    if (age < 21) {
        alert (`Sorry ${name} you aren't old enough to view this page.`)
    }
}

// Use a loop to display each of your favorite vegetables to the developer console for the Vegetab
vegetables.forEach(vegees => {
    console.log(vegees)
});

// Display a console log displaying your pets name and breed
console.log(pet);

//Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.
for (let a = 0; a < persons.length; a++) {
    checkAge(persons[a].name,persons[a].age)
}

// the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.
//if the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.
function getLength (words) {
    return words.length
}
(getLength("Hello World")%2===0) ? console.log("The world is even") : console.log("The world is odd")
