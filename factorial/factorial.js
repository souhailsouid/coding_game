function calcFactorial(n) {
    const list = []
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    for (let i = 0; i <= n; i++) {
        list.push(i)   
    }
    list.splice(0, 1, 1)
   return list.reduce(reducer)
}

function factorial(n) {
    return calcFactorial(n)
}

exports.factorial = factorial