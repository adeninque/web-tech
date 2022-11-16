document.addEventListener("DOMContentLoaded", e => {
    const cat_body = document.querySelector("#category")
    const generate = document.querySelector('.joke__btn')

    function fillCats() {
        let fetchPromise = fetch('https://api.chucknorris.io/jokes/categories')
        let res = []
        fetchPromise.then(r => {
            return r.json()
        }).then(o => {
            // console.log(category)
            for (const cat of o) {
                let label = document.createElement('label')
                label.classList.add('category__label')
                let input = document.createElement('input')
                input.classList.add('category__checkbox')
                input.type = "checkbox"
                input.value = cat
                
                label.appendChild(input)
                label.innerHTML = label.innerHTML + cat
                cat_body.appendChild(label)
            }
        }).then(()=> {
            const checkboxes = document.querySelectorAll('.category__checkbox')
            for (const b of checkboxes) {
                b.addEventListener('click', ()=>{
                    b.parentElement.classList.toggle('_checked')
                })
            }
            generateJoke()
        })
    }

    fillCats()

    function generateJoke() {
        const cats = document.querySelectorAll('.category__checkbox')
        const catsList = []
        const text = document.querySelector('.joke__text')
        let url = 'https://api.chucknorris.io/jokes/random'
        for (const c of cats) {
            if (c.checked) {
                catsList.push(c.value)
            }
        }
        if (catsList.length != 0) {
            url = `https://api.chucknorris.io/jokes/random?categories=(${catsList})`
        }

        fetch(url)
        .then(r => r.json())
        .then(o => {
            text.innerHTML = o.value
        })
    }

    generate.addEventListener('click', generateJoke)
})