  
const dieRolls = []
const rollButton = document.querySelector('#rollButton')
let input = document.querySelector('input')
//let totalRolled = document.querySelector('#total-rolled')//
let allRolls = document.querySelector('#showAll')
let listItems = document.querySelector('#rolls')



rollButton.addEventListener("click", function () {
    let diceInput = document.querySelector('#dice').value

    let counter = 0
    let total = 0
    while (counter < input.value) {
        diceInput = Math.floor(Math.random() * 6) + 1;
        counter += 1
        total += diceInput
        console.log(diceInput)
        dieRolls.push(diceInput);
    }

   
})


allRolls.addEventListener("click", function () {

    let counter = 0
    while (counter < dieRolls.length) {
        listItems.innerHTML += "<li>" + dieRolls[counter] + "</li>";
        counter += 1
    }
})

