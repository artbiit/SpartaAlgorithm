const numbers = Array.from({ length: Math.floor(Math.random() * 1000)+ 1 }, (_, i) => Math.floor(Math.random() * 2000) - 1000);

//라이브러리 사용법
console.log([Math.max(...numbers), Math.min(...numbers)]);

let maxAndMin = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
numbers.forEach( (v, i) => {
if(maxAndMin[0] < v){
    maxAndMin[0] = v;
}else if(maxAndMin[1] > v ){
    maxAndMin[1] = v;
}
});

console.log(maxAndMin);