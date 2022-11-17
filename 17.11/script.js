// //создать объкт под названием юзер 
// const user = {
//     name: 'Liza',
//     age: 20,
// };
// // console.log( user.age);
// user.address='Rostov-on-Done'; //добавить свойство со значением
// user['year birthday']='2002';//добавить свойство с пробелом и обращаться к нему только через массивные скобки
// // console.log( user['year birthday'],user.name);

// let key = 'age';
// user[key];

// user[key]=30;
// // console.log(user[key]);

// //удаление элементов
// delete user['year birthday'];
// console.log(user);

// //проверка существоания свойства
// console.log('age' in user);
// console.log(user['year birthday'] !== undefined);
// console.log(user.hasOwnProperty('age'));

//перебор и вывод свойств
// for(let key in user){
//     // console.log(key);
//     console.log(`${key}:${user[key]}`)
// }

// if(user['age']>20){
//         console.log('Пора работать!')
// } else{
//         console.log('Учись!')
// }

// const salary={
//     Jon: 100,
//     Ann: 160,
//     Pete:130,
//     oplata: 'dollar',
// };

// let sum=0;
// for(let key in salary){
//     if(typeof(salary[key])==='number'){sum+= salary[key]}
// };
// console.log(`${sum} ${salary['oplata']} в час `)



