document.addEventListener('DOMContentLoaded', () => {
    console.log('document content loaded')

    const pages = [
        [document.querySelector('#nav-about'), document.querySelector('.about'), 'grid'],
        [document.querySelector('#nav-partfolio'), document.querySelector('.partfolio'), 'block'],
        [document.querySelector('#nav-links'), document.querySelector('.links'), 'block'],
    ]

    pages.forEach((item, index) => {
        console.log(item)
    })

    pages.forEach(function(item, index) {
        // console.log(item[2])
        item[0].addEventListener('click', (event) => {
            el = item[1];
            pages.forEach(function(item, index) {
                if (item[1] !== el) {
                    item[1].style.display = "none"
                };
            });
            el.style.display = item[2];
        });
    });

    function activate(index) {
        el = pages[index][1]
        pages.forEach(function(item, index) {
            if (item[1] !== el) {
                item[1].style.display = "none"
            };
        });
        el.style.display = pages[index][2]
    }

    activate(1)
});