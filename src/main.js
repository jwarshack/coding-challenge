const button = document.getElementById('btn');
const modal = document.getElementById('modal');
const content = modal.querySelector('.content');
const closeBtn = modal.querySelector('#modal-close');
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('h1').classList.replace('hide', 'show');
  document.querySelector('h1').classList.replace('-translate-x-1/2', '-translate-x-0');

})


button.addEventListener('click', () => {
  modal.classList.replace('hide-modal', 'show-modal');

  var show = document.getElementsByClassName('show');
  for (let i = 0; i < show.length; i++) {
    console.log(show[i])
    show[i].classList.replace('show', 'hide');
  }
  content.classList.replace('hide-content', 'show-content');
});


closeBtn.addEventListener('click', (event) => {
  if (modal.classList.contains('show-modal')) {    
    content.classList.replace('show-content', 'hide-content');
    modal.classList.replace('show-modal', 'hide-modal');
    var hide = document.getElementsByClassName('hide');
    console.log(hide)
    for (let i = 0; i < hide.length; i++) {
      console.log(hide.length)
      console.log(hide[i])
      hide[i].classList.replace('hide', 'show');
    }
    
  }


});

