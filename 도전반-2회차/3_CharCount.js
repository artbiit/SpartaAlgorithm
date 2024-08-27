//a ~ z로 이루어진 1 ~ 1000 자리의 문자열 생성
const asciiArray = Array.from({ length: Math.floor(Math.random() * 1000)+ 1 }, (_, i) => Math.floor(Math.random() * 25)+ 97);
const randomStr =  String.fromCharCode(...asciiArray);

let map = new Map();
for(let chr of randomStr){
    const val = map.get(chr);
    map.set(chr, val === undefined ? 1 : val+1);
}

let result = '';
map.forEach( (value, key) => {result +=`${key}${value}/`;});
result = result.substring(0, result.length-1);
console.log(result);