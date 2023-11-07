function find_editName() {
    const item1 = document.getElementsByTagName('p')[3].childNodes[1];
    console.log(item1.innerText)
    item1.innerText = 'Svetlana'
    console.log(item1.innerText)
}

function find_editSurname() {
    const item2 = document.getElementsByTagName('p')[4].childNodes[1];
    console.log(item2.innerText)
    item2.innerText = 'Konstantinova'
    console.log(item2.innerText)
}

function find_editPatronymic() {
    const item3 = document.getElementsByTagName('p')[5].childNodes[1];
    console.log(item3.innerText)
    item3.innerText = 'Arkadievna'
    console.log(item3.innerText)
}

function find_editEverything() {
    const item1 = document.getElementsByTagName('p')[3].childNodes[1];
    console.log(item1.innerText)
    item1.innerText = 'Svetlana'
    console.log(item1.innerText)

    const item2 = document.getElementsByTagName('p')[4].childNodes[1];
    console.log(item2.innerText)
    item2.innerText = 'Konstantinova'
    console.log(item2.innerText)


    const item3 = document.getElementsByTagName('p')[5].childNodes[1];
    console.log(item3.innerText)
    item3.innerText = 'Arkadievna'
    console.log(item3.innerText)
}