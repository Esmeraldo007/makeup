const menu = document.querySelector('.menu');
const navegation = document.querySelector('.navegation');
const formHeader = document.querySelector('header form');
const inputHeader = document.querySelector('header input');
const heart = document.querySelector('.heart');

heart.addEventListener('click', ()=>{
	heart.style.color = 'rgba(170, 20, 170)';;
	heart.style.background = 'white';

	const span = document.querySelector('header span');
	span.style.display = 'block';

	setTimeout(()=>{
		span.style.display = 'none'
	}, 600)
})

formHeader.addEventListener('click', ()=>{
	if(window.innerWidth < 311){
		inputHeader.classList.toggle('showInput');
		document.querySelector('header i.fa-xmark').classList.toggle('menuIcone');
		navegation.classList.remove('showMenu');
	}
})

menu.addEventListener('click', ()=>{
	navegation.classList.toggle('showMenu');
		inputHeader.classList.remove('showInput');
})
window.addEventListener('resize', ()=>{
	if(window.innerWidth >= 651){
		navegation.classList.remove('showMenu');
	}else if(window.innerWidth > 310){
		inputHeader.classList.remove('showInput');
	}
})
document.querySelector('.user').addEventListener('click', ()=>{
	window.location.href = "login.html";
})

document.querySelector('.background').addEventListener('click', ()=> 
		navegation.classList.remove('showMenu'))

document.querySelector('main').addEventListener('click', ()=> 
		navegation.classList.remove('showMenu'))

const allArticles = document.querySelectorAll('article');
const paragraphs = document.querySelectorAll('p');
const images = document.querySelectorAll('img');
const observaction = new IntersectionObserver((esmer)=>{4
	esmer.forEach(item=>{
		if(item.isIntersecting){
			item.target.classList.add('showArticles')
		}
	})
})
allArticles.forEach(items => observaction.observe(items));
paragraphs.forEach(items => observaction.observe(items));
images.forEach(items => observaction.observe(items));

