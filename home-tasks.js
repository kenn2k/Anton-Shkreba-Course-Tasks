//? ===================================================================================================================
//? HOME TASK 1
//? ===================================================================================================================

//! Написати програму, яка виводить числа від 1 до 10, використовуючи цикли for і while.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//! Створити масив, що складається з елементів різних типів (примітивів) (число, рядок, булева змінна) довжиною 10 елементів. Вивести їх тип за допомогою typeof у консоль.
//! Виведення здійсніть за допомогою перебору масиву різними способами: методом forEach, циклами for, while і do while.

// const arrayOfValues = [
//   "sdsfdscg",
//   20,
//   false,
//   null,
//   4432,
//   2n,
//   true,
//   undefined,
//   "asfasf",
//   213,
// ];

// const listOfTypes = arrayOfValues.forEach((char) => console.log(typeof char));

// for (let i = 0; i < arrayOfValues.length; i++) {
//   console.log(typeof arrayOfValues[i]);
// }

// let i = 0;
// while (i < arrayOfValues.length) {
//   console.log(typeof arrayOfValues[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(typeof arrayOfValues[i]);
//   i++;
// } while (i < arrayOfValues.length);

//! Створити масив об'єктів (приклад об'єкта {name: ‘’, age: xx, pets: [cat, dog]}) і використати метод filter, щоб вивести всіх, кому більше 20 років.
//! За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину. Результат вивести у консоль.

// const arrayOfObjects = [
//   { name: "Anton", age: 20, pets: ["cat"] },
//   { name: "Sasha", age: 25, pets: ["cat"] },
//   { name: "Timur", age: 19, pets: ["dog"] },
//   { name: "Nick", age: 19, pets: ["cat"] },
//   { name: "Andrew", age: 22, pets: ["dog"] },
// ];

// const overTwentyYears = arrayOfObjects.filter((char) => char.age > 20);
// console.log(overTwentyYears);

// arrayOfObjects.map((char) => char.pets.push("cat"));

// console.log(arrayOfObjects);

//! Створити масив із 10 елементів і заповнити його числом 42 за допомогою відповідного методу (завдання знайти його в документації, посилання в описі до лекції).
//! За допомогою splice вставити на 5-ту позицію слово "answer". За допомогою find знайти це слово і вивести його у консоль.

// const arrayOfElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arrayOfElements.fill(42));

// arrayOfElements.splice(4, 0, "answer");
// console.log(arrayOfElements);

// console.log(arrayOfElements.find((char) => char === "answer"));

//! Створіть об'єкт із кількома ключами на ваш розсуд. І наведіть приклади використання keys, hasOwn, values.

// const obj = { 1: "sdfdsfds", key: "sdfds", 3: "something" };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.hasOwn(obj, "key"));

//? ===================================================================================================================
//? HOME TASK 2
//? ===================================================================================================================

//! Створити функцію, яка при створенні приймає об'єкт, наприклад: {access-token: 'qwerty'} і додає його до кожної структури даних, що буде передана в результатуючу функцію.
//! Також до об'єкта буде додано поле count. При кожному виклику воно має збільшуватися на 1.

// const addParamsToRequest = (params) => {
//   let count = 0;
//   return function (data) {
//     const result = Object.assign({}, params, data, { count: count });
//     count++;
//     return result;
//   };
// };

// const sendData = addParamsToRequest({ "access-token": "qwerty" });

// console.log(sendData({ data: "some user 1" }));
// console.log(sendData({ data: "some user 2" }));
// console.log(sendData({ data: "some user 3" }));

//! У вас є об'єкт:
//! Викличте його так, щоб ім'я та вік були вказані (значення неважливі). Потім створіть функцію, яка буде це робити постійно при її виклику.

// const obj = {
//   name: "Anton",
//   age: 20,
//   getData: function () {
//     console.log(`Person name is: ${this.name} and age ${this.age}`);
//   },
// };

// function assignCharacteristic(object) {
//   return obj.getData.call(object);
// }

// console.log(assignCharacteristic({ name: "Alex", age: 21 }));
// console.log(assignCharacteristic({ name: "Andrew", age: 23 }));
// console.log(assignCharacteristic({ name: "Soffi", age: 17 }));
// console.log(obj.getData());

//! Задача — пройтися по об'єкту рекурсивно, знайти всі файли та повернути їхні імена у вигляді масиву.

// const root = {
//   name: "name",

//   type: "folder",

//   children: [
//     {
//       name: "folder 1",

//       type: "folder",

//       children: [
//         {
//           name: "folder 2",

//           type: "folder",

//           children: [
//             {
//               name: "file 3",

//               type: "file",

//               size: 30,
//             },
//           ],
//         },
//       ],
//     },

//     {
//       name: "file 1",

//       type: "file",

//       size: 10,
//     },

//     {
//       name: "file 2",

//       type: "file",

//       size: 20,
//     },
//   ],
// };

// let arrayOfNames = [];

// const getFilesName = (obj) => {
//   if (obj.type === "file") {
//     arrayOfNames.push(obj.name);
//     return;
//   }

//   if (obj.type === "folder") {
//     obj.children.forEach((char) => {
//       getFilesName(char);
//     });
//   }
// };

// getFilesName(root);
// console.log("array of names", arrayOfNames);

/* 
! Створіть базовий об'єкт Людина з такими властивостями: name, phone
! Метод introduce, який виводить у консоль фразу: Привіт, мене звати {name}, мій номер {phone}.
! Створіть об'єкти Студент і Викладач, які будуть наслідувати властивості та методи від об'єкта Людина.
! Для Студента додайте додаткову властивість course (курс) і метод study, який виводить: Я навчаюся на {course} курсі.
! Для Викладача додайте додаткову властивість subject (предмет) і метод teach, який виводить: Я викладаю {subject}.
! Реалізуйте наслідування за допомогою конструктора функції або класів (оберіть один підхід).
*/

