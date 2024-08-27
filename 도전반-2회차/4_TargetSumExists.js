const numbers = Array.from({ length: Math.floor(Math.random() * 1000)+ 1 }, (_, i) => Math.floor(Math.random() * 999) +2);

function isTargetSumExists(numbers, target){
    if(numbers.length < 2){
        return false;
    }

  return  numbers.some(function(value, index, arr){
        for(let i = index + 1; i < arr.length; i++){
            if(value+arr[i] === target){
                console.log(`${value} + ${arr[i]} = ${target}`);
                return true;
            }
        }
        
        return false;

    });
}

console.log( isTargetSumExists(numbers, 9));