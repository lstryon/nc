// carne - 400g por pessoa,se + 6h - 650
// cerveja - 1200 ml por pessoa,se + 6h - 2000 ml
// bebidas - 1000 ml por pessoa,se + 6h - 1500 ml
// crianças valem 0,5

let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("result");

function calc(){
    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputDuracao.value;

    let qntTotalCarne = carnePP(duracao)*adultos+(carnePP(duracao)/2*criancas); 
    let qntTotalCerveja = cervejaPP(duracao)*adultos;
    let qntTotalBebida = bebidaPP(duracao)*adultos+(bebidaPP(duracao)/2*criancas);

    resultado.innerHTML = `<p>${qntTotalCarne/1000}Kg de Carne<p/>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja/350)} Latas de Cerveja<p/>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalBebida/2000)} L de Refri<p/>`
}

function carnePP(duracao){
    if(duracao>=6){
        return  650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao>=6){
        return  2000;
    } else {
        return 1200;
    }  
}

function bebidaPP(duracao){
    if(duracao>=6){
        return  1500;
    } else {
        return 1000;
    }
    
}