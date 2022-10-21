"use strict"

var helloworld = document.querySelector('h1')
var counter = document.querySelector('.counter')
console.log(helloworld)

helloworld.addEventListener('click', updateName)
counter.addEventListener('click', count)

function updateName(event) {
    if (this.innerHTML == 'Clicked') {
        this.innerHTML = 'Hello world';
    } else {
        this.innerHTML = 'Clicked';
    }
}

function count(event) {
    var content = this.querySelector('h1')
    let number = content.innerHTML.match(/(\d+)/)
    if (number == null) {
        content.innerHTML = 'Clicked 1'
        console.log(number)
    } else {
        content.innerHTML = `Clicked ${parseInt(number)+1}`
    }
}