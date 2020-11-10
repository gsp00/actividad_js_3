


formulario = document.querySelector('form')
formulario.onsubmit = verifyFields

function verifyFields(e){
    usuario = document.getElementById('usuario');
    password = document.getElementById('pass');

    if(usuario.value.trim() === ""){
        e.preventDefault()
        alert('El campo usuario es requerido')
    }else if(password.value.trim() =="") {
        e.preventDefault()
        alert('El campo password es requerido')
    }else if(isEmailAddress(usuario.value.trim())== false){
        e.preventDefault()
        alert('El campo usuario debe ser un email válido')
    }else{
        alert('Formulario enviado!')
    }
}


function isEmailAddress(str) {
    var pattern =/\S+@\S+\.\S+/;
    return pattern.test(str);  
 }