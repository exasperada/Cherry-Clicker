let cerejas = 0;
let cerejasPorClique = 1;
let upgradesComprados = 0;

function atualizarTela() {
    document.getElementById('cerejas').innerText = `Cerejas: ${cerejas}/500`;
    document.getElementById('cerejasPorClique').innerText = `Cerejas por clique: ${cerejasPorClique}`;
    document.getElementById('upgrades').innerText = `Upgrades: ${upgradesComprados}`;
}

document.getElementById('cherryImage').addEventListener('click', () => {
    cerejas += cerejasPorClique;
    atualizarTela();
});

function comprarUpgrade(custo, aumento) {
    if (cerejas >= custo) {
        cerejas -= custo;
        cerejasPorClique += aumento;
        upgradesComprados++;
        atualizarTela();
    } else {
        alert("Você não tem cerejas suficientes!");
    }
}
function finalizarjogo(){
    if(Pontos >= 500){
        alert("Parabéns você chegou no final!!!")     //alerta de vitória
        location.reload();                            //reinicia o jogo
    }
}

