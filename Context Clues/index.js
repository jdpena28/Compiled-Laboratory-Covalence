var h3Accusation = document.createElement('h3')
h3Accusation.classList.add('accusation')


console.log(h3Accusation.className)

for(var i = 0 ; i<=100; i++) {
     h3Accusation.innerHTML = `Accusation ${i}`
     document.body.appendChild(h3Accusation)
}