


 
 
if(confirm("Deseja iniciar uma nova rodada?")) {
console.log("Bem-vindo ao jogo  BlackJack")


const cartaUsuario1 = comprarcarta()
const cartaUsuario2 = comprarcarta()
const pontuacaoUsuario = (cartaUsuario1.valor + cartaUsuario2.valor)



const cartaPc1= comprarcarta()
const cartaPc2 = comprarcarta()
let pontuacaoPc = (cartaPc1.valor + cartaPc2.valor)

console.log( `Usuario - Cartas:   ${cartaUsuario1.texto} ${cartaUsuario2.texto} - Pontuacao ${pontuacaoUsuario}`)
console.log (`Computador - cartas:  ${cartaPc1.texto}  ${cartaPc2.texto}  - Pontucao ${pontuacaoPc} `)

if (pontuacaoUsuario > pontuacaoPc) {
    console.log ("O usuario Ganhou!")
}else if (pontuacaoPc > pontucaoUsuario){
    console.log("O computador Ganhou!")
} else {
    console.log("EMPATE!")
}else{
    console.log("O jogo acabou")
}

