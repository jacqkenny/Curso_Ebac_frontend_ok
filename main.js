$('form').on('submit',function(e) {
    e.preventDefault();
    const nomeDaTarefa = $('#Nome-tarefa').val();
    const novoItem = $('<li></li>');

    $(`
        <a href="${nomeDaTarefa}">Nome da tarefa</a>
    </div>
`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$('#Nome-tarefa').val('')
})