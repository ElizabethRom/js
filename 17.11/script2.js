// const user = {
//     name: 'Liza',
//     birth: {
//         year: 2002,
//         place: 'Yeisk',
//     },
//     char:[89,180,200],
// };
// console.log(user.birth.place);
// console.log(user.char[0]);

//

// const book ={
//     title: 'Война и мир',
// };
// console.log(book);
// book.author = 'Лев Толстой';
// console.log(book.author);
// book.title = 'Анна Каренина';
// console.log(book);
// book.name=book.author;
// delete book.author;
// book['year publish'] = 1878;
// book['about author']={
//     birthday: '1828', 
//     genre: 'повести,романы,драмы',
// };
// console.log(book);

// function isEmpty(obj){
//     for (let key in obj){
//         return console.log(false);
// }
// return console.log(true);   
// }
// isEmpty(book);
//console.log(book)

//МЕТОДЫ ОБЪЕКТОВ
// const user = {
//     name:'Pet',
//     show: function(){
//         console.log(`hi! ${this.name}`);
//     },
//     bye(){
//     console.log(`bye! ${this.name}`); 
// },
// };
// user.show();
// user.bye();
// const person = {...user};
// console.log(person);
// person.name = 'Kit';
// person.show();

//СОЗДАНИЕ ОБЪEКТОВ ЧЕРЕЗ ФУНКЦИЮ
// function createObj(fName,fAge){
//     return{
//     name: fName,
//     age: fAge,
//     }
// }
// const user = createObj('Li',20);
// const person = createObj('Rok',25);
// console.log(user,person)

function createSquare(a1,b1,a2,b2){
    return{
        x1:a1,
        y1:b1,
        x2:a2,
        y2:b2,
    }
};
const rectangle = createSquare(0,5,7,0);
console.log(rectangle)

function showInfo(obj){
    for(let key in this){
        if(typeof(this[key]) !== 'function')
        console.log(`${key}: ${this[key]}`)
    }
}

rectangle.show=showInfo;
rectangle.show();

function widthRect(){
    return this.x2-this.x1
};

rectangle.width=widthRect;
console.log(rectangle.width());


function widthL(){
    return this.y1-this.y2
};
rectangle.lenght=widthL;
console.log(rectangle.lenght());

function widthS(){
    return rectangle.width()*rectangle.lenght()
};
rectangle.spl= widthS;
console.log(rectangle.spl());