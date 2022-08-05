(()=>{
    //Código sem categorias na listagem
    let listaDeCompras = [];
    const adicionarComida = prompt("Deseja adicionar uma comida na sua lista de compras? sim ou nao");

    if(adicionarComida !== "sim"){
        alert("Legal! Pode ir embora!");
    }
    while(adicionarComida === "sim"){
        const comidaEspecifica = prompt("Digite a comida que deseja inserir:");
        listaDeCompras.push(" " + comidaEspecifica);
        const continuarAdicionandoComidas = prompt("Deseja adicionar uma comida na sua lista de compras? sim ou nao");
        if(continuarAdicionandoComidas === "sim"){
            continue;
        } else {
            alert(`Aqui está sua lisa de compras: ${listaDeCompras}`);
            break;
        }
    }
})();