(() => {
    const numeroSorteado = Math.floor(Math.random() * (10 + 1));
    console.log(numeroSorteado);

    let tentativas = 1;
    while(tentativas <= 3) {
        let chute = prompt("Adivinhe um numero de 0 a 10! Maximo de tentativas: 3");
        if(numeroSorteado == chute){
            alert("Acertou! Parabens...");
            break;
        } else {
            if(tentativas === 1) {
                alert(`Errou! Você tentou ${tentativas} vez`);
                tentativas++;
            } else {
                alert(`Errou! Você já tentou ${tentativas} vezes!`);
                tentativas++;
            }
        }
    }

})();