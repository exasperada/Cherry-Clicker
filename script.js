var Pontos = 0;    //controla pontuação atual
var up1 = 1;       //pontos ganhos por click
var upgrades = 0;  //upgrades comprados

//Aplica um efeito de redução temporária no tamanho da imagem para simular que foi clicada

function diminuirTamanho() {
    var imagem = document.getElementById('cherryImage');
    imagem.style.transform = 'scale(0.9)';

    //Após 100ms volta o tamanho original da imagem

    setTimeout(function() {
        imagem.style.transform = 'scale(1)';
    }, 100); 
    Pontos = Pontos + up1;                                                 //adiciona os pontos por clique à pontuação atual
    document.getElementById('contador').innerHTML = "Cerejas: " + Pontos;    //atualiza com a nova pontuação
    finalizarjogo();                                                       //chama a função para verificar se o jogador ganhou o jogo
} 


function upgrade1(ValorBaseUpgrade){
    if (Pontos >= 25) {                  //só permite comprar se o jogador tiver 25 pontos
        upgrades += 1                    //aumenta em 1 a contagem de upgrades
        Pontos = Pontos - 25;            //subtrai os pontos para compra
        up1 = up1 + ValorBaseUpgrade;    //aumenta os pontos por click de acordo com o valor do upgrade
        //atualiza com os novos valores
        document.getElementById('contador').innerHTML = "Cerejas: " + Pontos;
        document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
        document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
    }
}
<<<<<<< HEAD

document.getElementById('cherryImage').addEventListener('click', () => {
    cerejas += cerejasPorClique;
if (cerejas > 500) {
    cerejas = 500;
}
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
=======
function upgrade2(ValorBaseUpgrade2){
    if(Pontos >= 60){                    //só permite comprar se o jogador tiver 60 pontos
        upgrades += 1                    //aumenta em 1 a contagem de upgrades
        Pontos = Pontos - 60;            //subtrai os pontos para compra
        up1 = up1 + ValorBaseUpgrade2    //aumenta os pontos por click de acordo com o valor do upgrade
        //atualiza com os novos valores
        document.getElementById('contador').innerHTML = "Cerejas: " + Pontos;
        document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
        document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
    }
}
function upgrade3(ValorBaseUpgrade3){
    if(Pontos >= 120){                    //só permite comprar se o jogador tiver 120 pontos
        upgrades += 1                     //aumenta em 1 a contagem de upgrades
        Pontos = Pontos - 120;            //subtrai os pontos para compra
        up1 = up1 + ValorBaseUpgrade3     //aumenta os pontos por click de acordo com o valor do upgrade
        //atualiza com os novos valores
        document.getElementById('contador').innerHTML = "Cerejas: " + Pontos;
        document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
        document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
>>>>>>> 9cf6f41230a78e5c215a8f7d65bd71e512b2928d
    }
}

    function upgrade4(ValorBaseUpgrade4){
        if(Pontos >= 300){                    //só permite comprar se o jogador tiver 300 pontos
            upgrades += 1                     //aumenta em 1 a contagem de upgrades
            Pontos = Pontos - 300;            //subtrai os pontos para compra
            up1 = up1 + ValorBaseUpgrade4     //aumenta os pontos por click de acordo com o valor do upgrade
            //atualiza com os novos valores
            document.getElementById('contador').innerHTML = "Cerejas: " + Pontos;
            document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
            document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
        }
}
function finalizarjogo(){
    if(Pontos >= 500){
        alert("Parabéns você chegou no final!!!")     //alerta de vitória
        location.reload();                            //reinicia o jogo
    }
}

