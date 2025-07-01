$(document).ready(function () {
    // Inicializa o carrossel Slick
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // Formulário de Restaurantes
    document.getElementById('preCadastroFormRest').addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio do formulário
        document.getElementById('message').innerHTML = 'Obrigado! Entraremos em contato em breve.'; // Exibe a mensagem
        document.getElementById('preCadastroFormRest').reset(); // Reseta o formulário
    });

    // Formulário de Clientes (Trabalhadores)
    document.getElementById('preCadastroFormCli').addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio do formulário
        document.getElementById('message').innerHTML = 'Obrigado! Entraremos em contato em breve.'; // Exibe a mensagem
        document.getElementById('preCadastroFormCli').reset(); // Reseta o formulário
    });
});