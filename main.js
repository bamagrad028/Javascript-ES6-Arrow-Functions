function sum(a, b) {
    return a + b
}

let sum2 = (a, b)  =>  a + b

function isPositive(number) {
    return number >= 0
}

let isPositive2 = (number) => number >= 0


function randomNumber(){
    return Math.random
}

let randomNumber2 = () => Math.random
  
document.addEventListener('click', function () {
    console.log('click')
})

document.addEventListener('click', () => console.log('click'))

// Arrow Functions 2.0

class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)

//Scope doesnt show the Function area.....it shows Bob in Arrow....calls Functions where you call it and not scope!