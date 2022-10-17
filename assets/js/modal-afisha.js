const payBtn =  Array.from(document.querySelectorAll('.afisha__button'));
const modalAfishaBackground = document.querySelector('.modal-window-afisha');


payBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    modalAfishaBackground.classList.add('modal-window-opacity')
  })
})