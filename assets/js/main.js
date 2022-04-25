const URL = 'https://api.adviceslip.com/advice'
const quoteNumber = document.querySelector('.quote__number')
const quoteText = document.querySelector('.quote__text')
const dice = document.querySelector('.dice__container')

function getAQoute() {
  fetch(URL)
    .then(async (response) => {
      const data = await response.json()
      quoteNumber.textContent = `Advice # ${data.slip.id}`
      quoteText.textContent = data.slip.advice
    })
    .catch((err) => {
      console.log(err)
    })
}

dice.addEventListener('click', getAQoute)
