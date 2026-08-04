function showWeather(city, temp) {
  console.log(`Сейчас в ${city} Температура ${temp} градусов по Цельсию`);
}

const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  }
  else if (speed < SPEED_OF_LIGHT) {
    console.log('Достоверная скорость');
  }
  else {
    console.log('Скорость света');
  }
}

const product = 'Увлажняющий мусс';
const price = 2750;
function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}р, пополните баланс.`);
  }
}



const myName = 'Шариф';
const myAge = 30;
const myCity = 'Душанбе';
function introduce() {
  console.log(`Привет! Меня зовут ${myName}, Мне ${myAge} лет, я из ${myCity}.`);
}
