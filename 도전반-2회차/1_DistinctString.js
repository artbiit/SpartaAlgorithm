//a ~ z로 이루어진 1 ~ 1000 자리의 문자열 생성
const asciiArray = Array.from({ length: Math.floor(Math.random() * 1000)+ 1 }, (_, i) => Math.floor(Math.random() * 25)+ 97);
const randomStr =  String.fromCharCode(...asciiArray);
//이거쓰면 알아서 되긴합니다.
// let setStr = new Set(randomStr);

let collect = {};
for(let chr of randomStr){
    if(collect[chr] !== undefined){
        continue;
    }
    collect[chr] = chr;

}
//순차적으로 수집했기에 별도의 정렬과정은 필요없습니다.
console.log({length: randomStr.length, randomStr});
console.log(Object.values(collect).join(''));