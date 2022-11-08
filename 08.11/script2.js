//создать функцию которая образовать массив случайных чисел
function getArray(n){
    let array=[];
    for(let i=0;i<n;i++){
        array[i]=Math.floor(Math.random()*101)//числа от 0 до 100
    }
    return array;
};
let arr=getArray(10);
// console.log(arr);

let k = 0;
function calcNull(n){
    n.forEach(function(elem){
        if(elem==0){
        k++;
        }
    });
    return k;
}
    // console.log(calcNull(arr));

    function removeNull(array){
       for(let i=array.length; i>=0; i--){
            if(array[i]==0){
                array.splice(i,1)
            }
        }
        return array;
    }

    // removeNull(arr);
    console.log(arr);

    //увеличить все четные элементы на 1
    function changeArray(array){
        for(let i=0; i<array.length; i++){
            if(array[i]%2==0){
                array.splice(i,1,array[i]+1)
            }
        }

        return array;
    }
    // changeArray(arr);
    // console.log(arr);

//существуют ли в массиве нули

if(arr.indexOf(0)>0){
    console.log(`В массиве есть нули`)
} else {
    console.log(`В массиве нет нулей`)
}

//существуют ли 1 return treu or false
if(arr.includes(1)){
    console.log(`В массиве есть 1`)
} else {
    console.log(`В массиве нет 1`)
}
//проверить наличие нулей и отчистить их возвращает новый массив
let brr = [];
brr = arr.filter(function(elem){
    return elem !==0;
})
console.log(`без нулей:`,brr)

//возвращает элементы больше 5 
let bra = [];
bra = arr.filter(function(elem){
    return elem > 5;
})
console.log(`больше 5:`,bra)

let brr1 = [];
brr1 = arr.filter(function(elem){
    return elem%2>0;
})
// console.log(`нечетные:`,brr1)

//arr.map новый массив с результатами
let crr =[];
crr = arr.map(function(elem){
    return elem*2
})
// console.log(crr);

//создат новый массива из квадратов текущих элементов
let kvadrat = arr.map((elem)=> elem*elem);
console.log(kvadrat);

//посчиатт сумму элемментов через reduce
let result= arr.reduce(function(sum,elem){
    return sum+elem;
},0);
// console.log(`sum=`+result)

let resul= arr.reduce(function(sum,elem){
    if(elem>=10 && elem<=50)
    return sum+elem;
    else return sum
},0);
console.log(`sum=`+resul)