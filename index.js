const passWordInput = document.querySelector
('#input-password')

const showPassword = document.querySelector('#show-password');
const hidePassword = document.querySelector("#hide-password");

const btnStatePassword = document.querySelector(`.btn-hide-show`);

btnStatePassword.addEventListener('click', () => {
    if (passWordInput.type== 'password') {
        passWordInput.type= "text";
        showPassword.style.display= 'block'
        hidePassword.style.display= 'none'
    }else{
        passWordInput.type=  "password"
        showPassword.style.display= 'none'
        hidePassword.style.display= 'block'
    }
})

document.getElementById("btn-login-with").addEventListener("click", function() {
    window.location.href = "index.html";
});


document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('.menu a').forEach(item => {
      item.addEventListener('click', scrollToSection);
    });
  
    // Función para manejar el desplazamiento suave
    function scrollToSection(event) {
      event.preventDefault(); // Evita que se ejecute la acción predeterminada del enlace
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId); 
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    }
  });



  