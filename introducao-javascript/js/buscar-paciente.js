//pegando dados externos.tipo API.
var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function(){
    // https://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });          
        }else{
            //mostrando erro-ajax
            console.log( xhr.status);
            console.log( xhr.responseText); 
            
            erroAjax.classList.remove("invisivel");                        
        }      
    });
//só é enviada com esse metodo
    xhr.send();
});