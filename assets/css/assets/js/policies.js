document.addEventListener('click', e => {
  if (e.target.matches('.close-btn')) {
    const wrapper = document.querySelector('.policy-wrapper');
    if (wrapper) wrapper.style.display = 'none';
  }
});
