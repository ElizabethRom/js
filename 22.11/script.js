// const animal = {};
// animal.name='животное';
// animal.age =50;
// console.log(animal);

// const cat = Object.create(animal);
// cat.name = 'кот';
// console.log(cat);

// const tiger = Object.create(cat);
// console.log(tiger.__proto__.__proto__.__proto__);//ссылки на прототипы

// Object.prototype.show=function(){
//     for(elem in this);
//     console.log(elem);
// }
// animal.show();

// const elHeader = document.getElementById('header');
// console.log(elHeader.innerText);
// const elP = document.getElementsByTagName('p');
// console.log(elP[1].innerText);
// const elPALL = document.querySelectorAll('p') //# - id .-class
// // elPALL.forEach((elem=>{
// //     console.log(elem.innerText)
// // }))
// let elemPALL=[];
// for(let i =0; i<elPALL.length;i++){
//     // document.write(`<li>`+ elPALL[i].innerHTML + `</li>`)
//     elemPALL.push(elPALL[i].innerText);
// }; //пишет сам список
// console.log(elemPALL);

// // elHeader.style.color='red';
// // elHeader.style.fontFamily='Arial';
// elHeader.classList.add('header');
// elHeader.classList.remove('header')

// const links = document.querySelectorAll('a');//1 variant
// const linksAll = document.links;
// const arr =[];
// for(let i=0; i<linksAll.length;i++){
// linksAll[i].classList.color=('link');
// arr.push({'text':linksAll[i].innerText,'href':linksAll[i].href});
// }
// console.log(arr);

function mas(){
    alert('hi')
}

function masBye(){
    alert('bye')
}
// idDiv.onclick=mas;
idDiv.addEventListener('click',mas,);
idDiv.addEventListener('click',masBye,);
idDiv.addEventListener('mouseover',function(){
    this.style.background = `red`;
});
idDiv.addEventListener('mouseout',function(){
    this.style.background = `bisque`;
});
inp.addEventListener('click',function(event){
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX,event.clientY);
    console.log(this.style.background = "blue");
    idDiv.classList.toggle('hidden')
})