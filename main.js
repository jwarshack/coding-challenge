let button = document.getElementById('btn');

button.addEventListener('click', () => {
  document.getElementById('modal').classList.add('scale-100', 'rounded-none', 'translate-x-44', '-translate-y-14');
  // document.getElementById('modal').classList.remove('hidden');
  let hide = document.getElementsByClassName('hide');
  for (i = 0; i < hide.length; i ++) {
    hide[i].classList.add('opacity-0');
  }
  document.querySelector('#modal .content').classList.add('opacity-100', '-translate-x-0');
});

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('scale-100', 'rounded-none', 'translate-x-44', '-translate-y-14');
  document.getElementById('modal').classList.add('scale-0', 'rounded-50%', 'translate-x-0', '-translate-y-0');


});