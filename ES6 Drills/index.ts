function favMovie(movie='bold',name='Ara M'){
    console.log(`Your name is ${name} and my Favorite movie is ${movie}.`)
} 
favMovie()

const myFavMovie = (movie='bold',name='Ara M') => console.log(`Your name is ${name} and my Favorite movie is ${movie}.`)

myFavMovie()

const getFirstName = (fullName = 'Benigno Shit Aqs') => {
    const firstName = fullName.split(' ')
    return firstName[0]
}
const getFirstNameConcise  = fullName => {
    const firstName = fullName.split(' ') 
    return firstName[0]
}
console.log(getFirstName())
console.log(getFirstNameConcise('Du 30'))

function doMath (x,y) {
    return {
        exponentialResult: Math.pow(x,y),
        product: x*y
    }  
}
console.log(doMath(2,3))

//------------------------------------
//          Spread Syntax            /
//------------------------------------
let arrName = ['DU30','Benigs','Cors']
let arrLocation = ['Tokyo','Helsinki','Paris']
let arrFood = ['puss','egg','hatdog']
const names = 'MyNameIs'



function restaurant ([...name],[...location],[...favFood]) {
    console.log(`${name} ${location} ${favFood}`)
}
restaurant(arrName,arrLocation,arrFood)

function whatEverYouLike (name) {
    let arrNames = [...name]
    for(let a = 0 ; a<=arrNames.length; a++)
    console.log(`${[...arrNames]} ${a}`)
}

whatEverYouLike(names)

