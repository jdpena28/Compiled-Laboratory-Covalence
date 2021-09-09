var friendsName = ['Hudas','Eskaryote','Mico','Denmark','Susej']
var locations = ['Judys','Basurahan','Marawi','New Guinea','New Tokyo','Manila',
'Helsinki','Denver','Zamboanga','Nairobi']
var weapons = ['Pencil','Ballpen','Knife','Ketchup','Chicken Wings','Paperclip','Fork','Mouse','Keyboard','Everson',
'Laptop','Fan','Chalk','Notebook','flashdrivee','Graphics Card','RAM','Cotton Buds','Burger','Mouse Pad',
'Fries','Oil','Dildo','Vibrator','Gel','Condom','Lubricant','Durex','Fleshlight','Hotdog']


for(var i = 1 ; i<=100; i++) {
    createDOM(i)
}

function createDOM(accusationNum) {
    var h3Accusation = document.createElement('h3')
    h3Accusation.className = 'accusation'
    h3Accusation.innerHTML = `Accusation ${accusationNum}`
    document.body.appendChild(h3Accusation)
    h3Accusation.addEventListener('click', () => {
        alert('Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!')
    })
}




