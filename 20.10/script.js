//   let plus = 0, minus = 0, not = 0, chet = 0, nechet = 0;
//   let i = 0;
//   while(i<=9){ 
//     let number = +prompt('Введите число:','');
//     i++;
//     if(number>0) { plus++ };
//     if(number<0) { minus++ };
//     if(number==0) { not++ };
//     if(number%2==0) { chet++ };
//     if(number%2!==0) { nechet++ };
//   } 
//   console.log(plus);
//   console.log(minus);
//   console.log(not);
//   console.log(chet);
//   console.log(nechet);


// let sum=0;
// while(true){
// let number = +prompt('Введите число:','');
// if(number!=0){
// sum += number;
// console.log(sum);
// } else { break }
// }
// одно и тоже
// let num, sum=0;
// while(true){
//     num=+prompt('Введите число:','');
//     if(!num) break;
//     sum+=num
// }
// alert(sum);


// let i =0;
// do{
//     ++i;
//     if(i==4) continue;
//     console.log(`i=${i}`);
// }
// while(i<10) ;



// let num = 0, sum = 0, random;
// do{
//     num++;
//     random=Math.floor(Math.random() * 10)+1;
//     console.log(random);
//     if(random !=6) continue;
//     sum++;
// } while(num<10);
// console.log(`цифра 6 была ${sum} раз`);

// let min=1, max=100, s, stop=true;
// alert(`Загадайте число в диапазоне от 1 до 100`);
// do{
//     num=Math.floor((max+min)/2);
//     s=+prompt(`Ваше число больше ${num}- введите 1 \n
//     Ваше число меньше ${num} - введите 2 \n
//     Ваше число равно ${num} - введите 3 \n`);
//     switch(s) {
//         case 1:
//         min=num;
//         break;

//         case 2:
//         max=num;
//         break;

//         case 3:
//             alert(`Ваше число ${num}`);
//             stop=false;
//         break;

//         default:
//         alert(`Число некорректно!`);
//         break;
//     }
// } while(stop)


let player_select, player_score=0;
let comp_select, comp_score=0;

for(let i=1; i<3; i++){
    alert(`Раунд № ${i}`);
    player_select = prompt('Выберите К-камень \n Н-ножницы \n Б-бумага','');
    comp=Math.floor(Math.random() * 3)+1;
    if(comp_select == 1){
        switch(player_select){
            case 'К':
            player_score++;
            comp_score++;
            alert(`Ничья!`);
            break;
            case 'Н':
            comp_score++;
            alert(`1 очко в пользу компа!`);
            break;
            case 'Б':
            player_score++;
            alert(`1 очко в вашу жопу!`);
            break;
            default:
            alert(`Значение некорректно!`);
            break;
        }
    } else if(comp_select == 2){
        switch(player_select){
            case 'К':
            player_score++;
            alert(`1 очко в вашу жопу!`);
            break;
            case 'Н':
            player_score++;
            comp_score++;
            alert(`Ничья!`);
            break;
            case 'Б':
            comp_score++;
            alert(`1 очко в пользу компа!`);
            break;
            default:
            alert(`Значение некорректно!`)
            break;
        }
    }else if (comp_select == 3){
        switch(player_select){
            case 'К':
            comp_score++;
            alert(`1 очко в пользу компа!`);
            break;
            case 'Н':
            player_score++;
            alert(`1 очко в вашу жопу!`);
            break;
            case 'Б':
            comp_score++;
            player_score++;
            alert(`Ничья!`);
            break;
            default:
            alert(`Значение некорректно!`)
            break;
        }
    };
    if(comp_score<player_score){
        alert(`Вы победили!`)
    };
    if(comp_score>player_score){
        alert(`Вы проиграли!`)
    };
    if(comp_score=player_score){
        alert(`У вас ничья!`)
    }
}