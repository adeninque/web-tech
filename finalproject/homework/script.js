document.addEventListener("DOMContentLoaded", ()=>{
    url = 'https://raw.githubusercontent.com/adeninque/web-tech/main/finalproject/homework/db.json'
    'https://raw.githubusercontent.com/adeninque/web-tech/main/finalproject/homework/media/photos/IMG_0870.JPG'

    const dbPromise = fetch(url).then(response => response.json().then(obj => {
        console.log(obj);
    }))
})