const urlBase = 'https://api-enigma-tempo.onrender.com/api/';
$(function () {
    $('#header').load('header.html');
    $('#footer').load('footer.html');
  setTimeout(function(){
    if (sessionStorage.getItem('user') != null) {
      document.getElementById('jogar').classList.remove('d-none');
      document.getElementById('login').classList.add('d-none');
      document.getElementById('logout').classList.remove('d-none');
    }
  },100);
});


async function buttonClick(btn) {
  return new Promise((resolve) => (btn.onclick = () => resolve()));
}


function logout() {
  sessionStorage.clear();
  window.location.href = 'login.html';
}


