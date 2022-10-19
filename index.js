
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let subHeader1 = document.createElement('h3')
subHeader1.setAttribute('class', 'description')
subHeader1.append('Description:')
content.append(subHeader1)

let subHeader2 = document.createElement('h3')
subHeader2.setAttribute('class', 'feeding-times')
subHeader2.append('Feeding Times:')
content.append(subHeader2)

let list = document.createElement('ul')

let itemOne = document.createElement ('li')
let itemTwo = document.createElement ('li')
let itemThree = document.createElement ('li')
itemOne.textContent =('9:00am')
itemTwo.textContent =('12:00pm')
itemThree.textContent =('5:00pm')

document.body.append(list)
list.append(itemOne)
list.append(itemTwo)
list.append(itemThree)