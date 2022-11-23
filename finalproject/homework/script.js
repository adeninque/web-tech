document.addEventListener("DOMContentLoaded", ()=>{
    url = 'https://raw.githubusercontent.com/adeninque/web-tech/main/finalproject/homework/db.json'

    const dbPromise = fetch(url).then(response => response.json().then(obj => {
        console.log(obj);
    }))
})