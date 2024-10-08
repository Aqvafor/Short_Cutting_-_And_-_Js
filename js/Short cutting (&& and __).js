'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(`Order received ${this.mainMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  // У пасты будут 3 обязательных ингридиента
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Напишем метод заказа пиццы с помощью оператора rest 
  //Для нашей пиццы должен быть 1 обязательный ингридиент, а остальные опциональные 
  orderPizza: function (mainIngrideinet, ...otherIngridients) {
    console.log(mainIngrideinet);
    console.log(otherIngridients);
  },


  // Попробовать саммому 
  orderPizzaStr: function (mainIngrideinet, ...otherIngridients) {
    console.log(`Main ingridient ${mainIngrideinet}; Others ingtiditnrs ${otherIngridients}`);
  },

};




// Логические операторы могут использовать любой тип данных, вовзращать любой тип данных и использовтаь замыкание(короткое), которое позволяет, ускорть работу операторов
// Use ANY data type, return ANY data type, short-circuting 
console.log('---- OR ----');
// Short cutting || operator(замыкание(короткое) оператора || ) - Замыкание для оператора или означает, что оно немедленно вернет первое правдивое значение. То есть которое Js увиди перое правдивое значение, лаже не посмотрит на остальные и он не будет оценивать следуюющие значения на предмет истиности. Это и означает short circuting
console.log(3 || 'Jonas'); // Выведится цифра 3 
console.log('' || 'Jonas'); // Вывдится 'Jonas' Так ка пустая строка имеет ложное значение
console.log(true || 0); // Выведится true так как оно первое правдивое значение(хотя ноль тут будет выступать в качестве ложного значения)

console.log(undefined || null); // Здесь высветится null так не было найдено значение true, то соответвтвенно выведится крайнее значение false. Так как Js прошеся по всем значениям  в поисках true
console.log(0 || false); // Здесь высветится false так не было найдено значение true, то соответвтвенно выведится крайнее значение false. Так как Js прошеся по всем значениям  в поисках true

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' Так как это первое правдивое значение и оператор или будет тру, когда хотя бы 1 из значений будет правдивым

// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10 ;
// Здесь будет 10. Так как оператор ИЛИ воспринимает 0 не как число, а как ложное значениею Решения данной проблемы будет в следующей лекции 

restaurant.numGuests = 23; // Установили значение свойству// Теперь будет 23
// Здесь если не будет свойсва numGuests у объкта restaurant, то мы установим значение по умолчанию 10 с помощью тернарного оператора
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // Вернется 10 так как numGuests будет undefined (ложное значение)
console.log(guests1);

// Чтобы бы не испольовать есь тернарный оператор мы можем воспользоватся замыканием оператра || или
const guests2 = restaurant.numGuests || 10; // То есть если есть такое свойство у объекта ресторант то его значение вернется иначе, будет задано значение по умолчанию значение 10 так как это значение является правдивым
console.log(guests2);

// Испольование замыкания оператора ИЛИ позволяет нам легче задавать значения по умолчанию без использования тернарного оператора или использования if else конструкции 


// Короткое замыкание оператора И 
// Найдя первое отрицательное значение замыкание И покажет первое отрицтельное значение и крайнее положителььное значение потому что бдет пробегать по всем элементам. В поисках первого ложного или всех правдивых
console.log('---- AND ----');
console.log(0 && 'Jonas'); // Выведится 0, так как это ложное значение. 
console.log(7 && 'Jonas'); // Выведится 'Jonas' Так как замыкание оператора будет работать, пока все значение будут правдивыми и выведит крайнее правдивое или пока не найдет первое ложное значение и выведеи т его
console.log('Hello' && 23 && null && 'jonas'); // Выведится null так как это 1ое ложное значение. А дальше js   не будет просматривать другие так как в этом больше нет надобности  

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Использование замыкание оператора && И 
// То есть мы проверяем существут ли такой метод и если правда то выведится крайнее правдивое значение, то есть то которое мы записали при вызове метода restaurant.orderPizza('mushrooms', 'spinach');
// То есть мы можем что-либо записать в правую часть оператора && и не тольк о одн значение 
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');




//  The Nullish Coalescing Operator (??) - Оператор нулевого слияния 
// ?? - это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined , в противном случае возвращается значение левого операнда.


restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // При замыкании ИЛИ будет показано значение 10, так как 0 будет воспринято, как ложное значение
console.log(guests);

// Решением этой проблемы будет использование нового оператора нулевого слияния ?? 
// Это оператор был представлен в ES2020 
const guestsCorrect = restaurant.numGuests ?? 10; // Теперь выведится 0 
console.log(guestsCorrect);
// Теперь мы получили 0, реальное значение хранящиеся в  restaurant.numGuests 
// Потому что теперь Nullish: null and undefined ( NOT 0 or ''). Теперь нулевыми значениями будут являться null и undefined? не ноль 0 и '' не пустая строка(так как это тоже может быть записана в качестве значения)
// То есть для этого оператора ?? - 0 и ''(ноль и пустая строка) не будут равняться ложным значениям, а будут являться правдивыми при использовании оператора нулевоо слияния

// То есть если данного свойства не будет существовать, то тогда примется  ложное значение и вернется значение по умолчанию 10 установленное нами



// Операторы логического присваивания - Logoacal Assigment operators представленые в ES2021 
// Logoacal Assigment operators - Операторы логического присваивания в JavaScript: Логическое И присваивание &&= , Логическое ИЛИ присваивание ||= , Логическое нулевое присвоение ??=

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// В начале задаим дефолтное значение гостей ресторанна, если оно не указано 
//(То есть представим что мы получим ресторны от какого-ниудь API) и мы заздим дефолтное количество гостей ресторанам, у которых данного свойства нету


// OR assigment operator - Логическое присваивание ИЛИ 
// То есть в основном этот оператор присваивает переменную в переменную если эта переменная в данным момент ложная. Как во втором примере rest2.numGuests ||= 10; rest2.numGuests - имеет ложное значение и поэтому здесь будет присвонено значение 10.  А если правдиво то выводится значение, которое является истинным

// Здесь будет такая же проблема которая была и с замыканием ИЛИ - т.е. проблема будет заключаться в том, что будет значение равно 0 и онн будет воспринимать, как ложное

//rest1.numGuests = rest1.numGuests || 10;// Будет 20, так как присвоится значение из 1го ресторана(так как оно будет хранить 1 правдивое значение)
//rest2.numGuests = rest2.numGuests || 10; // Будет 10 так как у второго ресторана данного свойства нет

// Теперь используем logical assigment operator or Логичесикое присваивание ИЛИ 
//rest1.numGuests ||= 10;// Получим тоже самое как и в верхнем случае. Так как мы присвоим сразу первое значение, а во второе 10. Будет 20
//rest2.numGuests ||= 10; // Будет 10 

//console.log(rest1);// {name: 'Capri', numGuests: 20}
//console.log(rest2);// {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}


// ??= nullish assigment operator (null or undefined) - Логическое присваивание нулевого значения 
// Использвание Логическое нулевое присвоение ??= (так как у ИЛИ будет ложно 0 и '')
// То есть в двух словах оператор логического нулевого присваивания. Присваивает значение к переменной если именно эта переменная в текущий момент nullish(то есть содержит null or undefined). Как во втором случае rest2.numGuests ??= 10; А если правдиво то выводится значение, которое является истинным
rest1.numGuests ??= 10; // Теперь здесь будет 0. Так как в операторе нулевого присваивания 0 и '' являются правдивыми значениями
rest2.numGuests ??= 10; 


// Logical assigment && - Логическое присваивание И
// То есть в основном, то что логический оператор присваивании И делает. Это присваивает значение в переменную если текущее значение правдиво. То есть когда значение будет ложным, то ничего не произойдет и несуществующее свойство не добавится со значением undefined
// Напишем чтобы выводился анонимус вместо владельца ресторана. То есть сделаем их имена анонимными
//rest2.owner = rest2.owner && '<ANONYMUS>';// Это работает потому что замыкание И ищет крайнее правдивое значение которым является <ANONYMUS>. Поэтому владелец ресторана поменяет значение на <ANONYMUS>
//rest1.owner = rest1.owner && '<ANONYMUS>'; // owner будет undefined то есть ложнными значением. Так как при замыкании И первое ложное значение и будет возвращено 

rest1.owner &&= '<ANONYMUS>'; // owned - Не будет показак в объекте, так как не существует
rest2.owner &&= '<ANONYMUS>'; // owned - будет anonymus 


console.log(rest1);
console.log(rest2);
