function ReverseAndShift(str){
    let result = '';

    for(let i = str.length-1; i >= 0 ; i--){
        let charCode = str.charCodeAt(i);
        if(charCode === 122){ //z일 경우 a이전 문자로 변경
            charCode = 96;
        }
        result += String.fromCharCode(charCode+1); //한글자 다음으로 붙이기
    }
    return result;
}

console.log(ReverseAndShift('zzzz'));