document.addEventListener("DOMContentLoaded", (e)=>{
    const cats = fetch("https://api.publicapis.org/categories")
    cats.then((promise)=>promise.json()).then((object)=>{
        console.log(object.categories);
        for (let o of object.categories) {
            console.log(o)
        } 
    });
});