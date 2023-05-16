$(document).ready(function() { //Usamos o $() para selecionar o elemento
    //console.log(document.querySelector('header button')); //forma convecional de selecionar o elemento com javascript
    //console.log($('header button')); //forma de selecionar elemento com JQuery
    //document.querySelector('header button').addEventListener('click', function() { //forma de dar call back em Js, quando o botao for clicado

    $('header button').click(function() { //forma de dar call back com JQuery quando o botao for clicado
        $('form').slideDown(); //slideDown faz com que o formulário seja exibido na tela
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //slideUp faz com que o formulário volte a ficar escondido
    })

    $('form').on('submit', function(e) { //forma de dar call back com evento(e)
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //val seria a propriedade value no JS puro
        const novoItem = $('<li style="display: none"></li>'); //tornando a imagem invisivel, ver linha 27
        $(`<img src="${enderecoDaNovaImagem}" >`).appendTo(novoItem); //appendTo insere a imagem dentro do <li>
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000); //assim que o usuário envia a imagem, ela será exibida com fade de 1000ms
            $('#endereco-imagem-nova').val(''); //limpando o input da URL após adicionar imagem
    })
    
})