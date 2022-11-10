let arr = [];
let n = +prompt('Введите желаемое число элементов массива:','');
for(let i = 0; i<n; i++){
    arr.push(+prompt('Введите элемент массива:',''))
};

// let odd = arr[0]; //в доп переменную положили первый элемент
// arr[0] = arr[arr.length-1]; //первому элементу присвоили значение последнего
// arr[arr.length-1] = odd; //последнему элементу присвоили значение первого
console.log(arr);
// console.log(arr.length);// счиатем кол-во элементов массива

let negative = [...arr];
negative.forEach(function(elem) {
        if(elem<0){
        // console.log(elem);
    }
    });

// let chet = [...arr];
let chet = (function(elem){
    return elem%2==0
});
console.log(chet);

// let sum = 0;
// arr.forEach(elem=>{sum+=elem});
// console.log(sum); //вывод суммы всех элементов

console.log(chet.length); //кол-во четных элементов


// let kp = 0;
// let k = 0;
//  arr.forEach(function(elem){
//         for(let i=2; i<elem; i++){
//             if(elem%i==0){
//                 k++;
//                 kp++;    
//             }
//         }
//         if(!k) return true
//         else return false; 
        
//     });
//     console.log(k);
                
              