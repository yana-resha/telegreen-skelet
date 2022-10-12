
  let block =  document.querySelectorAll('.block-with-image');
  
  block.forEach(el => {
    const height = el.getBoundingClientRect().height;
    const imageBlock = el.querySelector('.block-with-image__image');
    imageBlock.style.maxHeight = `${height}px`
    // console.log(el.querySelector('.block-with-image__image'))
  })
  // var height = $( '.block-with-image__content' ).height(); 
  // $( '#div-2' ).height(height); 
