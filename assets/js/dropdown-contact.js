
const btn = document.querySelector('.header__contacts-button')
const dropdown = document.querySelector('.header__dropdown-contacts');

btn.addEventListener('click', (e) => {
  dropdown.classList.toggle('dropdown--active')
})