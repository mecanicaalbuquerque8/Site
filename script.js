document.addEventListener("DOMContentLoaded", function () {

    // Carrossel de "Quem Somos"
    const carrosselInner = document.querySelector(".carrossel-inner");
    if (carrosselInner) {
        const slides = document.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let index = 0;
        const slidesToShow = 3;

        function trocarImagem() {
            if (index >= totalSlides - slidesToShow) {
                index = 0;
            } else {
                index++;
            }
            const slideWidth = slides[0].clientWidth;
            carrosselInner.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        setInterval(trocarImagem, 5000);
    }

    // Carrossel de Serviços com setas
    const carrosselInnerServicos = document.querySelector(".carrossel-inner-servicos");
    const slidesServicos = document.querySelectorAll(".slide-servico");
    const btnPrevServicos = document.querySelector(".seta-esquerda");
    const btnNextServicos = document.querySelector(".seta-direita");

    if (carrosselInnerServicos && slidesServicos.length && btnPrevServicos && btnNextServicos) {
        const totalSlides = slidesServicos.length;
        let indexServicos = 0;
        const slidesToShow = 3;

        function atualizarCarrossel(novoIndex) {
            if (novoIndex !== undefined) {
                indexServicos = novoIndex;
            }

            const maxIndex = totalSlides - slidesToShow;
            if (indexServicos > maxIndex) indexServicos = 0;
            if (indexServicos < 0) indexServicos = maxIndex;

            const slideWidth = slidesServicos[0].offsetWidth + 20; // largura + padding
            carrosselInnerServicos.style.transform = `translateX(-${indexServicos * slideWidth}px)`;
        }

        btnPrevServicos.addEventListener("click", () => {
            atualizarCarrossel(indexServicos - 1);
            resetInterval();
        });

        btnNextServicos.addEventListener("click", () => {
            atualizarCarrossel(indexServicos + 1);
            resetInterval();
        });

        // Troca automática
        let intervalo = setInterval(() => atualizarCarrossel(indexServicos + 1), 5000);

        function resetInterval() {
            clearInterval(intervalo);
            intervalo = setInterval(() => atualizarCarrossel(indexServicos + 1), 5000);
        }
    }

    // Envio de mensagem para WhatsApp
    document.getElementById("form-whatsapp").addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const titulo = document.getElementById("titulo").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = `*Novo Contato do Site:*\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Título:* ${titulo}\n*Mensagem:* ${mensagem}`;
        const numero = "5561984084390";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");
    });
});
