const number = Math.floor(Math.random() *1_000_000 )+1; //조건에 맞는 문제 수 출력
let numString = number.toString(); //문자열 형 변환

const k = Math.floor(Math.random() * numString.length - 1) + 1; // 1 ~ (자릿수 -1) 중 하나 선택 

for(let i = 0; i < k; i++){
    for(let min = 0 ; min < 10; min ++){
        let minChar = min.toString();
        const index = numString.indexOf(minChar);
        if(index === -1){
            continue;
        }

            numString = numString.slice(0, index) + numString.slice(index+1); 
        //console.log(minChar , " / ", numString);
        break;
 
    }
    
    
}

console.log(k);
console.log(number);
console.log(numString);