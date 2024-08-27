let arr =  Array.from({ length: 15 }, (_, i) => Math.floor(Math.random() * 30)+ 1);

//단순 중복루트 버전
let maxCount = 0;
for(let i in arr){
    let tmp = {};
    let count = 0;
    
    for(let j = i; j < arr.length; j++){
        let num = arr[j];
        if(tmp[num] !== undefined){
            if(maxCount < count){
                maxCount = count;
            }
            break;
        }
        tmp[num] = null;
        count++;
    }
}
console.log(maxCount);


//시간 복잡도 개선버전
let start = 0;
let map = {};
for (let end = 0; end < arr.length; end++) {
    let num = arr[end];
    
    // 중복된 숫자가 있으면 start를 이동
    while (map[num] !== undefined) {
        delete map[arr[start]];
        start++;
    }
    
    // 현재 숫자를 맵에 추가
    map[num] = true;
    
    // 현재 윈도우 크기를 계산하고, 최대값 갱신
    maxCount = Math.max(maxCount, end - start + 1);
}

console.log(maxCount);