function reiniciar() {

    quantidade = document.getElementById('quantidade').value = '';
    de = document.getElementById('de').value = '';
    ate = document.getElementById('ate').value = '';

    document.getElementById("sorteados").innerHTML = `Números sorteados: nenhum até agora`;
    alterarStatusBotao();

}




function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (quantidade >= ate) {

        alert('O quantidade de numeros não pode ser maior que o limite maximo, favor corrigir');
        return;


    } else {

        let diferenca = (ate - de);

        if (quantidade > diferenca) {

            alert('O quantidade de numeros não pode ser maior que a distancia entre o minimo e maximo, favor corrigir');
            return;

        } else {


            for (let i = 0; i < quantidade; i++) {



                numero = obterNumeroAleatorio(de, ate);

                while (sorteados.includes(numero)) {

                    numero = obterNumeroAleatorio(de, ate);


                }

                sorteados.push(numero);
                document.getElementById("sorteados").innerHTML = `Os numeros sorteados foram: ${sorteados}`;

            }

            alterarStatusBotao();

        }
    }


}


function obterNumeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {

        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');


    }

}