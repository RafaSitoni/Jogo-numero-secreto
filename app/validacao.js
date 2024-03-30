function verificaValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numeroMaiorMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>
            Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}
        </div>`;
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <img class="trofeu" src="img/trofeu.png">
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <div ontouchstart="">
                <div class="button">
                    <a href="#" id="jogar-novamente">Jogar Novamente</a>
                </div>
            </div>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class="maior__menor">O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div class="maior__menor>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
