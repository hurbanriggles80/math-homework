function calculateGCD(a, b) {
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function fibonacci(n) {
    if (n <= 1) return n;
    let fibSequence = [0, 1];
    for(let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence[n - 1];
}
