// let n = +prompt('Введите число:','');
// for (let i = 1; i<=n; i=i+2) {
//     console.log(i);
// }
// let k = 0;
// for (let i=10; i<=17; i=i+2) {
//     if(i%2 == 0){
//     console.log(i);
//      k++;
//     };
// };
// console.log(k);

// for (let i=10; i<=990; i++) {
//     if (i%100 == 0) {
//     console.log(i);
//     }
// };
// let sum = 0;
// let n = +prompt('Введите число:','');
// for (let i=1; i<=n; i++) {
//      sum = sum+i;
// }
// console.log(`sum=${sum}`);

// let p=1;
// let n = +prompt('Введите число:','');
// for (let i=1; i<=n; i++) {
//     p=p*i;
// }
// console.log(`p=${p}`);

// let p = 1;
// let n = +prompt('Введите число:','');
// let t = +prompt('Введите число:','');
// for (let i=t; i<=n; i++) {
//         p=p*i;
//     }
//     console.log(`p=${p}`);

//     let p = 1;
// let n = +prompt('Введите число:','');
// let t = +prompt('Введите число:','');
// for (let i=n; i>=t; i++) {
//         p=p*i;
//     }
//     console.log(`p=${p}`);


// let p = 1;
// let n = +prompt('Введите число:','');
// let t = +prompt('Введите число:','');
// for (let i=n; i<=t; i++) {
//     if(i%2==0){
//         p=p*i;
//         console.log(i);
//     }
//     }
//     console.log(`p=${p}`);

let result = 0;
let x;
for (let i=1; i<=5; i++) {
    x = parseInt(prompt('x=',''));
    result= result+x;
    }
    alert(`${result}`);