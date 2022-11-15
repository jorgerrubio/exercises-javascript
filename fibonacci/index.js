// without recursion
const fibonacci = (num) => {
    const fib = [0, 1]
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[num]
}
console.time('fibonacci');
[1, 5, 10, 15, 40, 100].forEach(num => console.log(fibonacci(num)));
console.timeEnd('fibonacci');

// with recursion
const fibonacci2 = num => {
    if (n < 2) return n
    return fibonacci2(n - 1) + fibonacci2(n - 2) 
}

console.time('fibonacci2');
[1, 5, 10, 15, 40, 100].forEach(num => console.log(fibonacci(num)));
console.timeEnd('fibonacci2');
