function validarFormulario() {
  var nome = document.forms["formulario"]["nome"].value;
  var email = document.forms["formulario"]["email"].value;
  var data = document.forms["formulario"]["data"].value;
  var hora = document.forms["formulario"]["hora"].value;
  var dia = document.forms["formulario"]["dia"].value;
  
  if (nome == "") {
    alert("Por favor, informe seu nome.");
    return false;
  }
  
  if (email == "") {
    alert("Por favor, informe seu e-mail.");
    return false;
  }
  
  if (data == "") {
    alert("Por favor, informe a data.");
    return false;
  }
  
  if (hora == "") {
    alert("Por favor, informe a hora.");
    return false;
  }
  
  // Se tudo estiver válido, mostra um alerta de confirmação
  var confirmacao = confirm("Deseja realmente agendar este horário?");
  if (confirmacao == true) {
    alert("Agendamento realizado com sucesso!");
    return true;
  } else {
    return false;
  }
}

//carossel imagens//

let carouselContainer = document.querySelector(".carousel-container");
let carouselItems = document.querySelectorAll(".carousel-item");
let carouselPrev = document.querySelector(".carousel-prev");
let carouselNext = document.querySelector(".carousel-next");

let currentItem = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  hideSlide(currentItem);
  currentItem = (currentItem + 1) % carouselItems.length;
  showSlide(currentItem);
}

function prevSlide() {
  hideSlide(currentItem);
  currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentItem);
}

function hideSlide(index) {
  carouselItems[index].classList.remove("active");
}

function showSlide(index) {
  carouselItems[index].classList.add("active");
}

carouselPrev.addEventListener("click", prevSlide);
carouselNext.addEventListener("click", nextSlide);