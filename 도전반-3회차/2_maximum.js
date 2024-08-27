/**이진 배열 nums와 정수 k가 주어졌을 때, 최대 k개의 0을 1로 뒤집을 수 있다면 배열에서 연속된 1의 최대 개수를 반환하세요. */


function solution() {
    const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
    const k = 3;

    let left = 0;
    let max = 0;
    let zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

  //      console.log(max, right, left, right - left + 1);
        max = Math.max(max, right - left + 1);
        
    }

    console.log(max);
}

solution();  // 출력: 10