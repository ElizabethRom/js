//создать массив из 10 рандомных чисел
let arr = [];
for ( let i = 0; i < 10; i++ ) {
    arr.push( Math.round( Math.random() * 5 ));
};
console.log(arr);

//функция принимает массив и возвращает мaксимальный элемент 
function getMaxnum(array){
    let max = array[0];
for(let i=0; i<array.length; i++){
    if(array[i]>max){
        max=array[i];
    }
} return max
};
// console.log(getMaxnum(arr));

//подсчитать, сколько раз повторяется максимальный элемент

let result = arr.reduce(function(count,elem){
    if(elem==getMaxnum(arr)){
        count++
    } else {
     1
    }
    return count
},0);
// console.log(result);

//функция принимает массив возвращает новый массив,состоящий из разницы максимального и текущего элемента
let value;
let array=arr.map(function(elem){
      return value = getMaxnum(arr)-elem;
     
},0) 
    // console.log(array);

//функция принимает массив и возвращает новый массив при условии, что в исходном массиве есть элемент равный 0 и новый массив 
//будет состоять из всех элементов до первого 0. 
let newArr = arr.filter(function(elem){
    if(elem==0){
    arr.splice(1,arr.length)  
    }
     return arr
},0)
// console.log(newArr)

//Функция принимает массив и возвращает его без повторяющихся элементов
let unique = arr.filter(function(elem,id){
    return arr.indexOf(elem) === id;
})
console.log(unique)
//*функция принимает массив и возвращает новый массив,состоящий из чисел, которые больше среднеарифметического значения (сумма всех чисел деленная на количество)
