/* Imagine que você está fazendo um sistema para um site de venda de arquivos eletrônicos
Você deve criar funções para:
1. Cadastrar um produto. Um produto deve ter um id, nome, preço e avaliação;
2. Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;
3. Buscar um produto pelo nome e retornar o id dele;
4. Exibir todos os produtos ordenados pelo id;
5. Exibir os produtos ordenador pelo preço;
6. Exibir os produtos pela ordem de avaliação;
7. Atualizar o preço de um produto, para isso deve receber o id do produto como
parâmetro e o novo valor para atualizar;
8. Deletar um produto, não esqueça de organizar as informações para que não fique
espaços vazios;
Por fim, utilizando as funções criadas organize a execução do seu código, faça com que o
usuário possa escolher qual função executar e quando encerrar o programa. */

var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0
var indexId = 0

var idsSup = []
var nomeSup = []
var precoSup = []
var avaliacoesSup = []
var indexSup = 0



function CadastrarProduto() {
    ids[index] =  indexId + 1
    nomes[index] = prompt ("Insira o nome do produto")
    precos[index] = parseInt(prompt("Insira o preço do produto")) 
    avaliacoes[index] = parseInt(prompt("Insira a avaliação do produto")) 
    index++
    indexId++
}

function BuscarPorId(id) {
    for (var contador = 0; contador < ids.length; contador++) {
        if(id == ids[contador]){
            console.log("O produto de ID " + id + " é o " + nomes[contador] + " custa " + precos[contador] + " e tem avaliação " + avaliacoes[contador])
        }       
    }
}

function BuscarPorNome(nome) {
    for (var contador = 0; contador < nomes.length; contador++) {
        if(nome == nomes[contador]){
            console.log("O produto de nome " + nome + " tem o ID: " + ids[contador] )
        }
    }
}

var maiorId = 0

function OrdenarPorId() {

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = []

    for (var contador = 0; contador < ids.length; contador++) {
        maiorId = 0

        for (var contador2 = 0; contador2 < ids.length; contador2++) {
            if(ids[contador2] > maiorId){
                maiorId = ids [contador2]
            }           
        }

        for (var contador3 = 0; contador3 < ids.length; contador3++ && ids[contador3] != 0) {
            if(maiorId == ids[contador3]){
                idsSup[indexSup] = ids[contador3]
                nomeSup[indexSup] = nomes[contador3]
                precoSup[indexSup] = precos[contador3]
                avaliacoesSup[indexSup] = avaliacoes[contador3]
                ids[contador3] = 0
                indexSup++
            }            
        }
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }   
}


var maiorPreco = 0
function OrdenarPorPreco() {

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = []
    
    for (var contador = 0; contador < precos.length; contador++) {

        maiorPreco = 0

        for (var contador2 = 0; contador2 < precos.length; contador2++) {
            if(precos[contador2] > maiorPreco){
                maiorPreco = precos[contador2]
            }
        }

        for (var contador3 = 0; contador3 < precos.length; contador3++) {
            if(maiorPreco == precos[contador3]){
                idsSup[indexSup] = ids[contador3]
                nomeSup[indexSup] = nomes[contador3]
                precoSup[indexSup] = precos[contador3]
                avaliacoesSup[indexSup] = avaliacoes [contador3]
                indexSup++
                maiorPreco = 0
                precos[contador3] = 0
            }
            
        }
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }   
}

var maiorAvaliacao = 0

function OrdenarPorAvaliacao() {

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = [] 

    for (var contador = 0; contador < avaliacoes.length; contador++) {
        maiorAvaliacao = 0

        for (var contador2 = 0; contador2 < avaliacoes.length; contador2++) {
            if(avaliacoes[contador2] > maiorAvaliacao){
                maiorAvaliacao = avaliacoes[contador2]
            }
        }

        var contador4 = 0
        for (var contador3 = 0; contador3 < avaliacoes.length; contador3++) {
            
            if(maiorAvaliacao == avaliacoes[contador3] && contador4 == 0){

                idsSup[indexSup] = ids[contador3]
                nomeSup[indexSup] = nomes[contador3]
                precoSup[indexSup] = precos[contador3]
                avaliacoesSup[indexSup] = avaliacoes[contador3]
                avaliacoes[contador3] = 0
                indexSup++
                contador4++
            }            
        }
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
    }   
}

function AtualizarPreco(id, novoValor){
    for (var contador = 0; contador < ids.length; contador++) {
        if(id == ids[contador]){
            precos[contador] = novoValor
        }        
    }
}

function DeletarProduto(){

    idsSup = []
    nomeSup = []
    precoSup = []
    avaliacoesSup = [] 
    
    var idDeletado = parseInt(prompt("Insira o Id do produto que quer deletar."))

    for (var contador = 0; contador < ids.length; contador++) {
        if(idDeletado == ids[contador]){
            ids[contador] = 0
        }        
    }
    for (var contador = 0; contador < ids.length; contador++) {
        if(ids[contador] != 0){
            idsSup[indexSup] = ids [contador]
            nomeSup[indexSup] = nomes[contador]
            precoSup[indexSup] = precos[contador]
            avaliacoesSup[indexSup] = avaliacoes[contador]
            indexSup++
        }
        
    }

    ids = idsSup
    nomes = nomeSup
    precos = precoSup
    avaliacoes = avaliacoesSup
    indexSup = 0
    index = index - 1
}

var continuar = true

while(continuar){
    var opcao = prompt("Insira a opção que deseja executar: 1 - Cadastro, 2 - Buscar por ID, 3 - Buscar por nome, 4 - Ordenar por ID, 5 - Ordenar por preço, 6 - Ordenar por avaliação, 7 - Atualizar preço, 8 - Deletar produto")

    if(opcao == "1"){
        CadastrarProduto()
        console.log("Produto Cadastrado com Sucesso!")
    } else if(opcao == "2"){
        var id = parseInt(prompt("Insira um id para pesquisar"))
        BuscarPorId(id)
    } else if (opcao == "3"){
        var nome = prompt("Insira um nome para quesquisar.")
        BuscarPorNome(nome)
    } else if (opcao == "4"){
        OrdenarPorId()
    } else if(opcao == "5"){
        OrdenarPorPreco()
    } else if(opcao == "6"){
        OrdenarPorAvaliacao()
    }else if (opcao == "7"){
        var id = parseInt(prompt("Insira o id do produto que deseja atualizar."))
        var valor = parseInt(prompt("Insira o novo valor do produto."))
        AtualizarPreco(id, valor)
        console.log("Preço atualizado!")
    }else if (opcao == "8") {
        DeletarProduto()
        console.log("Produto deletado com sucesso.")
    } else {
        console.log("Opção inválida!")
    }

    var opcaoContinuar = prompt("Deseja continuar fazendo operações? s ou n")
    if( opcaoContinuar != "s"){
        continuar = false
    }
}