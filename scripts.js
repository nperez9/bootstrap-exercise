const validEmail = 'asd@gmail.com';
const validPassword = '123456';

function login(event) {
  event.preventDefault();
  
  console.info('me ejecuto');

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === validEmail && validPassword === password) {
    window.location.href = 'inicio.html';
  } else {
    document.getElementById('error').innerHTML = "<span> Usuario o contraseña invalida </span>";
  }
}