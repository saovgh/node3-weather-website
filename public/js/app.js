//console.log('Client side javascript file is loaded')

// fetch('https://puzzle.mead.io/puzzle').then((Response) => {
//     Response.json().then((data) => {
//         console.log(data)
//     })
// })


// fetch('http://localhost:3000/weather?address=boston').then((Response) => {
//     Response.json().then((data) => {
//         if (data.error) {
//         console.log(data)
//     } else {
//         console.log(data.location)
//         console.log(data.forecast)
//     }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    //http://localhost:3000/
    fetch('weather?address=' + location).then((Response) => {
        Response.json().then((data) => {
            if (data.error) {
            messageOne.textContent = data.error
            messageTwo.textContent = ''
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            }
        })
    })
})