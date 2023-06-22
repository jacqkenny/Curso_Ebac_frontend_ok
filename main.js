$('form').on('submit',function(e) {
    e.preventDefault();
    const nomeDaTarefa = $('#Nome-tarefa').val();
    const novoItem = $('<li></li>');

    $(`
        <div class="overlay-text-link">
        <a href="${nomeDaTarefa}">nome da tarefa</a>
    </div>
`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$('#Nome-tarefa').val('')
})