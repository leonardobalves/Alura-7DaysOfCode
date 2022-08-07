(()=>{
    function soma(a, b){
        let resultado = a + b;
        return alert(resultado);
    }
    function subtracao(a, b){
        let resultado = a - b;
        return alert(resultado);
    }
    function multiplicacao(a, b){
        let resultado = a * b;
        return alert(resultado);
    }
    function divisao(a, b){
        let resultado = a / b;
        return alert(resultado);
    }
    let calculadoraLigada = true;
    while(calculadoraLigada){
        let num1 = parseInt(prompt("Digite o primeiro número"));
        let num2 = parseInt(prompt("Digite o segundo número"));
        let tipoDeOperacao = prompt("Qual operação gostaria de fazer? (soma, subtracao, multiplicacao, divisao, sair)");
        switch(tipoDeOperacao){
            case 'soma':
                soma(num1, num2);
                break;
            case 'subtracao':
                subtracao(num1, num2);
                break;
            case 'multiplicacao':
                multiplicacao(num1, num2);
                break;
            case 'divisao':
                divisao(num1, num2);
                break;
            case 'sair':
                calculadoraLigada = false;
                break;
        }
    }
})();