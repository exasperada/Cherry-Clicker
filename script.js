var Pontos = 0;
var up1 = 1;
var upgrades = 0;

function diminuirTamanho() {
    var imagem = document.getElementById('cherryImage');
    imagem.style.transform = 'scale(0.9)';


    setTimeout(function() {
        imagem.style.transform = 'scale(1)';
    }, 100); 
    Pontos = Pontos + up1;
    document.getElementById('contador').innerHTML = "Pontos " + Pontos;
    finalizarjogo();
}


function upgrade1(ValorBaseUpgrade){
    if (Pontos >= 25) {
        upgrades += 1
        Pontos = Pontos - 25;
        up1 = up1 + ValorBaseUpgrade;
        document.getElementById('contador').innerHTML = "Pontos " + Pontos;
        document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
        document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
    }
}
function upgrade2(ValorBaseUpgrade2){
    if(Pontos >= 60){
        upgrades += 1
        Pontos = Pontos - 60;
        up1 = up1 + ValorBaseUpgrade2
        document.getElementById('contador').innerHTML = "Pontos " + Pontos;
        document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
        document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
    }
}
function upgrade3(ValorBaseUpgrade3){
    if(Pontos >= 120){
        upgrades += 1
        Pontos = Pontos - 120;
        up1 = up1 + ValorBaseUpgrade3
        document.getElementById('contador').innerHTML = "Pontos " + Pontos;
        document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
        document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
    }
}

    function upgrade4(ValorBaseUpgrade4){
        if(Pontos >= 300){
            upgrades += 1
            Pontos = Pontos - 300;
            up1 = up1 + ValorBaseUpgrade4
            document.getElementById('contador').innerHTML = "Pontos " + Pontos;
            document.getElementById('cerejasPorClique').innerHTML = "Cerejas por clique: " + up1;
            document.getElementById('upgrades').innerHTML = "Upgrades: " + upgrades;
        }
}
function finalizarjogo(){
    if(Pontos >= 500){
        alert("Parabéns você chegou no final!!!")
        location.reload();
    }
}

