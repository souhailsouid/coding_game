
function calc(array, n1, n2) {
    array = array.slice(n1, n2 + 1)
    console.log('cquoi', array)
    if (array.length !== 0) {
        return array.reduce((a, b) => a + b)
    }   
}

exports.calc = calc

