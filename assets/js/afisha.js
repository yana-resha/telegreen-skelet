
const afishaList = document.querySelector('.afisha__list');
const arr = [];

const root = document.querySelector('.afisha__observer');
const searchButton = document.querySelector('.submit-search');
const inputSearch = document.querySelector('.afisha__input');





function createAfisha (arr) {
  
  for (let i = 0; i < 20; ++i) {
    const afishaObj = {
      eventName: '"Музей иллюзий" на ВДНХ',
      eventCategory: 'Выставка',
      date: '27 мая – 31 октября',
      name: 'Музей оптических иллюзий',
      eventImg: '../assets/img/afisha-img.jpg',
      description: 'Большое пространство, разделенное секциями, на стенах и полу специальным образом нарисованы различные картины. Встав на указанные точки, посетитель может сделать фото, на котором будет казаться, что он – часть картины.',
      officialSite: 'https://вднх55.рф/attractions/illusionsvdn',
      priceTo: '700'
    }
    arr.push(afishaObj)
  }

  arr.forEach(el => {
    const afishaPart = document.createElement('li');
    afishaPart.classList.add('afisha__list-part');
    const afishaImgBlock = document.createElement('div');
    afishaImgBlock.classList.add('afisha__part-img')
    const afishaImg = document.createElement('img');
    afishaImg.src = el.eventImg;
    afishaImg.alt = 'Изображение события';
    const afishaContentBlock =  document.createElement('div');
    afishaContentBlock.classList.add('afisha__part-content');
    const  afishaContentBlockTitle =  document.createElement('div');
    afishaContentBlockTitle.classList.add('title' , 'afisha__content-title');
    afishaContentBlockTitle.textContent = el.eventName;
    const afishaContentBlockCategory = document.createElement('div');
    afishaContentBlockCategory.classList.add('afisha__content-category')
    afishaContentBlockCategory.textContent = el.eventCategory;
    const afishaContentName = document.createElement('div');
    afishaContentName.classList.add('afisha__content-name');
    afishaContentName.textContent = el.name;
    const afishaContentPrice = document.createElement('div');
    afishaContentPrice.classList.add('afisha__content-price');
    afishaContentPrice.textContent = `цены на билеты от ${el.priceTo} рублей`;
    const afishaButton = document.createElement('button');
    afishaButton.classList.add('afisha__button');
    afishaButton.textContent = 'Купить билет';

    afishaContentBlock.append(afishaContentBlockTitle, afishaContentBlockCategory, afishaContentName, afishaContentPrice, afishaButton);
    afishaImgBlock.append(afishaImg);
    afishaPart.append(afishaImgBlock, afishaContentBlock);
    afishaList.append(afishaPart);
  })
}

if (afishaList) {
  createAfisha(arr)
}


inputSearch.addEventListener('input', (e) => {
  const value = inputSearch.value;
  const newArr = [];
  
  if (value.length > 0) {
    arr.forEach(el => {
      if (el.eventName.includes(value) === true) {
        newArr.push(el)
      }
      
    })

    afishaList.innerHTML = '';
    createAfisha(newArr)
    console.log(newArr)
  }
  if (value.length === 0) {

    afishaList.innerHTML = '';
    createAfisha(arr)
  }
})



window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(createAfisha, 2000, arr)
    }
  }, {
    rootMargin: '10px',
  });
  
  if (root) observer.observe(root);

  inputSearch.addEventListener('input', (e) => {
    if (root) observer.unobserve(root);
  })

})
