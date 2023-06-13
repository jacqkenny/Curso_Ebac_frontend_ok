$('form').on('subimit',function(e) {
    e.preventDefault();
    const nomeDaTarefa = $('#Nome-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`
        <div class="overlay-text-link">
        <a href="${nomeDaNovaTarefa}">
        </a>
    </div>
`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$('#Nome-tarefa').val('')
})