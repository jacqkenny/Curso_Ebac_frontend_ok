$('form').on('submit',function(e) {
    e.preventDefault();
    const nomeDaTarefa = $('#Nome-tarefa').val();
    if (nomeDaTarefa.trim()!==""){
        const novoItem = $(`
        <li>${nomeDaTarefa}</li>
        `);
        $('#listaNaMao').append(novoItem);
        $('#Nome-tarefa').val('');
    }
});

$('#listaNaMao').on('click', 'li', function(){
    $(this).toggleClass('checked');
});

