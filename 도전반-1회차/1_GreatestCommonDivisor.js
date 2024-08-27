//심플한 방법
function GCD(a, b){
    if(a < b){
        const tmp = a;
        a = b;
        b = tmp;
    }

    for(let i = b; i > 0; i--){
        if((a % i + b % i) === 0){
            return i;
        }    
    }   
    return 0;
}

//비트연산
function gcd(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
        //1로 and 연산하여 비트연시 0이 남으면 짝수입니다.
    if ((a & 1) === 0 && (b & 1) === 0) {
        return gcd(a >> 1, b >> 1) << 1;
    }

    if ((a & 1) === 0) {
        return gcd(a >> 1, b); 
    }

    if ((b & 1) === 0) {
        return gcd(a, b >> 1); 
    }

    if (a > b) {
        return gcd((a - b) >> 1, b);
    } else {
        return gcd((b - a) >> 1, a);
    }
}

// 예제 사용법
let a = 18;
let b = 15;
console.log(`GCD of ${a} and ${b} is: ${gcd(a, b)}`);

