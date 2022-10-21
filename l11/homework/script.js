"use strict"

const customName = document.querySelector('#customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const arr1 = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas',
]

const arr2 = [
    'the soup kitchen',
    'Disneyland',
    'the White House',
]

const arr3 = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away',
]

function randomValueFromArray(arr) {
    const random = Math.floor(Math.random()*arr.length);
    return arr[random];
}

randomize.addEventListener('click', () => {
    let text = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
    const insertx = randomValueFromArray(arr1);
    const inserty = randomValueFromArray(arr2);
    const insertz = randomValueFromArray(arr3);
    text = text.replace(':insertx:', insertx)
    text = text.replace(':insertx:', insertx)
    text = text.replace(':inserty:', inserty)
    text = text.replace(':insertz:', insertz)

    if (customName.value != '') {
        text = text.replace('Bob', customName.value)
    }

    if (document.querySelector('#uk').checked) {
        text = text.replace('300', `${Math.floor(300 * 0.0714286)}`)
        text = text.replace('pounds', 'stones')
        text = text.replace('94', `${Math.round((94 - 32)*(5/9))}`)
        text = text.replace('fahrenheit', 'centigrade')
    }

    story.innerHTML = text
    story.style.visibility = 'visible'
})