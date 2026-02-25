let vetororigem = [0, 1, 2, 3, 4, 5, 6, 7, 8];

vetororigem.sort((a, b) => {
  
    let binarioA = a.toString(2);
    let binarioB = b.toString(2);

   
    let bitsA = binarioA.split('1').length - 1;
    let bitsB = binarioB.split('1').length - 1;

 
    if (bitsA !== bitsB) {
        return bitsA - bitsB; 
    } else {
        return a - b; 
    }
});

console.log(vetororigem); 
