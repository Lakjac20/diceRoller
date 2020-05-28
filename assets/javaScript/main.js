  
const dieRolls = []
const rollButton = document.querySelector('#rollButton')
let input = document.querySelector('input')
let allRolls = document.querySelector('#showAll')
let listItems = document.querySelector('#rolls')
const total = document.querySelector('#total')
let all = 0



rollButton.addEventListener("click", function () {
    let diceInput = document.querySelector('#dice').value

    let counter = 0
    
    while (counter < input.value) {
        diceInput = Math.floor(Math.random() * 6) + 1;
        counter += 1
        all += diceInput
        console.log(diceInput)
        dieRolls.push(diceInput);
        
    }

   total.innerHTML = all
})


allRolls.addEventListener("click", function () {

    let counter = 0
    while (counter < dieRolls.length) {
        listItems.innerHTML += "<li>" + dieRolls[counter] + "</li>";
        counter += 1
    }
})

