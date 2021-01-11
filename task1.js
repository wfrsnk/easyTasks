//Задача 1

//Дана строка:'Я изучаю JavaScript'
//Как вывести 3-й символ? 1-й? Последний?
let str = 'Я изучаю JavaScript';

console.log('Задача №1');
console.log(str);
console.log('1-й символ: ', str[0]);
console.log('3-й символ: ', str[2]);
console.log('Последний символ: ', str[str.length - 1]);

//Задача 2

//Можем ли мы заменить в строке: 'Я изучаю JavaScipt'символ ю на другой? Если да, то как?
//Можем ли заменить слово JavaScript на 'Frontend`?
console.log('Задача №2');
console.log(str);
let reStr = str.replace('ю', 'D');
console.log(reStr);
let reStr2 = str.replace('JavaScript', 'Frontend');
console.log(reStr2);

//Задача 3

//Дан массив элементов [`cat`, `dog`, `parrot`, `horse`]
//Как узнать индекс элемента `parrot`?
console.log('Задача №3');
let array  = [`cat`, `dog`, `parrot`, `horse`];
let index = 0;
for(let i = 0; i < array.length; i++){
    if(array[i]==='parrot')
        index = i; 
}
console.log('index = ', index);

//Другой способ
let index2 = array.indexOf('parrot', 0);
console.log('index = ', index2);

//Задача 4

//Дан массив элементов [`cat`, `dog`, `parrot`, `horse`, `fish`, `chicken`, `lion`]
//Как удалить элемент `fish`? 
//Как удалить элемент cat? 
//Как удалить последние 2 элемента?

console.log('Задача №4');
let arrayAnimals  = [`cat`, `dog`, `parrot`, `horse`, `fish`, `chicken`, `lion`];
console.log(arrayAnimals);
//Как удалить элемент `fish`
let indexFish = arrayAnimals.indexOf('fish', 0);
console.log(indexFish);
arrayAnimals.splice(indexFish,1);
console.log(arrayAnimals);
//Как удалить элемент cat
arrayAnimals.shift();
console.log(arrayAnimals);
//Как удалить последние 2 элемента
arrayAnimals.splice(-2, 2);
console.log(arrayAnimals);


//Задача 5

//Дан массив: [31, 10, `chicken`, 9, `fish`, `10`]
//Необходимо получить массив в котором останутся только строки / элементы со значением 10

console.log('Задача №5');
let mixedArray = [31, 10, `chicken`, 9, `fish`, `10`];
console.log(mixedArray);
//Только строки
let firstFiltrArray = mixedArray.filter(element => typeof(element) === 'string');
console.log(firstFiltrArray);
//Элементы со значением 10
let secondFiltrArray = mixedArray.filter(element => element == 10);
console.log(secondFiltrArray);

//Задача 6
/*Вам дам объект

```
const person = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  age: 25,
  location: 'Caribbean sea',
}
```

1) Необходимо вывести все свойства и значения в следующем виде

```
<property>: <value>
```

2) Необходимо вывести отфарматированные свойства и значения:

```
First name: Jack
Last name: Sparrow
Age: 25 ages
Where to find: Caribbean sea
```*/
console.log('Задача №6');
const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}
let arrKeys = Object.keys(person);
let arrPror = Object.values(person);
//1-е задание
for (let i = 0; i < arrKeys.length; i++ ){
    console.log(arrKeys[i]+':'+" '"+arrPror[i]+"'");
}
//2-е задание
let arrKeysUpdate = [];
for(let i = 0; i< arrKeys.length; i++){
    let newStr = arrKeys[i];

    let indexName = newStr.indexOf('Name', 0);

    if(indexName != -1){
        arrKeysUpdate[i] = newStr[0].toUpperCase() + newStr.slice(1, indexName ) + ' ' + newStr[indexName].toLowerCase() +  newStr.slice(indexName + 1, newStr.length);
  
    }
    else
        arrKeysUpdate[i] = newStr[0].toUpperCase() + newStr.slice(1);

    if(i === arrKeys.length - 1)
      arrKeysUpdate[i] = 'Where to find';
}

for (let i = 0; i < arrKeysUpdate.length; i++ ){
    if(arrKeysUpdate[i] === 'Age')
        arrPror[i] = arrPror[i] + ' ages';
    console.log(arrKeysUpdate[i], ':', arrPror[i]);
}

//Другой вариант 

const person1 = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}

let objKeys = JSON.stringify(person1);
console.log(person1);

objKeys = objKeys.replace(/firstName/g, 'First name');
objKeys = objKeys.replace(/lastName/g, 'Last name');
objKeys = objKeys.replace(/age/g, 'Age');
objKeys = objKeys.replace(/location/g, 'Where to find');
let person2 = JSON.parse(objKeys);
console.log(person2);


// Задача 7
//Написать функцию, которая будет сравнивать 2 объекта и возращать true или false.

let obj1 = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}

let obj2 = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
}


function compare(a,b) {
    let aKeys = Object.keys(a);
    let aValues = Object.values(a);
    let bKeys = Object.keys(b);
    let bValues = Object.values(b);
    let flag = true;
    for (let i = 0; i < aKeys.length; i++){
        if(aValues[i]!=bValues[i] || aKeys[i]!=bKeys[i])
            return(flag = false);
        else
            return(flag = true);
    }   
}

console.log('Задача №7');
console.log(compare(obj1, obj2));
