//  explicationsm: https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/

function filterDuplicates(data) {

    // 1: "Set"
    [...new Set(data)];
    // 2: "Filter"
    data.filter(
        (item, index) => data.indexOf(item) === index
    )
    // 3: "Reduce"
    return data.reduce(
        (unique, item) => unique.includes(item) ? unique : [...unique, item], []
    ) 
}


exports.filterDuplicates = filterDuplicates