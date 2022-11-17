//Написать функцию, которая считает количество слов в предложении
// function getCountWord(string){
// let word = prompt('Введите предложение для подсчета кол-ва слов');
// return word.split(' ').length;
// }
// console.log(getCountWord())

//Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
//Например: cascading style sheets в CSS, объектно ориентированное программирование в ООП.
// function getAbbr(string){
//     let phrase = prompt('Введите словосочетания для формирования аббревиатуры');
//     phrase = phrase.split(' ').map(i => i[0].toUpperCase()).join('')
//     console.log(phrase)
// }
// getAbbr()

//Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, а цифры – на знак нижнего подчеркивания.
// function changeWord(string){
//     let str = prompt('Введите предложение для изменений');
//     str= str.replace(/\d/g, '_');
//     if(str.toUpperCase()) {str = str.toLowerCase()}
//     console.log(str);
// }
// changeWord();

// Написать функцию, которая преобразует названия css стилей с дефисом в название в СamelСase стиле:font-size в fontSize, 
// background-color в backgroundColor,textalign в textAlign.
function changeCSS(string){
    let style = prompt('Введите CSS стиль для преобразования');
    
    console.log(style);
}
//. Написать функцию, которая проверяет, что введенный телефон соответствует шаблону, пример телефона: 55-55555
// Написать функцию, которая проверяет, что введенный телефон соответствует шаблону, пример которые соответствуют одному шаблону:+7(960)111-11-11, 8(563)111-11-11,
// 8(563)11111-11,8(563)1111111