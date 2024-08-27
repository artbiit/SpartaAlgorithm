function generateRandomArray(n, m) {
    const totalElements = n * m;
    const allNumbers = Array.from({ length: totalElements }, (_, i) => i + 1);
    
    for (let i = allNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }
    
    const arrays = [];
    for (let i = 0; i < n; i++) {
        arrays.push(allNumbers.slice(i * m, (i + 1) * m));
    }

    return arrays;
}

function solution(arrays, k){
    const recursiveSumCombinations = (arrays, row = 0, currentSum = 0, results = []) => {
        if (row >= arrays.length) {
            results.push(currentSum);
            return results;
        }
    
        for (let i = 0; i < arrays[row].length; i++) {
            recursiveSumCombinations(arrays, row + 1, currentSum + arrays[row][i], results);
        }
    
        return results;
    }

    const combinations =  recursiveSumCombinations(arrays).sort((a,b) => a - b);
    console.log(combinations);
    console.log(combinations[k-1]);
    
}

const n = 3;
const m = 3;
const k = 2;

const randomArrays = generateRandomArray(n, m);
console.clear();
solution(randomArrays, k);