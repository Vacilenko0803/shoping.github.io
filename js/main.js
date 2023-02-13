//menu fixed====================================
window.onscroll=function showMenuFixed(){
	let menuFixed = document.querySelector('.menu');
	let keyFixed = document.querySelector('.item__entrance');
	let cardFixed = document.querySelector('.header__link-Card');
	let burgerFixed = document.querySelector('.menu__burger');
	let titleFixed = document.querySelector('.menu__list');
	let headerTitleFixed = document.querySelector('.header__title');


	if(window.pageYOffset > 180){
		menuFixed.classList.add('menu-fixed');
		keyFixed.classList.add('key-fixed');
		cardFixed.classList.add('card-fixed');
		burgerFixed.classList.add('burger-fixed');
		titleFixed.classList.add('fixed-list');
		headerTitleFixed.classList.add('header-titel-menu-fixed');
	}else {
		menuFixed.classList.remove('menu-fixed')
		keyFixed.classList.remove('key-fixed');
		cardFixed.classList.remove('card-fixed');
		burgerFixed.classList.remove('burger-fixed');
		titleFixed.classList.remove('fixed-list');
		headerTitleFixed.classList.remove('header-titel-menu-fixed');
	}

};
//menu fixed====================================//menu fixed====================================//menu fixed====================================//menu fixed===================================

//burger=========================================================
$(document).ready(function(){
	$('.menu__burger').click(function (event) {
		$('.menu__burger,.menu__list').toggleClass('focus');
		$('body').toggleClass('lock');
	})
});
//burger=========================================================

$('.content__slider').slick({
	dots:true,//точки

	adaptiveHeight: true,
	arrows:true,//стрелки
	centerMode: true,
  slidesToShow: 1,
	slidesToScroll: 1,
	autoplay:true,
	autoplaySpeed:4000,
	waitForAnimate:true,
	variableWidth:true,//автоматическая отзывчивость
	centerMode:true,
	responsive:[
		{
			
			breakpoint:1000,
			
			settings:{
				arrows:false,
				slidesToShow: 1,
        slidesToScroll: 1,
				variableWidth:false,
				adaptiveHeight: true,
				centerMode:false,
			}
		},
		{
			breakpoint:780,
			settings:{
				arrows:false,
				slidesToShow: 1,
				variableWidth:false,
				adaptiveHeight: true,
				centerMode:false,
			}
		}
	]
});



