// let i;
// for (i=1; i<5; i++) {
//     console.log(i);

// }
// console.log(i);

// let sum = 0;
// let n = +prompt('Введите число','');
// for(i=2; i<n; i++) {
//     if(n%i == 0 ){
//         sum++;
//     };
// };
// if( sum == 0){
//     alert(`Число простое`)
// } else {
//     alert(`Число составное`)
// }

//вывести числа от 1 до 5
// let i = 1, n = 5;
// while(i<=n) {
//     console.log(i);
//     i+=1; 
// }

// let i = +prompt('Введите число','');
// let n = +prompt('Введите число','');
// let sum;
// while(i<=n) {
//     console.log(i);
//     if(i>0) {sum=sum+i}
//     i+=1; 
//     }
//    alert(sum)

// let i = 1, n = 5;
// while(i<=n) {
//     console.log(i);
//     i+=1;
// }

// let number = parseInt(+prompt('Введите число',''));
// let summ = 0;
// while(number>0) {
//     summ+=number;
//     number = parseInt(+prompt('Введите число',''));
// }alert(`summ = ${summ}`);



// let number = parseInt(+prompt('Введите число',''));
// let summ = 0;
// let k = 0;
// while(number>0 || number<0 ) {
//     summ+=number;
//     number = parseInt(+prompt('Введите число',''));
//     k++ ;
// }alert(`среднее арифмитическое = ${summ/k}`);

// let number = parseInt(prompt('Введите число',''));
// let summ = 0;
// let k = 0;
// while(number || number == 0) {
//     summ+=number;
//     number = parseInt(prompt('Введите число',''));
//     k++ ;
// }
// alert(`среднее арифмитическое = ${summ/k}`);

// let number = parseInt(prompt('Введите число',''));
// let k = 0;
// while(number || number != 0) {
//     number = (number-(number%10))/10;
//     k++;
// }
// alert(`В числе ${k} цифр`);
// одна задача и два решения
// let number = parseInt(prompt('Введите число',''));
// let k = 0;
// while(number || number != 0) {
//     number = Math.floor(number/10);
//     k++;
// }
// alert(`В числе ${k} цифр`);