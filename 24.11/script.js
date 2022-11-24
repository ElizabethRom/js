const titles = document.querySelectorAll('.title');

for(elem of titles){
    elem.addEventListener('click', function(){
        this.classList.toggle('open')
    })
};

console.log(menu.children[1]);

console.log(titles[0].parentElement);

console.log(menu.lastElementChild)

