const welcome = document.getElementById('welcome');

welcome.innerText = `Welcome, ${localStorage.getItem('nombre')} 😸`;


var radio = document.getElementById('radio-1');
btnMenu.addEventListener('click', function(){
    var navbar = document.getElementById('navbar');
    var btnMenu = document.getElementById('btnMenu');
   
    if(radio.checked){  
        setTimeout(() => {
            navbar.style.transform = 'translateX(-700px)';  
                setTimeout(() => {
                    btnMenu.style.transform = 'rotate(180deg)';
                },0);
        },1000);
    }
    else{
        setTimeout(() => {
            navbar.style.transform = 'translateX(0px)'
            setTimeout(() => {   
                btnMenu.style.transform = 'rotate(0deg)';   
            }, 0);
        },1000);   
    }
})


var cursos = document.getElementById('cursos');
var escuelas = document.getElementById('escuelas');
var idiomas = document.getElementById('idiomas');

function mostrarScroll(){
    var scrollTop = document.documentElement.scrollTop;
    var alturaCursos = cursos.offsetTop;

    if(alturaCursos-500 < scrollTop){
        cursos.style.opacity = 1;
        cursos.classList.add('scroll');
        cursos.style.translate = '0px';
    }else{
        cursos.style.translate = '400px';
        cursos.style.opacity = 0;
    }
}
function mostrarScroll2(){
    var scrollTop = document.documentElement.scrollTop;
    var alturaEscuelas = escuelas.offsetTop;

    if(alturaEscuelas-500 < scrollTop){
        escuelas.style.opacity = 1;
        escuelas.classList.add('scroll');
        escuelas.style.translate = '0px';
    }else{
        escuelas.style.translate = '-400px';
        escuelas.style.opacity = 0;
    }
}
function mostrarScroll3(){
    var scrollTop = document.documentElement.scrollTop;
    var alturaIdiomas = idiomas.offsetTop;

    if(alturaIdiomas-500 < scrollTop){
        idiomas.style.opacity = 1;
        idiomas.classList.add('scroll');
        idiomas.style.translate = '0px';
    }else{
        idiomas.style.translate = '400px';
        idiomas.style.opacity = 0;
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScroll2);
window.addEventListener('scroll', mostrarScroll3);

var eduNav = document.getElementById('eduNav');
var idiomasNav = document.getElementById('idiomasNav');
var content = document.getElementById('contentNav');
var reconocimientos = document.getElementById('reconocimientosNav');
var navbar = document.getElementById('navbar');

reconocimientos.addEventListener('click', function(){
    navbar.style.background = 'linear-gradient(to top, #a7d692,#9594ce, #cbb4d4)';
})
content.addEventListener('click', function(){
    navbar.style.background = 'linear-gradient(to top, #4BC0C8, #C779D0, #FEAC5E)';
})
eduNav.addEventListener('click', function(){
    navbar.style.background = 'linear-gradient(to bottom, #43c6ac,#9594ce, #d5a171, #9594ce)';
})
idiomasNav.addEventListener('click', function(){
    navbar.style.background = 'linear-gradient(to bottom, #9796f0,#9594ce, #fbc7d4,#e4d981)';
})

