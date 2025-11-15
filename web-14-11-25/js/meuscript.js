function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');//Substitui tudo que não for dígito
    //console.log(cep);
    if (cep != "") {
        let validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            //Enquanto aguarda a consulta

            let inputs = document.querySelectorAll('.endereco');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "...";
            }

            //Simular que está carregando
            // document.getElementById('rua').value= "...";
            // document.getElementById('bairro').value= "...";
            // document.getElementById('cidade').value= "...";
            // document.getElementById('uf').value= "...";
            // document.getElementById('ibge').value= "...";

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);



        } else {
            alert("CEP INVÁLIDO!!");
        }
    }
}

function meu_callback(conteudo) {
    if(!("erro" in conteudo)){
        document.getElementById('rua').value= conteudo.logradouro;
        document.getElementById('bairro').value= conteudo.bairro;
        document.getElementById('cidade').value= conteudo.localidade;
        document.getElementById('uf').value= conteudo.estado;
        document.getElementById('ibge').value= conteudo.ibge;

    }

}
