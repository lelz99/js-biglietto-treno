const userDistance = prompt('Quanti km devi percorrere?', 73)
const userAge = prompt('Quanti anni hai?')
console.log(userDistance, userAge)

const ticketPrice = userDistance * 0.21
console.log(ticketPrice)

if (userAge > 18 && userAge < 65){
    finalPrice = ticketPrice
}
else if (userAge > 65) {
    discountPrice = (ticketPrice / 100) * 40
    finalPrice = ticketPrice - discountPrice
}
else if (userAge < 18) {
    discountPrice = (ticketPrice / 100) * 20
    finalPrice = ticketPrice - discountPrice
}
console.log(finalPrice)

const paragraph = document.getElementById ('final-price')
paragraph.innerText = 'Il prezzo del tuo biglietto è ' + (finalPrice.toFixed (2)) + '€'