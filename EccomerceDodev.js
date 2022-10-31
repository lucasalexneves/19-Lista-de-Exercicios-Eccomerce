



var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0
var idsSup = []
var nomeSup = []
var precoSup = []
var avaliacoesSup = []
var indexSup = 0



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

var maiorId = 0

function OrdenarPorId() {
    for (var contador = 0; contador < ids.length; contador++) {
        maiorId = ids[contador]

        for (var contador2 = 0; contador2 < ids.length; contador2++) {
            if(ids[contador2] > maiorId){
                maiorId = ids [contador2]
            }           
        }

        for (var contador3 = 0; contador3 < ids.length; contador3++) {
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
    for (var contador = 0; contador < nomes.length; contador++) {
        maiorPreco = precos[contador]

        for (var contador2 = 0; contador2 < nomes.length; contador2++) {
            if(precos[contador2 > maiorPreco]){
                maiorPreco = precos[contador2]
            }
        }

        for (var contador3 = 0; contador3 < nomes.length; contador3++) {
            if(maiorPreco == precos[contador3]){
                idsSup[indexSup] = ids[contador3]
                nomeSup[indexSup] = nomes[contador3]
                precoSup[indexSup] = precos[contador3]
                avaliacoesSup[indexSup] = avaliacoes [contador3]
                precos[contador3] = 0
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

var maiorAvaliacao = 0

function OrdenarPorAvaliacao() {
    for (var contador = 0; contador < avaliacoes.length; contador++) {
        maiorAvaliacao = avaliacoes[contador]

        for (var contador2 = 0; contador2 < avaliacoes.length; contador2++) {
            if(avaliacoes[contador] > maiorAvaliacao){
                maiorAvaliacao = avaliacoes[contador]
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


}