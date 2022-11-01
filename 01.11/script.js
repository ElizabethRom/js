// function getMin(a,b){
//     if(a>b) return b
//          return a;
// } 
//     console.log(getMin(2,3));

// function logNum(){
//     let k = arguments.length;
//     let sum = 0;
//     for(let i=0; i<k; i++){
//        if(typeof(arguments[i]) === 'number'){
//      console.log(arguments[i]);
//        sum += arguments[i];
//        }
//     }
//     console.log(sum);
// }
// logNum(1,3,10,'a', 'hello world', -4);

//наименьшее из множества
// function getMax(){
//     let k = arguments.length;
//     let sum = arguments[0];
//     for(let i=0; i<k; i++){
//        if(sum<arguments[i]){
//        sum = arguments[i];
//        }
//     }
//     return sum;
// }
// console.log(getMax(1,3,10, -4));

// function getMax(a,b, ...args){
//     let k = args.length;
//     let sum = args[0];
//     for(let i=0; i<k; i++){
//        if(sum<args[i]){
//        sum = args[i];
//        }
//     }
//     return sum;
// }
// console.log(getMax('Счет','Максимальное',1,5,8,0,2,-1,2));

//ФАКТОРИАЛ ЧИСЛА

// function factorial(n){
//     if(n==1) return 1
//     return n*factorial(n-1);
// }
// let result = factorial(3);
// console.log(result);

// let num = 10;

// function displayNum(num) {
// if (num == 1) return 1;
// return displayNum(num - 1) + ' ' + num;
// }
// console.log(displayNum(num));

// let num = 10;

// function displayNum(num) {
// if (num == 2) return 2;
// return num + ' ' + displayNum(num - 1) ;
// }
// console.log(displayNum(num));

// let num = 10;

// function displayNum(num) {
// if (num == 2) return 2;
// return num + ' ' + displayNum(num - 2) ;
// }
// console.log(displayNum(num));

// let RevNumber = +displayRetNumber(12345);
// console.log(RevNumber);

// function displayRetNumber(n) {

// if (n < 10) return n
// else {
// return n % 10 + '' + displayRetNumber(Math.floor(n /
// 10));
// };
// }
// console.log(12345 % 10000 * 10 + Math.floor(12345 / 10000));
// function displaysdvigNumber(n, s) {
//     if (s <= 0) return n
//     else {
//     return displaysdvigNumber((n % 10000 * 10 + Math.floor(n /
//     10000)), s - 1);
//     }
//     }
    
//     let sdvigNumber = displaysdvigNumber(12345, 1);
//     console.log(sdvigNumber);

//МАССИВЫ
// let num=[1,2,3,4];
// for(let i=0; i<num.length; i++){
//  console.log(`num[${i}]= ${num[i]}`);
// }

let[a] =+prompt('Введите число','');
for(let i=0; i<5; i++){
 console.log(`a[${i}]= ${a[i]}`);
}