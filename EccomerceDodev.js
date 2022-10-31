



var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0


function CadastrarProduto() {
    ids[index] =  parseInt(prompt("Insira o ID do produto:")) 
    nomes[index] = prompt ("Insira o nome do produto")
    precos[index] = parseInt(prompt("Insira o preço do produto")) 
    avaliacoes[index] = parseInt(prompt("Insira a avaliação do produto") ) 
}