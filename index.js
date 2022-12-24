document.addEventListener('click', (ev) => {
  if (ev.target.id === 'expand') {
    ev.target.parentElement.classList.toggle('open');
  }
})

a = document.getElementById("dona");
a.addEventListener('click', victor);
function victor () {
  document.getElementById('yellow').innerHTML= Date ();
}
