$('form').on('submit',function(e) {
    e.preventDefault();
    const nomeDaTarefa = $('#Nome-tarefa').val();
    const novoItem = $('<li></li>');
    $(`
    <a href="${nomeDaTarefa}">
    pintar a casa
    </a>
`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$('#Nome-tarefa').val('')
})