// header
// category menu
const categoryBtnOpen = document.querySelector('.category-btn.open');
const categoryBtnClose = document.querySelector('.category-btn.close');
const categoryArea = document.querySelector('.category-area');
const category = document.querySelector('.category');

categoryBtnOpen.addEventListener('click', () => {
  categoryArea.classList.add('grid');
  categoryBtnOpen.style.display = 'none';
  categoryBtnClose.style.display = 'inline';
  category.style.background = 'var(--dark-grey-color)';
})
categoryBtnOpen.addEventListener('mouseover', () => {
  categoryBtnOpen.style.background = 'var(--dark-grey-color)';
})
categoryBtnOpen.addEventListener('mouseout', () => {
  categoryBtnOpen.style.background = 'var(--main-color)';
})

categoryBtnClose.addEventListener('click', () => {
  categoryArea.classList.remove('grid');
  categoryBtnOpen.style.display = 'inline';
  categoryBtnClose.style.display = 'none';
  category.style.background = 'var(--main-color)';
})
categoryBtnClose.addEventListener('mouseover', () => {
  categoryBtnClose.style.background = 'var(--main-color)';
})
categoryBtnClose.addEventListener('mouseout', () => {
  categoryBtnClose.style.background = 'var(--dark-grey-color)';
})

// footer
// to top
const toTopBtn = document.querySelector('.to-top');
toTopBtn.addEventListener('click',function(){
  window.scrollTo({top: 0, behavior:'smooth'});
});
