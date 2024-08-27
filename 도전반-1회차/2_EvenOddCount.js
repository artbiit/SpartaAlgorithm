function EvenOddCount(array){
    let even = odd = 0;
    for(i of array){
        if((i & 1) === 0){
            even++;
        }else{
            odd++;
        }
    }

    return {even, odd};
}

console.log( EvenOddCount( Array.from({ length: 15 }, (_, i) => i + 1)));