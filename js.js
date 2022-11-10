const button=document.querySelectorAll(".span1");
const img=[
    {imgdes:"offers.jpg"},
    {imgdes:"offerh.jpg"}
]
var number=0;
const imgback=document.querySelector(".back");


button[0].addEventListener("click",prev);
function prev(){
    number--;
    if(number<0){
        number=1;
        imgback.src=img[number].imgdes; 
        console.log(img[number])
        return
    }
    if(number>=0){
        number=0;
        imgback.src=img[number].imgdes;
        console.log(img[number])
        return
    }
}

button[1].addEventListener("click",forward);
function forward(){
    number++;
    if(number==2){
        number=0;
        imgback.src=img[number].imgdes; 
        console.log(img[number])
        return
    }
    else{
        number=1;
        imgback.src=img[number].imgdes;
        console.log(img[number])
        return
    }
}

var n=0;
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const service=[
    {
        img1:"milk.jpg",
        img2:"Bhujiya.jpg"
    },
    {
        img1:"juice.jpg",
        img2:"Masala.jpg"
    }
]
const button1=document.querySelectorAll(".span2")
console.log(button1)
button1[0].addEventListener("click",prev1);
function prev1(){
    n--;
    if(n<0){
        n=1;
        img1.src=service[n].img1; 
        img2.src=service[n].img2;
        return
    }
    if(n>=0){
        n=0;
        img1.src=service[n].img1;
        img2.src=service[n].img2;
        return
    }
}

button1[1].addEventListener("click",forward1);
function forward1(){
    n++;
    if(n==2){
        n=0;
        img1.src=service[n].img1; 
        img2.src=service[n].img2;
        return
    }
    else{
        n=1;
        img1.src=service[n].img1;
        img2.src=service[n].img2;
        return
    }
}



var value=0;
const img3=document.querySelector(".img3");
const img4=document.querySelector(".img4");
const servicein=[
    {
        img3:"raisoni.jfif",
        img4:"rcoem.jpg"
    },
    {
        img3:"allen.png",
        img4:"iit-home.jpg"
    }
]
const button2=document.querySelectorAll(".span3")
console.log(button2)
button2[0].addEventListener("click",prev2);
function prev2(){
    value--;
    if(value<0){
        value=1;
        img3.src=servicein[value].img3; 
        img4.src=servicein[value].img4;
        return
    }
    if(value>=0){
        value=0;
        img3.src=servicein[value].img3;
        img4.src=servicein[value].img4;
        return
    }
}

button2[1].addEventListener("click",forward2);
function forward2(){
    value++;
    if(value==2){
        value=0;
        img3.src=servicein[value].img3; 
        img4.src=servicein[value].img4;
        return
    }
    else{
        value=1;
        img3.src=servicein[value].img3;
        img4.src=servicein[value].img4;
        return
    }
}