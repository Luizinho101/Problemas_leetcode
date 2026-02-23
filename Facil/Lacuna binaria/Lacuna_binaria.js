
var binaryGap = function(n) {

    let binario = n.toString(2); 

    let maiorDistancia = 0; 
    let ultimaPosicao = -1; 

    for (let i = 0; i < binario.length; i++) {
        if (binario[i] === "1") {
            
        
            if (ultimaPosicao !== -1) {
        
                let distanciaAtual = i - ultimaPosicao;
                
                if (distanciaAtual > maiorDistancia) {
                    maiorDistancia = distanciaAtual;
                }
            }
            ultimaPosicao = i;
        }
    }

    return maiorDistancia;
};

console.log(binaryGap(22));