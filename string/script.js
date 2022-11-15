// let username, surname, age, hello;
// username = prompt('Введите ваше имя:','');
// surname= prompt('Введите вашу Фамилию','');
// age = prompt('Введите ваш год рождения:','');
// username = username.trim();
// surname = surname.trim();
// age = age.trim();
// let welcome = `Здравствуйте, ${username}  ${surname}.`;

// (parseInt(age)<=2004) ? hello= `Доступ разрешен, так как вам уже ${2022-age};)` : hello= `Доступ запрещен, так как вам всего ${2022-age};(`;
// let message = welcome.concat(`\n`, hello)
// alert(message)

// let message = 'Добрый день. Сегодня была прекрасная погода';
// message = message.split(` `).join(`_`);
// console.log(message)

// let str = '1 2 3 4 5 6 7 8 9';
// str= str.split(' ');
// str= str.reduce((sum,elem) => {return sum+= parseInt(elem)},0)
// console.log(str);

// let message = 'Добрый день. Сегодня была прекрасная погода';
// message = message.replace('день', 'вечер').replace('прекрасная', 'ужасная');
// console.log(message);

// let mes = 'Добрый день. Этот день прекрасен. День';
// for(let elem of message){ 
//     message = message.replace('день', 'вечер')}
// console.log(message);

// let str = 'я люблю аниме';
// str = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str);
// mes = mes.replace(/\s/g, '_')
// console.log(mes);

let str = 'Елизавета';
let res = /^[^0-9]+$/gi;
// let res = /^[A-Za-zA-Яа-я\s]+$/g;
let reg= res.test(str)
console.log(reg)