"use strict"
document.addEventListener('DOMContentLoaded', function() {
    console.log('document ready')
    let input = document.querySelector('.input__input')
    let button = document.querySelector('.input__btn')
    let guesses = document.querySelector('.results__guesses')
    let stats = document.querySelector('.results__status')
    let msg = document.querySelector('.results__msg')
    let guesses_list = []
    let number = Math.floor(Math.random()*100)
    let reset = document.querySelector('.relust_reset')
    let isWinner = false
    console.log(number, 'This is guessed number')

    // console.log(input, button, guesses, stats, msg)

    button.addEventListener('click', function() {
        document.querySelector('.results').style.visibility = "visible"
        if (input.value != '') {
            if (input.value > number) {
                msg.innerHTML = 'Too High'
                wrong_answer()
            } else if (input.value < number) {
                msg.innerHTML = 'Too low'
                wrong_answer()
            } else {
                msg.innerHTML = 'Congratulations' 
                stats.innerHTML = 'Correct !'
                input.disabled = true;
                reset.style.display = 'block'
                stats.classList.remove('_right')
                stats.classList.remove('_wrong')
                stats.classList.add('_right')
                isWinner = true
                button.disabled = true
            }
            guesses_list.push(input.value)
        } else {
            wrong_answer()
            guesses_list.push(0)
        }
        if (!isWinner) {
            if (guesses_list.length >= 10) {
                msg.innerHTML = '-' 
                stats.innerHTML = 'Game over'
                reset.style.display = 'block'
                button.disabled = true
                stats.classList.remove('_right')
                stats.classList.remove('_wrong')
                stats.classList.add('_right')
            }
        }
        guesses.innerHTML = `Previous guesses: ${guesses_list.join(' ')}`
        input.value = null
    })

    reset.addEventListener('click', reset_game)

    function wrong_answer() {
        stats.innerHTML = 'Wrong !'
        stats.classList.remove('_right')
        stats.classList.remove('_wrong')
        stats.classList.add('_wrong')
    }

    function reset_game() {
        guesses_list = []
        guesses.innerHTML = `Previous guesses: ${guesses_list.join(' ')}`
        input.disabled = false;
        number = Math.floor(Math.random()*100)
        reset.style.display = 'none'
        console.log(number, 'This is guessed number')
        document.querySelector('.results').style.visibility = "hidden"
        button.disabled = false
        isWinner = false
    }
})