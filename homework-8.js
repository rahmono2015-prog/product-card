//задача №3
// мои данные

const person = {
  firstName: 'Шариф',
  lastName: 'Рахмонов',
  email: 'sharif@exampl.com',
  job: 'stydent',
  position: 'junior Developer',
  age: 30,
  contry: 'Таджикистан',
  city: 'Душанбе',
};

console.log(person);

//задача №4
//задание с машиной
const car = {
  brand: 'Ваз',
  model: '2106',
  year: 1985,
  color: 'Вишневый',
  transmision: ' Механика',
}

//добавил владельца из задачи №3
car.owner = person;

//задача №5
function addMaxSpeed(obj) {
  if (!obj.maxSpeed) {
    obj.maxSpeed = 220;
  }
}

addMaxSpeed(car);
console.log(car);

//задача №6
function getProperty(obj, key) {
  console.log(obj[key]);
}
//выводит cвойства brand, model, year, owner из обьекта car
getProperty(car, 'brand');
getProperty(car, 'model');
getProperty(car, 'year');
getProperty(car.owner, 'firstName');


//задача №7
//МАССИВ с продуктам
const product1 = ['Яблоко', 'Молоко', 'Хлеб', 'Яйцо', 'Сыр',];
//выводим в консоль массив
console.log(product1);


//задача №8
//МАССИВ с книгами
const books = [
  {
    title: 'Гарри Поттер',
    author: 'Дж.К. Роулинг',
    year: 1997,
    color: 'Красный',
    genre: 'Фентези'
  },

  {
    title: 'Властелин Колец',
    author: 'Дж.Р.Р Толкин',
    year: 1954,
    color: 'Зеленый',
    genre: 'Фентези'
  },

  {
    title: 'Марсианин',
    author: 'Энди Вейер',
    year: 2014,
    color: 'Оранжевый',
    genre: 'Научная Фантастика'
  }
];

console.log(books);

//задача №9
//создал второй массив и обьединил
const booksMarvel = [
  {
    title: 'Человек-паук',
    author: 'Marvel',
    year: 2017,
    color: 'Красный',
    genre: 'Фантастика'
  },

  {
    title: 'Мстители Финал',
    author: 'Marvel',
    year: 2019,
    color: 'Синий',
    genre: 'Фантастика'
  }
];
//обьединение двух массив
const allBooks = [...books, ...booksMarvel];
//console.log(allBooks); эта строка не дружит со 127 стр, так как в консоле повторяются массивы


//задача №10
//добавил свойство
function addRareProperty(booksArray) {
  booksArray.forEach(book => {
    if (book.year < 2000) {
      book.isRare = false;
    } else {
      book.isRare = true;
    }
  });
}

addRareProperty(allBooks);
console.log(allBooks);