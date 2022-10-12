let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0;

function increment() {
    // console.log("clicked")
    count = count + 1
   countEl.innerText = count
    
}