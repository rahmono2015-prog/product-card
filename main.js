const productCards = document.querySelectorAll('.card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((cards) => cards.style.backgroundColor = greenColorHash)
})

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
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
  alert('10')
  console.log(message)
}
