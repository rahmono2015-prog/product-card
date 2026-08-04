const productCards = document.querySelectorAll('.card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColor = 'rgba(0, 255, 0, 0.7)';
const blueColor = 'rgba(0, 0, 255, 0.7)';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((cards) => cards.style.backgroundColor = greenColor)
})

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const blueColor = 'rgba(0, 0, 255, 0.5)';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColor;
});

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ№5'))

function outputConsoleLog(message) {
  alert('Что дальше!')
  console.log(message)
}
