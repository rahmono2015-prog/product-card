function showWeather(city, temp) {
  console.log(`Сейчас в ${city} Температура ${temp} градусов по Цельсию`);
}

const speedOfLight = 299792458;
function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log('Сверхсветовая скорость');
  }
  else if (speed < speedOfLight) {
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
function introdyce() {
  console.log(`Привет! Меня зовут ${myName}, Мне ${myAge} лет, я из ${myCity}.`);
}