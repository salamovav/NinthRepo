// Задание 1

let btn1=document.querySelector('.btn1');
let wrapper1=document.querySelector('.wrapper1');
let array1=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12","13","14","15"];
let i=0;
let j=5;
console.log(array1);
btn1.onclick=function(){
    j += i;
    for (i; i<j && i< array1.length; i++){
        wrapper1.innerHTML += array1[i] + "<br />";
        console.log(array1[i]);
    }
}

// Задание 2 и 3

let btn2=document.querySelector('.btn2');
let btn3=document.querySelector('.btn3');
let wrapper2=document.querySelector('.wrapper2')
let wrapper3=document.querySelector('.wrapper3');
let array2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array2);


btn2.onclick=function(){
    for(i=0;i < array2.length; i++ ) {
        if (array2[i] % 2 === 0)
        wrapper2.innerHTML += array2[i] + '<br />';
}
}
btn3.onclick=function(){
    for(i=0;i< array2.length;i++ ) {
        if (array2[i] % 2 !== 0)
        wrapper3.innerHTML += array2[i] + '<br />';

}
}
// Задание 4

let btn4=document.querySelector('.btn4');
let wrap4=document.querySelector('.wrapper4');
let b=[
    ['7','8','9'],
    ['4','5','6'],
    ['1','2','3']
]
console.log(b);
btn4.onclick=function(){
for(let i=0;i<b.length;i++){
    let c=b[i]
    for(let j=c.length-1; j>=0;j--){
    wrap4.innerHTML += c[j]+ '<br />';
        console.log(c[j]);
}
}
}