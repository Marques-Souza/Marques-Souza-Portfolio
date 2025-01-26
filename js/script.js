// SESSÃO DO MENU RESPONSIVO
const menuHamburgue = document.querySelector(".menu-hamburgue");
menuHamburgue.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector(".nav-responsive");
  menuHamburgue.classList.toggle("change");

  if (menuHamburgue.classList.contains("change")) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

emailjs.init("wYUdpeheU_WN-tM9U");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Verificar se todos os campos estão preenchidos
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (!name || !phone || !email || !subject || !message) {
      // Se algum campo estiver vazio, exibe o alerta e impede o envio
      alert("Please fill in all fields before submitting.");
      return; // Interrompe o envio do formulário
    }

    // Envia o formulário para o EmailJS
    emailjs.sendForm("service_9s7kcci", "template_u1689r8", this).then(
      function (response) {
        // Exibe o alerta de sucesso
        alert("Message sent successfully!");
        console.log("Success:", response);

        // Reseta o formulário após o envio bem-sucedido
        document.getElementById("contact-form").reset();
      },
      function (error) {
        // Exibe o alerta de erro
        alert("Failed to send message, please try again.");
        console.error("Error:", error);
      }
    );
  });
