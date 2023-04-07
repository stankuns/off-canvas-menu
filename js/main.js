const button = document.querySelector('button')
const body = document.body

button.addEventListener('click', evt => {
    body.classList.toggle('offsite-is-open')
    console.log('button clicked!')
}) 