const btn = document.querySelector('#ex1');

btn.addEventListener('click', () => {
    btn.classList.toggle('rouge');
})

const ex2 = document.querySelectorAll('.ex2')
const modale = document.querySelector('.modale')
ex2.forEach((btn) => {
    btn.addEventListener('click', () => {
        modale.classList.toggle('visible');
    })
})

const rectangle = document.querySelector('.rectangle')
const btnVert = document.querySelector('#vert')
const btnInit = document.querySelector('#initial')
const btnHide = document.querySelector('#hide')
const btnShow = document.querySelector('#show')

btnVert.addEventListener('click', () => {
    rectangle.classList.add('vert');
})

btnInit.addEventListener('click', () => {
    rectangle.classList.remove('vert');
})

btnHide.addEventListener('click', () => {
    rectangle.classList.add('hide');
})

btnShow.addEventListener('click', () => {
    rectangle.classList.remove('hide');
})

const burger = document.querySelector('#burger')
const body = document.querySelector('body')
burger.addEventListener('click', () => {
    body.classList.toggle('menu_visible');
})