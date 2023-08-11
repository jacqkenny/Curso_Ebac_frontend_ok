$('form').on('submit',function(e) {
    e.preventDefault();
    const nomeDaTarefa = $('#Nome-tarefa').val();
    const novoItem = $(`<li>${nomeDaTarefa}</li>`);
    $(`
    <a href="${nomeDaTarefa}">
    </a>
`).appendTo(novoItem);
$(novoItem).appendTo('ul');
$('#Nome-tarefa').val('');
$('ul').on('click','li,checked',function(){
$('.checked').main.css('text-decoration', 'line-through');
})


})

