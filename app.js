function olhar(v) {
  var x = document.getElementsByClassName('senha')
  if (x[v].type == 'password') {
    x[v].type = 'text'
  }
  else {
    x[v].type = 'password'
  }
}
// Form Validation
var visor = document.getElementsByClassName('visor')
var senha = document.getElementsByClassName('senha')
var pattern = /^([\w-]+(?:\.[\w-]+))@((?:[\w-]+\.)\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
function validar(){
  if(!pattern.test(document.getElementsByClassName("email")[0].value)){
    visor[0].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Enter email correctly'
    return false
  }
  else {
    visor[0].innerHTML = ''
  }
  
  if (senha[0].value.length < 8 | senha[0].value.length > 20) {
    visor[1].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Enter the password between 8-20 characters'
    return false
  }
}


function validar1(){
  // NAME
  var nome = document.getElementById('nome')
  if (nome.value == '') {
    visor[2].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Dont leave this field empty'
    return false
  }
  else {
    visor[2].innerHTML = ''
  }

  // EMAIL
  if(!pattern.test(document.getElementsByClassName("email")[1].value)){
    visor[3].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Enter email correctly'
    return false
  }
  else {
    visor[3].innerHTML = ''
  }
  
  // PASSWORD
  if (senha[1].value.length < 8 | senha[1].value.length > 20) {
    visor[4].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Enter the password between 8-20 characters'
    return false
  }
  else {
    visor[4].innerHTML = ''
  }
  
  // CONFIRM PASSWORD
  if (senha[1].value != senha[2].value) {
    visor[5].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Passwords are not the same'
    return false
  }
}