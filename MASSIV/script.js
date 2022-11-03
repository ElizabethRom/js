// //МАССИВЫ
// let colors = ['black','pink','white'];
// colors[3]= 'yellow';
// colors[1]= 'purple';
// colors[9]= 'brown';
// // console.log(colors);

// // colors= ['red'];
// // console.log(colors);
// let n = colors.length;
// // console.log(n)
// // console.log(colors[0],colors[n-1]);

// // console.log(...colors);// spread ...
// let color_bg = [...colors];
// // console.log(color_bg)
// color_bg[0] = 'gray';


// let colorTxt = colors;
// colors[0] = '#0909'

// colorTxt[0]='#fff';
// console.log(colors);

// colorTxt=['black'];
// colors=['green','gray'];
// let colorFull=[...colorTxt,...colors];
// console.log(colorFull);

// let user = ['Liza','Serg','Petr','Ivan'];
// let admin =['tom','Kris'];
// user[user.length]='Krop';//добавить пользователя в массив user
// admin[0]='Pop';//изменить первого пользователя
// user[user.length-1]= 'Keks';//изменить последнего пользователя
// let users =[...user,...admin];//объединитт массивы
// console.log(users.length); //подсчитать кол-во элементов
// let people = [...users];//независимый массив с элементами users
// people[people.length]= 'Marina', 'Ira';//добавить в массив еще двух пользователей
// console.log(users);

// people[people.length-1]= '';
// console.log(people);

let arr = [];
for(let i=0; i<3; i++){
    arr[i]=+prompt('Введите число:','');
};


// arr.forEach(function(elem) {
//     if(elem>0){
//     console.log(elem);}
// });

// arr.forEach(function(elem,i){
//     console.log(`arr[${i}] = ${elem}`)
// });

// let sum=0;
// arr.forEach(function(elem,i){
//     if(elem>0){
//     sum+=elem};
// });
//  console.log(`sum=${sum}`);
//второй вариант для ленивых через стрелочную функицю
//  arr.forEach(elem=>{sum+=elem});

// push()//добавляет элемент в конец
// pop()//удаляет последний элемент

// let n = arr.push(+prompt('Введите число',''));//добавляет элемент и возвращает длину массива
// console.log(arr);
// console.log(n);
// let last = arr.pop()//добавляет последний элемент и возвращает его;
// console.log(last);

//массив из положительных чисел
// let arrPos=[];
// arr.forEach(function(elem){
//     if(elem>0) arrPos.push(elem);
// })
// console.log(arrPos);

// unshift//добавляет первый элемент
// shift//удаляет первый элемент

arr.unshift(0);

arr.shift();
arr.shift();
console.log(arr);