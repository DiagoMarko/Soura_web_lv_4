//---------Set_Variables_Start----------------->
let openIcon  = document.querySelector('.fa-bars');
let closeIcon = document.querySelector('.fa-close');
let list      = document.querySelector('.list');
let header    = document.querySelector('header');
let tab       = document.querySelector('.tab');
let showImg   = document.querySelector('.show-img');
let width     = screen.width;
let vidIcon   = document.querySelector('.vid-icon');
let vdMate    = document.querySelector('.vd-mate');
let vdMateSpa = document.querySelector('.vd-mate span');
let imgs      = document.querySelectorAll('.imgs');
let pricing1  = document.querySelector('.pricing-1');
let pricing2  = document.querySelector('.pricing-2');
let h1        = document.querySelectorAll('.kokes h1');
let qustion   = document.querySelectorAll('.qustion');
let backdrop  = document.querySelectorAll('.backdrop p');
let span1     = document.querySelector('.eyes1 span');
let span2     = document.querySelector('.eyes2 span');
let animate   = document.querySelector('.animate');
let iframe    = document.querySelector('iframe');
let index     = 0; 
let num1      = 0;
let num2      = 0;
let num3      = 0;
let num4      = 0;
//---------Set_Variables_End----------------->

//---------TO Open List Function--------->
openIcon.addEventListener('click',show);
function show(){
    list.classList.add('show-list');
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
}
//---------TO Close List Function--------->
closeIcon.addEventListener('click',hidden);
function hidden(){
    list.classList.remove('show-list');
   closeIcon.style.display = "none";
   openIcon.style.display = "block";
}
//--------To Add Bck Face For Header-------->
window.addEventListener('scroll',add);
function add(){
       header.classList.toggle('add',window.scrollY > 100);
}
//---------Tab Move Animation-------
tab.addEventListener('mouseenter',move);
function move(){
    showImg.classList.add('move');
}
tab.addEventListener('mouseleave',move2);
function move2(){
    showImg.classList.remove('move');
}
//---------Show Vidio Class--------->
vidIcon.addEventListener('click',function(){
    vdMate.classList.add('vd-mate-show');
    iframe.src = 'http://www.youtube.com/embed/jNJCdxMf0t8?autoplay=1';
})
//---------Hidden Vidio Class--------->
vdMateSpa.addEventListener('click',function(){
    vdMate.classList.remove('vd-mate-show');
    iframe.src = '';
})
//----------Swiper Animation---------->
window.addEventListener('load',moveSiwper);
function moveSiwper(){
    if(index === imgs.length-1){
        index = 0;
    }else{
        index++;
    }
   imgs.forEach(s => s.classList.remove('activ-imgs'))
   imgs[index].classList.add('activ-imgs');
   setTimeout(moveSiwper,2000);
}

//-------------Card Animation---------------------->
pricing1.addEventListener('mouseenter',function(){
    pricing1.classList.add('urs')
})

pricing1.addEventListener('mouseleave',function(){
    pricing1.classList.remove('urs')
})
pricing2.addEventListener('mouseenter',function(){
    pricing2.classList.add('urs')
})

pricing2.addEventListener('mouseleave',function(){
    pricing2.classList.remove('urs')
})
//-------------DropDown Function Event------------>
qustion.forEach(s => s.addEventListener('click',dropDown));

function dropDown(){
    let prgraph = this.nextElementSibling;
    prgraph.classList.toggle('drop-down-show');
    this.classList.toggle('munise');

}

//----------TO hide Aniamtion Load Page----------->
window.onload = function(){
    setInterval(() =>{
      animate.classList.add('hide-animate')
    },3000)
}