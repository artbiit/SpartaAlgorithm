function isValidMatch(str){
    const brackets =  {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = [];
    for(const char of str){
        if(char in brackets){
            const firstBracket = stack.length === 0 ? '' : stack.pop();

            if(firstBracket !== brackets[char]){
                return false;
            }
        }else{
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValidMatch('({[]})'));
console.log(isValidMatch('({][})'));