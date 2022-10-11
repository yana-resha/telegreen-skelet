const listPart = Array.from(document.querySelectorAll('.tarifs__list-part'))
const bottomList = Array.from(document.querySelectorAll('.tarifs__list-part-bottom'))

listPart.forEach(el => {
  el.addEventListener('click', () => {
    
    bottomList.forEach(list => {
      list.classList.toggle('visible')
    })
  })
})