// let str= 'Hi, I am web developer';
// for(let elem of str){
//     // console.log(elem)
// };

// console.log(str[0].toLowerCase())
// console.log(str.toUpperCase())

let str = 'rubleva@mail.ru';
// console.log(str.indexOf('@'));

// () ? console.log(`Все ок!`) : console.log(`Неверный формат!`);
// (str.indexOf('.')!== -1 && str.indexOf('@')!== -1) ? console.log(`Все ок!`) : console.log(`Неверный формат!`)
// (str.includes('@')) ? console.log(`Все ок!`) : console.log(`Неверный формат!`);

let str1 ='Мама мыла раму'
// console.log(str1.indexOf('а'));
// let pos=0;
// do{
//     pos=str1.indexOf('а',pos);
//     console.log(pos);
//     pos=pos+1;
// }while();

let pos1 = -1;
while((pos1=str1.indexOf('а',pos1+1))!==-1){
    console.log(pos1);
}