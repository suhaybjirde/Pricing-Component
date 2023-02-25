const toggler = document.querySelector('.toggler')


const professionalPrice = document.querySelector('.main__professional .price');
const masterPrice = document.querySelector('.main__master .price');
const basicPrice = document.querySelector('.main__basic .price');



toggler.addEventListener('click', ()=> {
    let circle = toggler.firstChild
    circle.classList.toggle('monthly')

 
    basicPrice.innerHTML = circle.classList.contains('monthly') ? '19.99' : '199.99'
    professionalPrice.innerHTML = circle.classList.contains('monthly') ? '24.99' : '249.99'
    masterPrice.innerHTML = circle.classList.contains('monthly') ? '39.99' : '399.99'
})