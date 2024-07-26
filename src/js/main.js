// // inicializa swiper carrosel home
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 5000,  //velocidade slide
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    on: {
      slideChange: function () {
        const paragraphs = document.querySelectorAll('.content_serv p');
        paragraphs.forEach((paragraph, index) => {
          animateParagraph(paragraph, index * 0.3);
        });
      },
    },
});
// console.log(swiper)


// Seleciona todos os parágrafos 
const paragrafo = document.querySelectorAll('.content_serv p');

// Função para animar cada parágrafo
function animateParagraph(paragrafo, delay) {
  gsap.fromTo(paragrafo, {
    opacity: 0,
    x: 500, // Começa fora da tela à direita
  }, {
    opacity: 1,
    x: 0, // Move para a posição normal
    duration: 0.7, // Duração da animação
    delay: delay, // Tempo de atraso
    ease: "power3.inOut" // Ajuste o efeito da animação
  });
}
// Chama a função para animar cada parágrafo com um pequeno atraso
paragrafo.forEach((paragrafo, index) => {
  animateParagraph(paragrafo, index * 0.3); // Ajuste o tempo de atraso
});


