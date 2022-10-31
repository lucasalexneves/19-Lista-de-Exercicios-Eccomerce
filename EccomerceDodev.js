



var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0


function CadastrarProduto() {
    ids[index] =  parseInt(prompt("Insira o ID do produto:")) 
    nomes[index] = prompt ("Insira o nome do produto")
    precos[index] = parseInt(prompt("Insira o preço do produto")) 
    avaliacoes[index] = parseInt(prompt("Insira a avaliação do produto")) 
    index++
}

function BuscarPorId(id) {
    for (var contador = 0; contador < ids.length; contador++) {
        if(id == ids[contador]){
            console.log("O produto de ID " + id + " é o " + nome[contador] + " custa " + precos[contador] + " e tem avaliação " + avaliacoes[contador])
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