// function mostrarTexto(){
//     console.log("O texto apareceu")
// }

// var contagem = 0
//  function mostrarContagem(){
//     contagem++
//     console.log(contagem)
//  }

// setTimeout(mostrarTexto, 5000)
// setInterval(mostrarContagem, 1000)


var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var textoSaudacao = document.getElementById("textoSaudacao")
var ano = document.getElementById("ano")

var diasSemana = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA','QUARTA-FEIRA','SEXTA-FEIRA','SÁBADO']

var cumprimento = ''

var atualizarRelogio = setInterval(function (){
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay
    var anoAtual = dataAtual.getFullYear


    if(horaAtual < 10)
        horaAtual = "0" + horaAtual

    if (minutoAtual < 10) 
        minutoAtual = '0' + minutoAtual;

    if (segundoAtual < 10)
         segundoAtual = '0' + segundoAtual;

    cumprimento = trocaSaudacao(horaAtual)

    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    textoSaudacao.textContent = `${cumprimento} / ${diasSemana[diaAtual]}`
})

function trocaSaudacao(hora){
    if(hora < 6)
        return 'Boa madrugada'
    else if(hora < 12)
        return 'Bom dia'
    else
        return'Boa noite'
}