//? ES5 -------------------------------------------------------------------------------------
// function Person(name, phone) {
//   this.name = name;
//   this.phone = phone;
//   this.introduce = function () {
//     console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
//   };
// }

// let person = new Person("Anton", 123213213);

//? --------

// function Student(course, name, phone) {
//   Person.call(this, name, phone);
//   this.course = course;
//   this.study = function () {
//     console.log(`Я навчаюся на ${this.course} курсі.`);
//   };
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// let student = new Student(3, "Андрій", 31254543);
// student.introduce();
// student.study();

//? --------

// function Teacher(subject, name, phone) {
//   Person.call(this, name, phone);
//   this.subject = subject;
//   this.teach = function () {
//     console.log(`Я викладаю предмет ${this.subject}`);
//   };
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// let teacher = new Teacher("Математика", "Михайло", 4543543543);
// teacher.introduce();
// teacher.teach();

//? ES6 -------------------------------------------------------------------------------------

// class Person {
//   constructor(name, phone) {
//     this.name = name;
//     this.phone = phone;
//     this.introduce = function () {
//       console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
//     };
//   }
// }

// const person = new Person("Anton", 123214214);

// //? --------

// class Student extends Person {
//   constructor(name, phone, course) {
//     super(name, phone);
//     this.course = course;
//     this.study = function () {
//       console.log(`Я навчаюся на ${this.course} курсі.`);
//     };
//   }
// }

// const student = new Student("Anton", 123214214, 3);

// student.introduce();
// student.study();

// //? --------

// class Teacher extends Person {
//   constructor(name, phone, subject) {
//     super(name, phone);
//     this.subject = subject;
//     this.teach = function () {
//       console.log(`Я викладаю предмет ${this.subject}`);
//     };
//   }
// }

// const teacher = new Teacher("Михайло", 4543543543, "Математика");

// teacher.introduce();
// teacher.teach();

//? ===================================================================================================================
//? HOME TASK 3
//? ===================================================================================================================

/*
! 1. Шаблони проєктування:
! Реалізувати простий шаблон проєктування "Фабрика" (Factory), який створює об'єкти різних типів (наприклад, Car і Bike).
! Ці об'єкти мають методи ride() та stop(), базовий клас повинен називатися Transport. 
*/

console.log("HOME TASK: FACTORY PATTERN");

class Transport {
  constructor(brand) {
    this.brand = brand;
  }

  stop() {
    console.log(`Transport has stopped`);
  }

  static createTransport(type, brand) {
    if (type === "car") {
      return new Car(brand);
    }
    if (type === "bike") {
      return new Bike(brand);
    } else {
      throw new Error("Unknown transport type");
    }
  }
}

class Car extends Transport {
  ride() {
    console.log(`Car ${this.brand} is riding`);
  }
}

class Bike extends Transport {
  ride() {
    console.log(`Bike ${this.brand} is riding`);
  }
}

const myCar = Transport.createTransport("car", "Tesla");
myCar.ride();
myCar.stop();

const myBike = Transport.createTransport("bike", "Cannondale");
myBike.ride();
myBike.stop();

/*
! 2. Робота з DOM:
! Написати додаток, який реалізує відображення списку персонажів з Rick & Morty API і зробити просту пагінацію.
! Список отримуємо за допомогою fetch за адресою: https://rickandmortyapi.com/api/character

! Пагінація реалізується двома кнопками Next і Prev. Якщо ми дійшли до першого або останнього запису, відповідна кнопка блокується:
! javascript
! Копировать код
! addMessageButton.disabled = true; // Заблокувати кнопку

! Посередині відображається номер поточної сторінки. Він обчислюється зі значення поля data.info.next. Якщо це поле undefined, відображаємо data.info.pages (це остання сторінка).
*/

console.log("HOME TASK: WORKING WITH DOM");

const url = "https://rickandmortyapi.com/api/character";

const container = document.getElementById("characters");
const loading = document.getElementById("loading");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const pageLabel = document.getElementById("page");

let currentPage = 1;

function loadPage(page) {
  loading.style.display = "block";
  container.innerHTML = "";

  const response = fetch(`${url}?page=${page}`);

  response
    .then((data) => {
      if (data.status !== 200) {
        console.log("Error");
      }
      return data.json();
    })
    .then((data) => {
      data.results.forEach((character) => {
        const row = document.createElement("div");
        row.className = "character-row";

        const image = document.createElement("img");
        image.src = character.image;
        image.alt = character.name;
        image.className = "character-image";

        const info = document.createElement("div");
        info.className = "character-info";

        const name = document.createElement("p");
        name.className = "character-name";
        name.textContent = character.name;

        const status = document.createElement("span");
        status.className = `character-status status-${character.status.toLowerCase()}`;
        status.textContent = character.status;

        info.appendChild(name);
        info.appendChild(status);
        row.appendChild(image);
        row.appendChild(info);
        container.appendChild(row);
      });

      if (data.info.next) {
        const nextUrl = new URL(data.info.next);
        pageLabel.textContent = nextUrl.searchParams.get("page") - 1;
      } else {
        pageLabel.textContent = data.info.pages;
      }

      nextBtn.disabled = !data.info.next;
      prevBtn.disabled = !data.info.prev;

      currentPage = page;
    })
    .catch((error) => {
      console.log("Error", error);
    })
    .finally(() => {
      loading.style.display = "none";
    });
}

nextBtn.addEventListener("click", () => {
  loadPage(currentPage + 1);
});

prevBtn.addEventListener("click", () => {
  loadPage(currentPage - 1);
});

loadPage(1);
