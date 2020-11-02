function average(table) {
    if(table.length){
        return Math.round(table.reduce((a, b) => a + b /table.length))
    }
    return table.round()
}

exports.average = average