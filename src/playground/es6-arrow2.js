// arguments are not bound with arrow functions.
const add = (a, b) => {
    // console.log(arguments)
    return a + b
}

// console.log(add(55, 1, 1000))

// the this keyword is bound to the parent

const user = {
    name: 'Nate',
    cities: ['DC', 'New Delhi', 'Panama City'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city)
    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: ['5', '10', '15'],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((toBeMultiplied) => toBeMultiplied * this.multiplyBy)
    }
}

console.log(multiplier.multiply())