

// function validarForm() {
 
// }

function registerSubmit() {
     const user_registro = document.getElementById("user_registro").value;
     localStorage.setItem("nombreUsuario", user_registro);
    console.log(user_registro);

}
   
  const form_login = document.getElementById("form_login");
   const form_register = document.getElementById("form_register");
   const user_email = document.getElementById("email");
   const user_login = document.getElementById("user_login");

    const pass_login = document.getElementById("pass_login");
    const alertSuccess = document.getElementById("alertSuccess");


    

console.log(user_registro, pass_login);
localStorage.setItem("nombreLogin", user_login);

localStorage.setItem("contraseñaUsuario", pass_login);



// const usuario = "admin";
const usuario = localStorage.getItem("nombreUsuario");
const pass = 1234;


const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Login Exitoso";
};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });

};


form_login.addEventListener("submit", (e) => {
    e.preventDefault();


    alertSuccess.classList.add("d-none");

    // GENERAMOS UN ARRAY CON LOS MENSAJES DE ERROR
    const errores = [];

    // validar email
    if (user_login.value != usuario) {
        user_login.classList.add("is-invalid");

        errores.push({
            tipo: alertUser,
            msg: "Usuario Inválido",
        });
    } else {
        
        if (user_login.value.length > 35) {
            user_login.classList.add("is-invalid");

            errores.push({
                tipo: alertUser,
                msg: "Cantidad de caracteres supera el limite",
            });
        }
        else{
            user_login.classList.remove("is-invalid");
            user_login.classList.add("is-valid");
            alertUser.classList.add("d-none");
        }
        
    }

    // Validamos la contraseña del user

    if (parseInt(pass_login.value) != pass) {
        errores.push({
            tipo: alertPass,
            msg: "Contraseña Inválida",
        });
    } else {
        alertPass.classList.add("d-none");
    }

    if (errores.length != 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formulario enviado con éxito");

    // Ejecutamos la funcion
    pintarMensajeExito();
});
