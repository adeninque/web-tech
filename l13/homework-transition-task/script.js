document.addEventListener('DOMContentLoaded', ()=> {
    const buttons = document.querySelectorAll('.nav__elem')

    buttons.forEach((item, index) => {
        item.addEventListener('click', () => {
            for (const btn of buttons) {
                if (btn === item) {
                    btn.classList.add('_choosed')
                } else {
                    btn.classList.remove('_choosed')
                }
            }
        })
    })
})