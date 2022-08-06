(()=>{
    let listaDeCompras = [];
    let listaDeFrutas = [];
    let listaDeLaticinios = [];
    let listaDeDoces = [];
    let listaDeCongelados = [];

    function qualCategoria(alimento){
        categoria = prompt("Qual a categoria do alimento? ('frutas', 'laticinios', 'doces' ou 'congelados'?");
        if(categoria === "frutas"){
            listaDeFrutas.push(alimento);          
        }
        if(categoria === "laticinios"){
            listaDeLaticinios.push(alimento);          
        }
        if(categoria === "doces"){
            listaDeDoces.push(alimento);          
        }
        if(categoria === "congelados"){
            listaDeCongelados.push(alimento);          
        }
    }

    function deletaAlimento(alimento){
        let dltFrutas = listaDeFrutas.includes(alimento);
        let dltLaticinios = listaDeLaticinios.includes(alimento);
        let dltDoces = listaDeDoces.includes(alimento);
        let dltCongelados = listaDeCongelados.includes(alimento);
        if(dltFrutas === false && dltLaticinios === false && dltDoces === false && dltCongelados === false){
            alert("O alimento não se encontra na sua lista de compras");
        } else {
            let numeroNoIndice;
            if(dltFrutas){
                numeroNoIndice = listaDeFrutas.indexOf(alimento);
                listaDeFrutas.splice(numeroNoIndice,1);
            }
            if(dltLaticinios){
                numeroNoIndice = listaDeLaticinios.indexOf(alimento);
                listaDeLaticinios.splice(numeroNoIndice,1);
            }
            if(dltDoces){
                numeroNoIndice = listaDeDoces.indexOf(alimento);
                listaDeDoces.splice(numeroNoIndice,1);
            }
            if(dltCongelados){
                numeroNoIndice = listaDeCongelados.indexOf(alimento);
                listaDeCongelados.splice(numeroNoIndice,1);
            }
        }
    }

    function mostraListas(){
       return alert(`Aqui está sua lisa de compras: - Frutas: ${listaDeFrutas} - Laticínios: ${listaDeLaticinios} - Doces: ${listaDeDoces} - Congelados: ${listaDeCongelados}`);
    }

    const adicionarComida = prompt("Deseja adicionar uma comida na sua lista de compras? sim ou nao");
    if(adicionarComida !== "sim"){
        mostraListas();
    }

    while(adicionarComida === "sim"){
        const comidaEspecifica = prompt("Digite a comida que deseja inserir:");
        listaDeCompras.push(" " + comidaEspecifica);
        qualCategoria(comidaEspecifica);
        let continuarAdicionandoComidas = prompt("Deseja adicionar uma comida na sua lista de compras? sim ou nao");
        if(continuarAdicionandoComidas === "sim"){
            continue;
        } else {
            const desejaRemover = prompt("Deseja remover algum item da sua lista de compras? sim ou nao");
            if(desejaRemover === "nao"){
                mostraListas();
                break;
            } else if (desejaRemover === "sim"){
                mostraListas();
                const descobrirAlimento = prompt("Qual alimento deseja remover?");
                deletaAlimento(descobrirAlimento);
            }
            mostraListas();
            continuarAdicionandoComidas = prompt("Deseja adicionar uma comida na sua lista de compras? sim ou nao");
            if(continuarAdicionandoComidas === "sim"){
                continue;
            } else {
                mostraListas();
                break;
            }
        }
    }
})();