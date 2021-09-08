name = 'Jang'
var name
console.log(name)
console.log('-------------------')

setName()
function setName () {
    var name = 'Covalence'
    console.log(name)
}
console.log('-------------------')

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}
console.log('-------------------')


let fruits = ['Green Beans','Cucumber','Lettuce']

function printFruits() {
    console.log(fruits[0])
    let favFruits = fruits[1]
    function printFavFruits() {
        let leastFav = fruits[2]
        console.log(favFruits)
    }
    // console.log(leastFav)
    
}
printFruits()

console.log('---------------------')

effinFunc()
function effinfunc() {};


