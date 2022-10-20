// let a = +prompt('Введите число для возведения в степень:',''); //2
// let b = +prompt('Введите степень:',''); //2
// let sum = 1;
// let i = 0;
// while(i<b) {
//     sum *= a;
//     i++;
// }
// alert(`sum= ${sum}`);

// let k = 0;
// let i = 1;
// let n = +prompt('Введите первое число','');
// let w = +prompt('Введите второе число','');
// while(n%i == 0 && w%i == 0) {
//     k++;
//     i++;
//     console.log(k);
// };
// alert (`Общих делителей: ${k}`);

// let n = +prompt('Введите число','');
//   let i = 1;
//   let k = 1;
//   while(i<=n) {
//     k *= i;
//     i++;
//   }
//   alert(`Факториал числа равен ${k}`);


let number = +prompt('Введите число:','');
  let plus = 0, minus = 0, not = 0, chet = 0, nechet = 0;
  let i = 1;
  while(i<=10){ //выводит 10 но запрашивает 11((
    let number = +prompt('Введите число:','');
    i++;
    if(number>0) { plus++ };
    if(number<0) { minus++ };
    if(number==0) { not++ };
    if(number%2==0) { chet++ };
    if(number%2!=0) { nechet++ };
  } 
  console.log(plus);
  console.log(minus);
  console.log(not);
  console.log(chet);
  console.log(nechet);