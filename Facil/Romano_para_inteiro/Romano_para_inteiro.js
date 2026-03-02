
let valor = 'MCMXCIV';
let valorTotal = 0;

let teste = valor.split('');

for(let i=0; i < teste.length; i++ ){

    if(teste[i] == 'V' && teste[i - 1] == 'I'){
        valorTotal -= 1;
        valorTotal += 4;

    }else if(teste[i] == 'X' && teste[i - 1] == 'I'){
        valorTotal -= 1;
        valorTotal += 9;
    }
    else if(teste[i] == 'L' && teste[i - 1] == 'X'){
        valorTotal -= 10;
        valorTotal += 40;
    }
    else if(teste[i] == 'C' && teste[i - 1] == 'X'){
        valorTotal -= 10;
        valorTotal += 90;
    }
    else if(teste[i] == 'D' && teste[i - 1] == 'C'){
        valorTotal -= 100;
        valorTotal += 400;
    }
    else if(teste[i] == 'M' && teste[i - 1] == 'C'){
        valorTotal -= 100;
        valorTotal += 900;
    }else{
        switch(teste[i]){
            case 'I':
                valorTotal += 1;
                break;
            case 'V':
                valorTotal += 5;
                break;
            case 'X':
                valorTotal += 10;
                break;
            case 'L':
                valorTotal += 50;
                break;
            case 'C':
                valorTotal += 100;
                break;
            case 'D':
                valorTotal += 500;
                break;
            case 'M':
                valorTotal += 1000;
                break;
        }
    }
}
console.log(valorTotal);


