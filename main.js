let button = document.getElementById('btn');

button.addEventListener('click', () => {
  document.getElementById('modal').classList.add('scale-100', 'rounded-none', 'translate-x-44', '-translate-y-14')
  // document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('scale-100', 'rounded-none', 'translate-x-44', '-translate-y-14')

});