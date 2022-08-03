(() => {
    const destinoInicial = prompt("Deseja seguir para área de Front-End (Digite 1) ou seguir para a área de Back-End (Digite 2)?");
    const msgErro = "Resposta inválida!";
    let especializacao;
    let tecnologias = [];

    if(destinoInicial == 1) {
        const destinoFrontEnd = prompt("Deseja aprender React (Digite 1) ou Vue (Digite 2)?");
        if(destinoFrontEnd == 1) {
            tecnologias.push("React");
        } else if(destinoFrontEnd == 2) {
            tecnologias.push("Vue");
        } else {
            alert(msgErro);
        }
        especializacao = prompt("Deseja se especializar na área de Front-End (Digite 1), ou seguir desenvolvendo para se tornar Fullstack (Digite 2)?");
        if(especializacao != 1 && especializacao != 2) {
            alert(msgErro);
        }
    } else if(destinoInicial == 2) {
        const destinoBackEnd = prompt("Deseja aprender C# (Digite 1) ou Java (Digite 2)?");
        if(destinoBackEnd == 1) {
            tecnologias.push("C#");
        } else if(destinoBackEnd == 2) {
            tecnologias.push("Java");
        } else {
            alert(msgErro);
        }
        especializacao = prompt("Deseja se especializar na área de Back-End (Digite 1), ou seguir desenvolvendo para se tornar Fullstack (Digite 2)?");
        if(especializacao != 1 && especializacao != 2) {
            alert(msgErro);
        }
    } else {
        alert(msgErro);
    }

    function mostraTecnologias(){
        alert(`Estas são as tecnologias que você escolheu até agora: ${tecnologias}`);
    }

    function novasTecnologias(){
        let desejoDeAprender = prompt("Deseja conhecer/aprender novas tecnologias? (Digite 1 para SIM, digite 2 para NÃO");
        while(desejoDeAprender == 1) {
            let novaTecnologia = prompt("Digite a Tecnologia que deseja aprender! Uma de cada vez!"); 
            tecnologias.push(novaTecnologia);
            mostraTecnologias();
            let desejoDeAprenderDeNovo = prompt("Deseja conhecer/aprender mais tecnologias? (Digite 1 para SIM, digite 2 para NÃO");
            if(desejoDeAprenderDeNovo == 2) {
                desejoDeAprender = 0;
                mostraTecnologias();
                alert("Obrigado por responder!");
            }
        }
    }

    novasTecnologias();

})();