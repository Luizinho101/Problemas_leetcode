
var countPrimeSetBits = function(left, right) {
    let contadorGeral = 0;


    for (let i = left; i <= right; i++) {

        let binario = i.toString(2);
   
        let quantidadeDeUns = binario.replaceAll("0", "").length;

  
        if (
            quantidadeDeUns === 2 || 
            quantidadeDeUns === 3 || 
            quantidadeDeUns === 5 || 
            quantidadeDeUns === 7 || 
            quantidadeDeUns === 11 || 
            quantidadeDeUns === 13 || 
            quantidadeDeUns === 17 || 
            quantidadeDeUns === 19
        ) {
            contadorGeral++;
        }
    }

 
    return contadorGeral;
};


let resultado = countPrimeSetBits(6, 10);
console.log("Resultado para o intervalo [6, 10]:", resultado); 



