var next = document.querySelector("#next")
var prev = document.querySelector("#prev")
var thumbnail = document.querySelector(".thumbnail")
var hero = document.querySelector(".hero")

var bgimg = [
    
    
    ('images/bg1.png'),
    ('images/bg2.png'),
    ('images/bg3.png'),
    ('images/bg4.png'),
    ('images/bg5.png'),

]


  
let i = 0;


next.addEventListener('click', () => {
    if(i<4){
        hero.style.backgroundImage = 'url(" '+bgimg[i+1]+' ")'; 
        thumbnail[i+1].classList.add('active')
        thumbnail[i].classList.remove('active')
        i++;

    }
   
});
prev.addEventListener('click', () => {
    if(i>0){
        hero.style.backgroundImage = 'url(" '+bgimg[i-1]+' ")';
        thumbnail[i-1].classList.add('active')
        thumbnail[i].classList.remove('active')
       

        i--

    }
   
});




