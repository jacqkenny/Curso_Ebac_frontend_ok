$(document).ready(function() {
    $('#Telefone').mask('(00) 00000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00000-000')
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true
            },
            telefone:{
                required:true
            },
            CPF:{
                required:true
            },
            endereço:{
                required:true
            },
            CEP:{
                required:true
            },
        },
        messages: {
            nome:'Por favor, insira o seu nome'
        },
        submitHandler:function(form){
            console.log(form)
        },
        invalidHandler:function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Exitem ${camposIncorretos} campos incorretos`)
            }
        },
    })
    })