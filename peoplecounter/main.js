let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0;

function increment() {
    // console.log("clicked")
    count = count + 1
   countEl.innerText = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr

   
    console.log(count)
}

