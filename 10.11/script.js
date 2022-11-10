// function getArray(n){
//     let array=[];
//     for(let i=0;i<n;i++){
//         array[i]=Math.floor(Math.random()*10)//числа от 0 до 100
//     }
//     return array;
// };
// let arr=getArray(5);
// console.log(arr);
// let arr2=getArray(3);
// console.log(arr2);

// function getMaxnum(array){
//     let max = array[0];
// for(let i=0; i<array.length; i++){
//     if(array[i]>max){
//         max=array[i];
//     }
// } return max
// };
// console.log(getMaxnum(arr));
// console.log(getMaxnum(arr2));
// let result;
//  if(getMaxnum(arr)>getMaxnum(arr2)){
//    result= console.log(`${getMaxnum(arr)} больше ${getMaxnum(arr2)}`)
// }else if(getMaxnum(arr)<getMaxnum(arr2)){
//     result =  console.log(`${getMaxnum(arr2)} больше ${getMaxnum(arr)}`)
// }else{
//     (`${getMaxnum(arr2)} равны ${getMaxnum(arr)}`)
// }

// //из 2 массива удалить все элементы которые повторятются 
// function arrCompare(arr,brr){
//     arr.forEach((elem,i) => {
//         brr.forEach((elem2,i2)=>{
//             if(elem==elem2){
//                 brr.splice(i2,1)
//             }
//         });
//     });
// }
// arrCompare(arr,arr2)
// console.log(arr2)

//dz

// let arr = [2,2,3,4,0,5,6,6];
// let newArr = arr.slice(0,arr.indexOf(0))
// console.log(newArr)
// ///*функция принимает массив и возвращает новый массив,состоящий из чисел, которые больше среднеарифметического значения (сумма всех чисел деленная на количество)
// let arifm = arr.map...;
// let arr2 = arr.filter(elem => {
//     return elem > arifm;
// })